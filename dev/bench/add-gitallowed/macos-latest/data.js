window.BENCHMARK_DATA = {
  "lastUpdate": 1694021511048,
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
        "date": 1694021474971,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8560414,
            "unit": "ns",
            "range": "± 426881.1256686297"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19657528.46153846,
            "unit": "ns",
            "range": "± 302698.76774625725"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 50439732.083333336,
            "unit": "ns",
            "range": "± 692524.7899035763"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 99112479,
            "unit": "ns",
            "range": "± 1432163.1660202257"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 218912385.36842105,
            "unit": "ns",
            "range": "± 13863761.079523703"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 74508.02808988764,
            "unit": "ns",
            "range": "± 7720.685871101398"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 311212.3296703297,
            "unit": "ns",
            "range": "± 24926.69503878877"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 281087.0303030303,
            "unit": "ns",
            "range": "± 12821.382391530049"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 293096.4130434783,
            "unit": "ns",
            "range": "± 16849.252250765847"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4020689.785714286,
            "unit": "ns",
            "range": "± 90586.02102760825"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3628686.4,
            "unit": "ns",
            "range": "± 67068.37629272723"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19916.360824742267,
            "unit": "ns",
            "range": "± 2797.851858962392"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 98786.18947368421,
            "unit": "ns",
            "range": "± 12762.711185903318"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 84777.67171717172,
            "unit": "ns",
            "range": "± 16917.18885078338"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 109692.90206185567,
            "unit": "ns",
            "range": "± 11910.680663501662"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7863.957894736842,
            "unit": "ns",
            "range": "± 1133.2434332743123"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20008.9,
            "unit": "ns",
            "range": "± 3327.579394324336"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1474455.6397849463,
            "unit": "ns",
            "range": "± 131090.5335903888"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3122363.7078651683,
            "unit": "ns",
            "range": "± 375680.7556007252"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2168751.2311827955,
            "unit": "ns",
            "range": "± 208997.90586631018"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5310367.762295082,
            "unit": "ns",
            "range": "± 230232.89924037803"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3365463.720338983,
            "unit": "ns",
            "range": "± 146960.30376391322"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3573059.1578947366,
            "unit": "ns",
            "range": "± 270882.4245774223"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4431951.75,
            "unit": "ns",
            "range": "± 293246.7839151236"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4009717.195652174,
            "unit": "ns",
            "range": "± 363345.74976887257"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7151578.808510638,
            "unit": "ns",
            "range": "± 811681.6794505711"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5385232.5859375,
            "unit": "ns",
            "range": "± 106062.23822353336"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1551959.697265625,
            "unit": "ns",
            "range": "± 17385.971085680125"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 982188.4482421875,
            "unit": "ns",
            "range": "± 9102.679361629967"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2423382.64453125,
            "unit": "ns",
            "range": "± 11971.729173367215"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 770295.7423967634,
            "unit": "ns",
            "range": "± 2016.56508559127"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 710469.4201171875,
            "unit": "ns",
            "range": "± 3696.70420559927"
          }
        ]
      }
    ]
  }
}