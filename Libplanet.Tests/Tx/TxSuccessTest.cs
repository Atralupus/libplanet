using System;
using System.Collections.Immutable;
using System.Linq;
using Bencodex.Types;
using Libplanet.Crypto;
using Libplanet.Types.Assets;
using Libplanet.Types.Blocks;
using Libplanet.Types.Tx;
using Xunit;
using FAV = Libplanet.Types.Assets.FungibleAssetValue;

namespace Libplanet.Tests.Tx
{
    public class TxSuccessTest
    {
        private static readonly Currency[] Currencies = new[] { "FOO", "BAR", "BAZ", "QUX" }
            .Select(ticker => Currency.Uncapped(ticker, 0, null))
            .ToArray();

        private readonly BlockHash _blockHash;
        private readonly TxId _txid;
        private readonly ImmutableDictionary<Address, IValue> _updatedStates;

        private readonly ImmutableDictionary<Address, IImmutableDictionary<Currency, FAV>>
            _updatedFungibleAssets;

        private readonly TxSuccess _fx;

        public TxSuccessTest()
        {
            var random = new Random();
            _blockHash = random.NextBlockHash();
            _txid = random.NextTxId();
            _updatedStates = Enumerable.Repeat(random, 5).ToImmutableDictionary(
                RandomExtensions.NextAddress,
                _ => (IValue)new Bencodex.Types.Integer(random.Next())
            );
            var currencies = Currencies.ToList();
            _updatedFungibleAssets = Enumerable.Repeat(random, 5).ToImmutableDictionary(
                RandomExtensions.NextAddress,
                _ => (IImmutableDictionary<Currency, FAV>)Enumerable.Repeat(
                        0,
                        random.Next(currencies.Count))
                    .Select(__ =>
                    {
                        int i = random.Next(currencies.Count);
                        Currency c = currencies[i];
                        currencies.RemoveAt(i);
                        return c;
                    })
                    .ToImmutableDictionary(
                        c => c,
                        c => c * random.Next()
                    )
            );
            _fx = new TxSuccess(
                _blockHash,
                _txid,
                _updatedStates,
                _updatedFungibleAssets
            );
        }

        [Fact]
        public void ConstructorBuilder()
        {
            Assert.Equal(_blockHash, _fx.BlockHash);
            Assert.Equal(_txid, _fx.TxId);
            Assert.Equal(_updatedStates, _fx.UpdatedStates);
            Assert.Equal(_updatedFungibleAssets, _fx.UpdatedFungibleAssets);
        }
    }
}
