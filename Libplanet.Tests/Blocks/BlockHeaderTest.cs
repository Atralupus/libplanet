using System;
using System.Collections.Immutable;
using System.Security.Cryptography;
using Libplanet.Blocks;
using Libplanet.Tests.Common.Action;
using Xunit;
using static Libplanet.Tests.TestUtils;

namespace Libplanet.Tests.Blocks
{
    public class BlockHeaderTest : IClassFixture<BlockFixture>
    {
        private BlockFixture _fx;

        public BlockHeaderTest(BlockFixture fixture) => _fx = fixture;

        [Fact]
        public void ValidateValidHeader()
        {
            _fx.Genesis.Header.Validate();
            _fx.Next.Header.Validate();
        }

        [Fact]
        public void ValidateHash() =>
            Assert.Throws<InvalidBlockHashException>(() =>
                new BlockHeader(
                    protocolVersion: 0,
                    index: 0,
                    difficulty: _fx.Genesis.Difficulty,
                    totalDifficulty: _fx.Genesis.TotalDifficulty,
                    nonce: _fx.Genesis.Nonce,
                    miner: _fx.Genesis.Miner,
                    hash: new Random().NextBlockHash(),
                    txHash: _fx.Genesis.TxHash,
                    previousHash: _fx.Genesis.PreviousHash,
                    timestamp: _fx.Genesis.Timestamp,
                    preEvaluationHash: _fx.Genesis.PreEvaluationHash,
                    stateRootHash: _fx.Genesis.StateRootHash,
                    hashAlgorithm: _fx.GetHashAlgorithm(0)
                )
            );

        [Fact]
        public void ValidateProtocolVersion()
        {
            Assert.Throws<InvalidBlockProtocolVersionException>(() =>
                new BlockHeader(
                    protocolVersion: -1,
                    index: _fx.Next.Index,
                    difficulty: _fx.Next.Difficulty,
                    totalDifficulty: _fx.Next.TotalDifficulty,
                    nonce: _fx.Next.Nonce,
                    miner: _fx.Next.Miner,
                    hash: _fx.Next.Hash,
                    txHash: _fx.Next.TxHash,
                    previousHash: _fx.Next.PreviousHash,
                    timestamp: _fx.Next.Timestamp,
                    preEvaluationHash: GetRandomBytes(32).ToImmutableArray(),
                    stateRootHash: default,
                    hashAlgorithm: _fx.GetHashAlgorithm(_fx.Next.Index)
                )
            );

            Assert.Throws<InvalidBlockProtocolVersionException>(() =>
                new BlockHeader(
                    protocolVersion: Block<DumbAction>.CurrentProtocolVersion + 1,
                    index: _fx.Next.Index,
                    difficulty: _fx.Next.Difficulty,
                    totalDifficulty: _fx.Next.TotalDifficulty,
                    nonce: _fx.Next.Nonce,
                    miner: _fx.Next.Miner,
                    hash: _fx.Next.Hash,
                    txHash: _fx.Next.TxHash,
                    previousHash: _fx.Next.PreviousHash,
                    timestamp: _fx.Next.Timestamp,
                    preEvaluationHash: GetRandomBytes(32).ToImmutableArray(),
                    stateRootHash: default,
                    hashAlgorithm: _fx.GetHashAlgorithm(_fx.Next.Index)
                )
            );
        }

        [Fact]
        public void ValidateNonce() =>
            Assert.Throws<InvalidBlockNonceException>(() =>
                new BlockHeader(
                    protocolVersion: 0,
                    index: _fx.Next.Index,
                    difficulty: long.MaxValue,
                    totalDifficulty: _fx.Genesis.TotalDifficulty + long.MaxValue,
                    nonce: _fx.Next.Nonce,
                    miner: _fx.Next.Miner,
                    hash: _fx.Next.Hash,
                    txHash: _fx.Next.TxHash,
                    previousHash: _fx.Next.PreviousHash,
                    timestamp: _fx.Next.Timestamp,
                    preEvaluationHash: GetRandomBytes(32).ToImmutableArray(),
                    stateRootHash: default,
                    hashAlgorithm: _fx.GetHashAlgorithm(_fx.Next.Index)
                )
            );

