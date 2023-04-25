using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Reflection;
using Bencodex.Types;

namespace Libplanet.Action
{
    /// <summary>
    /// An <see cref="IActionTypeLoader"/> implementation to load action types
    /// without branching by block index.
    /// </summary>
    public class StaticActionTypeLoader : IActionTypeLoader
    {
        private readonly Type? _baseType;
        private readonly ImmutableHashSet<Assembly> _assembliesSet;

        private IDictionary<IValue, Type>? _types;

        /// <summary>
        /// Creates a new <see cref="StaticActionTypeLoader"/> instance.
        /// </summary>
        /// <param name="assemblies">The assemblies to load actions from.</param>
        /// <param name="baseType">The base type of actions to load.</param>
        public StaticActionTypeLoader(IEnumerable<Assembly> assemblies, Type? baseType = null)
        {
            _baseType = baseType;
            _assembliesSet = assemblies.ToImmutableHashSet();
            _types = null;
        }

        internal Type? BaseType => _baseType;

        /// <summary>
        /// Load action types inherited the base type given in the constructor from assemblies.
        /// </summary>
        /// <param name="context">A <see cref="IActionTypeLoaderContext"/> to determine
        /// what action types to use. But it isn't used in this implementation.</param>
        /// <returns>A dictionary made of action id to action type pairs.</returns>
        public IDictionary<IValue, Type> Load(IActionTypeLoaderContext context) => Load();

        /// <summary>
        /// Load all action types from assemblies.
        /// </summary>
        /// <param name="context">A <see cref="IActionTypeLoaderContext"/> to determine what action
        /// types to use. But it isn't used in this implementation.</param>
        /// <returns>A dictionary made of action id to action type pairs.</returns>
        public IEnumerable<Type> LoadAllActionTypes(IActionTypeLoaderContext context)
            => LoadAllActionTypesImpl(_assembliesSet);

        internal static StaticActionTypeLoader Create<T>()
            where T : IAction, new()
        {
            return new StaticActionTypeLoader(
                Assembly.GetEntryAssembly() is Assembly entryAssembly
                    ? new[] { typeof(T).Assembly, entryAssembly }
                    : new[] { typeof(T).Assembly },
                typeof(T)
            );
        }

        internal IDictionary<IValue, Type> Load() =>
            _types ??= LoadImpl(_assembliesSet, _baseType);

        private static IEnumerable<Type> LoadAllActionTypesImpl(IEnumerable<Assembly> assembliesSet)
        {
            var actionType = typeof(IAction);
            foreach (Assembly asm in assembliesSet)
            {
                foreach (Type t in asm.GetTypes())
                {
                    if (actionType.IsAssignableFrom(t))
                    {
                        yield return t;
                    }
                }
            }
        }

        private static IDictionary<IValue, Type> LoadImpl(
            IEnumerable<Assembly> assembliesSet, Type? baseType = null)
        {
            var types = new Dictionary<IValue, Type>();
            var actionType = typeof(IAction);
            foreach (Type t in LoadAllActionTypesImpl(assembliesSet))
            {
                if (baseType is { } bt && !bt.IsAssignableFrom(t))
                {
                    continue;
                }

                if (ActionTypeAttribute.ValueOf(t) is IValue actionId)
                {
                    if (types.TryGetValue(actionId, out Type? existing))
                    {
                        if (existing != t)
                        {
                            throw new DuplicateActionTypeIdentifierException(
                                "Multiple action types are associated with the same type ID.",
                                actionId.ToString() ?? "null",
                                ImmutableHashSet.Create(existing, t)
                            );
                        }

                        continue;
                    }

                    types[actionId] = t;
                }
            }

            return types;
        }
    }
}
