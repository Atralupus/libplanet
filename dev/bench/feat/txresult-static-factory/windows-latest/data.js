window.BENCHMARK_DATA = {
  "lastUpdate": 1690789001536,
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
          "id": "76c3a15810bb5a2be45f22bd508abc51a1b85fe7",
          "message": "feat: Add static factory methods in txresult class",
          "timestamp": "2023-07-31T16:17:47+09:00",
          "tree_id": "3b5da30848bd5623bff2f2dc08ba6b104dfa2f55",
          "url": "https://github.com/Atralupus/libplanet/commit/76c3a15810bb5a2be45f22bd508abc51a1b85fe7"
        },
        "date": 1690788964763,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1428475,
            "unit": "ns",
            "range": "± 104804.54690819277"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2604414.705882353,
            "unit": "ns",
            "range": "± 72872.22995349958"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1839108.0808080807,
            "unit": "ns",
            "range": "± 136494.0685537681"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4853729.0322580645,
            "unit": "ns",
            "range": "± 219965.22183163767"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 49691.48936170213,
            "unit": "ns",
            "range": "± 3479.298519537761"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7283823.076923077,
            "unit": "ns",
            "range": "± 44175.59948369224"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21123993.333333332,
            "unit": "ns",
            "range": "± 379677.47867041547"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 53178486.666666664,
            "unit": "ns",
            "range": "± 613972.928517521"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 104375646.66666667,
            "unit": "ns",
            "range": "± 1270356.3453201775"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 208113046.66666666,
            "unit": "ns",
            "range": "± 2123265.4120032955"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4918721.707589285,
            "unit": "ns",
            "range": "± 8939.23810792684"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1580842.2265625,
            "unit": "ns",
            "range": "± 7390.433869632801"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1219520.5338541667,
            "unit": "ns",
            "range": "± 3941.5811880097363"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2686765.625,
            "unit": "ns",
            "range": "± 6656.831487768259"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 856645.3776041666,
            "unit": "ns",
            "range": "± 2648.4144805838046"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 800568.37890625,
            "unit": "ns",
            "range": "± 2472.748414316058"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3327653.488372093,
            "unit": "ns",
            "range": "± 121897.05912472136"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3694582.3529411764,
            "unit": "ns",
            "range": "± 72984.04136602499"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4240567.5,
            "unit": "ns",
            "range": "± 141833.72964631725"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3865962.0689655175,
            "unit": "ns",
            "range": "± 168028.15222308412"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6347471.428571428,
            "unit": "ns",
            "range": "± 197386.6846504873"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 281050,
            "unit": "ns",
            "range": "± 12997.460069335404"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 257876.7441860465,
            "unit": "ns",
            "range": "± 9284.057949217555"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 243580.80808080808,
            "unit": "ns",
            "range": "± 14773.477868123473"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4235226.666666667,
            "unit": "ns",
            "range": "± 57229.96800711354"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3919580,
            "unit": "ns",
            "range": "± 30532.820748452687"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23832.954545454544,
            "unit": "ns",
            "range": "± 1628.6742080818542"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 99830.20833333333,
            "unit": "ns",
            "range": "± 7439.625341325881"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 84791.39784946236,
            "unit": "ns",
            "range": "± 5385.0165700358375"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 93706.41025641025,
            "unit": "ns",
            "range": "± 4924.97846903039"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6425.510204081633,
            "unit": "ns",
            "range": "± 1262.73400195315"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21996.842105263157,
            "unit": "ns",
            "range": "± 2395.4057370342916"
          }
        ]
      }
    ]
  }
}