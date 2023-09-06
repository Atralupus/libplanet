window.BENCHMARK_DATA = {
  "lastUpdate": 1694021699884,
  "repoUrl": "https://github.com/Atralupus/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "me@atralupus.com",
            "name": "Atralupus",
            "username": "Atralupus"
          },
          "committer": {
            "email": "me@atralupus.com",
            "name": "Atralupus",
            "username": "Atralupus"
          },
          "distinct": true,
          "id": "fa1769457d6ba56b163c02438004e86056c1bf23",
          "message": "Add .gitallowed for git secrets",
          "timestamp": "2023-09-07T02:14:24+09:00",
          "tree_id": "0cd0c20312c8de40124ee3d41858e23c6b1ae406",
          "url": "https://github.com/Atralupus/libplanet/commit/fa1769457d6ba56b163c02438004e86056c1bf23"
        },
        "date": 1694021656382,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1708243.1578947369,
            "unit": "ns",
            "range": "± 228897.3850982471"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3125252.1276595746,
            "unit": "ns",
            "range": "± 285417.8622137956"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2225703.06122449,
            "unit": "ns",
            "range": "± 269848.8161893243"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5580379.591836735,
            "unit": "ns",
            "range": "± 502282.02349437604"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 54118.88888888889,
            "unit": "ns",
            "range": "± 11270.244152011195"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8287383.695652174,
            "unit": "ns",
            "range": "± 586929.6738442684"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22132112.12121212,
            "unit": "ns",
            "range": "± 1733000.0876310216"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 61643050.666666664,
            "unit": "ns",
            "range": "± 2995437.8386082"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 116580558.49056605,
            "unit": "ns",
            "range": "± 4838932.131259555"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 233638808.53658536,
            "unit": "ns",
            "range": "± 8384549.213612369"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5218166.375,
            "unit": "ns",
            "range": "± 139083.76418476115"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1685059.4010416667,
            "unit": "ns",
            "range": "± 30017.19690218816"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1232069.4921875,
            "unit": "ns",
            "range": "± 21681.68289715696"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3127473.3072916665,
            "unit": "ns",
            "range": "± 81313.95326508075"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1053465.6510416667,
            "unit": "ns",
            "range": "± 18956.23275425687"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 981892.1158854166,
            "unit": "ns",
            "range": "± 17218.101459757025"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3421572.340425532,
            "unit": "ns",
            "range": "± 309454.16050285706"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3736591.489361702,
            "unit": "ns",
            "range": "± 518997.4706590063"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4752677.173913044,
            "unit": "ns",
            "range": "± 458696.93102111464"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3932997.93814433,
            "unit": "ns",
            "range": "± 427257.17957186454"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7030289.247311828,
            "unit": "ns",
            "range": "± 528451.1224287128"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 294088.04347826086,
            "unit": "ns",
            "range": "± 36048.721128925725"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 298247.311827957,
            "unit": "ns",
            "range": "± 46229.622047467645"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 244951.57894736843,
            "unit": "ns",
            "range": "± 36792.65613342891"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4768263.157894737,
            "unit": "ns",
            "range": "± 376880.5866676378"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4218232.291666667,
            "unit": "ns",
            "range": "± 373191.8427197836"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 26558.58585858586,
            "unit": "ns",
            "range": "± 11270.450890976828"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 96274.22680412371,
            "unit": "ns",
            "range": "± 22305.14831430233"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 106862,
            "unit": "ns",
            "range": "± 33744.82011877504"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 113642.26804123711,
            "unit": "ns",
            "range": "± 30843.36717949375"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5538.888888888889,
            "unit": "ns",
            "range": "± 1029.6387982838137"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 25367,
            "unit": "ns",
            "range": "± 11179.90671434311"
          }
        ]
      }
    ]
  }
}