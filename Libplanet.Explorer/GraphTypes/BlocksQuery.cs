using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography;
using GraphQL.Types;
using Libplanet.Action;
using Libplanet.Blockchain;
using Libplanet.Blocks;
using Libplanet.Tx;

namespace Libplanet.Explorer.GraphTypes
{
    public class BlocksQuery<T> : ObjectGraphType
        where T : IAction, new()
    {
        private BlockChain<T> _chain;

        public BlocksQuery(BlockChain<T> chain)
        {
            Field<NonNullGraphType<ListGraphType<NonNullGraphType<BlockType<T>>>>>(
                "blocks",
                arguments: new QueryArguments(
                    new QueryArgument<BooleanGraphType>
                    {
                        Name = "desc",
                        DefaultValue = false,
                    },
                    new QueryArgument<IntGraphType>
                    {
                        Name = "offset",
                        DefaultValue = 0,
                    },
                    new QueryArgument<IntGraphType> { Name = "limit" },
                    new QueryArgument<BooleanGraphType>
                    {
                        Name = "excludeEmptyTxs",
                        DefaultValue = false,
                    }
                ),
                resolve: context =>
                {
                    bool desc = context.GetArgument<bool>("desc");
                    long offset = context.GetArgument<long>("offset");
                    int? limit = context.GetArgument<int?>("limit", null);
                    bool excludeEmptyTxs = context.GetArgument<bool>("excludeEmptyTxs");
                    return ListBlocks(desc, offset, limit, excludeEmptyTxs);
                }
            );

            Field<BlockType<T>>(
                "block",
                arguments: new QueryArguments(
                    new QueryArgument<IdGraphType> { Name = "hash" }
                ),
                resolve: context =>
                {
                    HashDigest<SHA256> hash = HashDigest<SHA256>.FromString(
                        context.GetArgument<string>("hash"));
                    return _chain.Blocks[hash];
                }
            );

            Field<NonNullGraphType<ListGraphType<NonNullGraphType<TransactionType<T>>>>>(
                "transactions",
                arguments: new QueryArguments(
                    new QueryArgument<AddressType>
                    {
                        Name = "signer",
                        DefaultValue = null,
                    },
                    new QueryArgument<AddressType>
                    {
                        Name = "involvedAddress",
                        DefaultValue = null,
                    },
                    new QueryArgument<BooleanGraphType>
                    {
                        Name = "desc",
                        DefaultValue = false,
                    },
                    new QueryArgument<IntGraphType>
                    {
                        Name = "offset",
                        DefaultValue = 0,
                    },
                    new QueryArgument<IntGraphType> { Name = "limit" }
                ),
                resolve: context =>
                {
                    var signer = context.GetArgument<Address>("signer");
                    var involved = context.GetArgument<Address>("involvedAddress");
                    bool desc = context.GetArgument<bool>("desc");
                    int offset = context.GetArgument<int>("offset");
                    int? limit = context.GetArgument<int?>("limit", null);

                    return ListTransactions(signer, involved, desc, offset, limit);
                }
            );

            Field<TransactionType<T>>(
                "transaction",
                arguments: new QueryArguments(
                    new QueryArgument<IdGraphType> { Name = "id" }
                ),
                resolve: context =>
                {
                    var id = new TxId(
                        ByteUtil.ParseHex(context.GetArgument<string>("id"))
                    );
                    return _chain.Transactions[id];
                }
            );

            _chain = chain;
            Name = "BlockQuery";
        }

        private IEnumerable<Block<T>> ListBlocks(
            bool desc,
            long offset,
            long? limit,
            bool excludeEmptyTxs)
        {
            Block<T> tip = _chain.Tip;
            long tipIndex = tip.Index;

            if (offset < 0)
            {
                offset = tipIndex + offset + 1;
            }

            if (tipIndex < offset || offset < 0)
            {
                yield break;
            }

            Block<T> block = desc ? _chain[tipIndex - offset] : _chain[offset];

            while (limit is null || limit > 0)
            {
                if (!excludeEmptyTxs || block.Transactions.Any())
                {
                    limit--;
                    yield return block;
                }

                block = GetNextBlock(block, desc);

                if (block is null)
                {
                    break;
                }
            }
        }

        private Block<T> GetNextBlock(Block<T> block, bool desc)
        {
            if (desc && block.PreviousHash is HashDigest<SHA256> prev)
            {
                return _chain.Blocks[prev];
            }
            else if (!desc && block != _chain.Tip)
            {
                return _chain[block.Index + 1];
            }

            return null;
        }

        private IEnumerable<Transaction<T>> ListTransactions(
            Address? signer, Address? involved, bool desc, int offset, int? limit)
        {
            Block<T> tip = _chain.Tip;
            long tipIndex = tip.Index;

            if (desc)
            {
                if (tipIndex - offset < 0)
                {
                    yield break;
                }

                Block<T> block = _chain[tipIndex];
                bool done = false;
                while (!done)
                {
                    var txs = block.Transactions.ToList();
                    for (var i = txs.Count - 1; i >= 0; i--)
                    {
                        if (IsValidTransacion(txs[i], signer, involved))
                        {
                            if (offset > 0)
                            {
                                offset--;
                            }
                            else
                            {
                                yield return txs[i];

                                if (!(limit is null))
                                {
                                    limit--;
                                }
                            }
                        }

                        if (!(limit is null) && limit < 0)
                        {
                            done = true;
                            break;
                        }
                    }

                    if (!(limit is null) && limit <= 0)
                    {
                        done = true;
                    }
                    else if (block.PreviousHash is HashDigest<SHA256> prev)
                    {
                        block = _chain.Blocks[prev];
                    }
                    else
                    {
                        done = true;
                    }
                }
            }
            else
            {
                foreach (Block<T> block in _chain)
                {
                    foreach (Transaction<T> tx in block.Transactions)
                    {
                        if (IsValidTransacion(tx, signer, involved))
                        {
                            if (offset > 0)
                            {
                                offset--;
                            }
                            else
                            {
                                yield return tx;

                                if (!(limit is null))
                                {
                                    limit--;
                                }
                            }
                        }

                        if (!(limit is null) && limit <= 0)
                        {
                            break;
                        }
                    }

                    if (!(limit is null) && limit <= 0)
                    {
                        break;
                    }
                }
            }
        }

        private bool IsValidTransacion(Transaction<T> tx, Address? signer, Address? involved)
        {
            if (involved is null && !(signer is null) &&
                tx.Signer.Equals(signer.Value))
            {
                return true;
            }
            else if (!(involved is null) &&
                (tx.Signer.Equals(involved.Value) ||
                tx.UpdatedAddresses.Contains(involved.Value)))
            {
                return true;
            }

            return false;
        }
    }
}
