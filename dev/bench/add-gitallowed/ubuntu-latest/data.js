window.BENCHMARK_DATA = {
  "lastUpdate": 1694021563380,
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
        "date": 1694021548534,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1744357.2,
            "unit": "ns",
            "range": "± 111778.1193287785"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3440538.75,
            "unit": "ns",
            "range": "± 128498.58095879667"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2224695.7407407407,
            "unit": "ns",
            "range": "± 117175.17559009435"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6329383.824742268,
            "unit": "ns",
            "range": "± 404385.9189866112"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 369532.7113402062,
            "unit": "ns",
            "range": "± 43528.27190458106"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 374453.1030927835,
            "unit": "ns",
            "range": "± 25430.73041555095"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 347974.5333333333,
            "unit": "ns",
            "range": "± 6026.558469056148"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5646149.260869565,
            "unit": "ns",
            "range": "± 136266.41627382248"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 5155578.571428572,
            "unit": "ns",
            "range": "± 120567.14718967662"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 27938.84693877551,
            "unit": "ns",
            "range": "± 7713.814035633133"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 106096.01063829787,
            "unit": "ns",
            "range": "± 16315.784536543024"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 105018.15463917526,
            "unit": "ns",
            "range": "± 19406.382997579796"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 105531.58064516129,
            "unit": "ns",
            "range": "± 20168.86997724926"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6341.144444444444,
            "unit": "ns",
            "range": "± 986.3030798989869"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19579.845238095237,
            "unit": "ns",
            "range": "± 1594.3087220050538"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 60104.37894736842,
            "unit": "ns",
            "range": "± 11098.069122052264"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9322745.833333334,
            "unit": "ns",
            "range": "± 336231.23588590306"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 24196115.031914894,
            "unit": "ns",
            "range": "± 1367339.2348511082"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 63564716.03448276,
            "unit": "ns",
            "range": "± 1833488.213625689"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 125502761.5,
            "unit": "ns",
            "range": "± 3575088.3776676427"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 261241611.4893617,
            "unit": "ns",
            "range": "± 9961823.12613648"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3815503.412698413,
            "unit": "ns",
            "range": "± 174967.09477255863"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4062560.2365591396,
            "unit": "ns",
            "range": "± 238285.0385136327"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5331831.864583333,
            "unit": "ns",
            "range": "± 338512.83416191005"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5036285.4,
            "unit": "ns",
            "range": "± 176066.16070056136"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8052055.25,
            "unit": "ns",
            "range": "± 263408.92429597804"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6089478.847098215,
            "unit": "ns",
            "range": "± 117656.94644476761"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1999240.13203125,
            "unit": "ns",
            "range": "± 27518.86177728828"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1320933.8862680288,
            "unit": "ns",
            "range": "± 9434.173464252688"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3196217.837180398,
            "unit": "ns",
            "range": "± 77771.08653725333"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1055219.0359933036,
            "unit": "ns",
            "range": "± 14094.543245182409"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 959735.208844866,
            "unit": "ns",
            "range": "± 15257.037605581176"
          }
        ]
      }
    ]
  }
}