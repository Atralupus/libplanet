using System;
using System.Diagnostics.Contracts;
using Libplanet.Crypto;
using Libplanet.Store.Trie;

namespace Libplanet.Action.State
{
    /// <summary>
    /// An internal implementation of <see cref="IWorld"/>.
    /// </summary>
    [Pure]
    public class World : IWorld
    {
        private readonly IWorldState _baseState;

        public World(IWorldState baseState)
            : this(baseState, new WorldDelta())
        {
        }

        public World(
            IWorldState baseState,
            IWorldDelta delta)
        {
            _baseState = baseState;
            Delta = delta;
        }

        /// <inheritdoc/>
        public IWorldDelta Delta { get; }

        /// <inheritdoc/>
        [Pure]
        public ITrie Trie => _baseState.Trie;

        /// <inheritdoc cref="IWorldState.Legacy/>
        [Pure]
        public bool Legacy => _baseState.Legacy;

        /// <inheritdoc cref="IWorld.GetAccount"/>
        [Pure]
        public IAccount GetAccount(Address address)
        {
            return Delta.Accounts.TryGetValue(address, out IAccount? account)
                ? account
                : new Account(_baseState.GetAccountState(address));
        }

        /// <inheritdoc cref="IWorldState.GetAccountState"/>
        [Pure]
        public IAccountState GetAccountState(Address address) => GetAccount(address);

        /// <inheritdoc cref="IWorld.SetAccount/>
        [Pure]
        public IWorld SetAccount(Address address, IAccount account)
        {
            if (Legacy && !address.Equals(ReservedAddresses.LegacyAccount))
            {
                throw new ArgumentException(
                    $"Cannot set a non-legacy account ({address}) to a legacy {nameof(IWorld)}.",
                    nameof(address));
            }

            if (!address.Equals(ReservedAddresses.LegacyAccount)
                && account.TotalUpdatedFungibleAssets.Count > 0)
            {
                throw new ArgumentException(
                    $"Cannot set a non-legacy account ({address}) with an updated fungible assets.",
                    nameof(address));
            }

            return new World(_baseState, Delta.SetAccount(address, account));
        }
    }
}
