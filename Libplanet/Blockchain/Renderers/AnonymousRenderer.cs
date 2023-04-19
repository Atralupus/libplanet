using System;
using Libplanet.Action;
using Libplanet.Blocks;

namespace Libplanet.Blockchain.Renderers
{
    /// <summary>
    /// A renderer that invokes its callbacks.
    /// <para>This class is useful when you want an one-use ad-hoc implementation (i.e., Java-style
    /// anonymous class) of <see cref="IRenderer{T}"/> interface.</para>
    /// </summary>
    /// <example>
    /// With object initializers, you can easily make an one-use renderer:
    /// <code>
    /// var renderer = new AnonymousRenderer&lt;ExampleAction&gt;
    /// {
    ///     BlockRenderer = (oldTip, newTip) =>
    ///     {
    ///         // Implement RenderBlock() here.
    ///     };
    /// };
    /// </code>
    /// </example>
    /// <typeparam name="T">An <see cref="IAction"/> type.  It should match to
    /// <see cref="BlockChain{T}"/>'s type parameter.</typeparam>
    public class AnonymousRenderer<T> : IRenderer<T>
        where T : IAction, new()
    {
        /// <summary>
        /// A callback function to be invoked together with
        /// <see cref="RenderBlock(Block{T}, Block{T})"/>.
        /// </summary>
        public Action<Block<T>, Block<T>>? BlockRenderer { get; set; }

        /// <inheritdoc cref="IRenderer{T}.RenderBlock(Block{T}, Block{T})"/>
        public void RenderBlock(Block<T> oldTip, Block<T> newTip) =>
            BlockRenderer?.Invoke(oldTip, newTip);
    }
}