        [Fact]
        public void ValidateIndex() =>
            Assert.Throws<InvalidBlockIndexException>(() =>
                new BlockHeader(
                    protocolVersion: 0,
                    index: -1,
                    difficulty: _fx.Next.Difficulty,
                    totalDifficulty: _fx.Next.TotalDifficulty,
                    nonce: _fx.Next.Nonce,
                    miner: _fx.Next.Miner,
                    hash: _fx.Next.Hash,
                    txHash: _fx.Next.TxHash,
                    previousHash: _fx.Next.PreviousHash,
                    timestamp: _fx.Next.Timestamp,
                    preEvaluationHash: GetRandomBytes(32).ToImmutableArray(),
                    stateRootHash: default,
                    hashAlgorithm: _fx.GetHashAlgorithm(-1)
                )
            );

        [Fact]
        public void ValidateDifficulty()
        {
            DateTimeOffset now = DateTimeOffset.UtcNow;
            var random = new Random();

            Assert.Throws<InvalidBlockDifficultyException>(() =>
                new BlockHeader(
                    protocolVersion: 0,
                    index: 0,
                    difficulty: 1000,
                    totalDifficulty: 1000,
                    nonce: default,
                    previousHash: null,
                    txHash: default,
                    hash: random.NextBlockHash(),
                    miner: default,
                    timestamp: now,
                    preEvaluationHash: GetRandomBytes(32).ToImmutableArray(),
                    stateRootHash: default,
                    hashAlgorithm: _fx.GetHashAlgorithm(0)
                )
            );

            Assert.Throws<InvalidBlockDifficultyException>(() =>
                new BlockHeader(
                    protocolVersion: 0,
                    index: 10,
                    difficulty: 0,
                    totalDifficulty: 1000,
                    nonce: default,
                    previousHash: null,
                    txHash: default,
                    hash: random.NextBlockHash(),
                    miner: default,
                    timestamp: now,
                    preEvaluationHash: GetRandomBytes(32).ToImmutableArray(),
                    stateRootHash: default,
                    hashAlgorithm: _fx.GetHashAlgorithm(10)
                )
            );

            Assert.Throws<InvalidBlockTotalDifficultyException>(() =>
                new BlockHeader(
                    protocolVersion: 0,
                    index: 10,
                    difficulty: 1000,
                    totalDifficulty: 10,
                    nonce: default,
                    previousHash: null,
                    txHash: default(HashDigest<SHA256>),
                    hash: random.NextBlockHash(),
                    miner: default,
                    timestamp: now,
                    preEvaluationHash: GetRandomBytes(32).ToImmutableArray(),
                    stateRootHash: default,
                    hashAlgorithm: _fx.GetHashAlgorithm(10)
                )
            );
        }

        [Fact]
        public void ValidatePreviousHash()
        {
            DateTimeOffset now = DateTimeOffset.UtcNow;
            var random = new Random();

            Assert.Throws<InvalidBlockPreviousHashException>(() =>
                new BlockHeader(
                    protocolVersion: 0,
                    index: 0,
                    difficulty: 0,
                    totalDifficulty: 0,
                    nonce: default,
                    previousHash: random.NextBlockHash(),
                    txHash: default(HashDigest<SHA256>),
                    hash: random.NextBlockHash(),
                    miner: default,
                    timestamp: now,
                    preEvaluationHash: GetRandomBytes(32).ToImmutableArray(),
                    stateRootHash: default,
                    hashAlgorithm: _fx.GetHashAlgorithm(0)
                )
            );

            Assert.Throws<InvalidBlockPreviousHashException>(() =>
                new BlockHeader(
                    protocolVersion: 0,
                    index: 10,
                    difficulty: 1000,
                    totalDifficulty: 1500,
                    nonce: default,
                    previousHash: null,
                    txHash: default(HashDigest<SHA256>),
                    hash: random.NextBlockHash(),
                    miner: default,
                    timestamp: now,
                    preEvaluationHash: GetRandomBytes(32).ToImmutableArray(),
                    stateRootHash: default,
                    hashAlgorithm: _fx.GetHashAlgorithm(0)
                )
            );

            Assert.Throws<InvalidBlockPreviousHashException>(() =>
                new BlockHeader(
                    protocolVersion: 0,
                    index: 0,
                    difficulty: 0,
                    totalDifficulty: 0,
                    nonce: default,
                    previousHash: random.NextBlockHash(),
                    txHash: default(HashDigest<SHA256>),
                    hash: random.NextBlockHash(),
                    miner: default,
                    timestamp: now,
                    preEvaluationHash: GetRandomBytes(32).ToImmutableArray(),
                    stateRootHash: default,
                    hashAlgorithm: _fx.GetHashAlgorithm(0)
                )
            );
        }
    }
}
