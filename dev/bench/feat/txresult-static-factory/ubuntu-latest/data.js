window.BENCHMARK_DATA = {
  "lastUpdate": 1690788902640,
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
        "date": 1690788888487,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 325660.56565656565,
            "unit": "ns",
            "range": "± 21633.295981040388"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 313623.80412371136,
            "unit": "ns",
            "range": "± 18185.59006331156"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 294826,
            "unit": "ns",
            "range": "± 14550.755553120485"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5122821.923076923,
            "unit": "ns",
            "range": "± 136847.4410502215"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4684436.59375,
            "unit": "ns",
            "range": "± 214329.88272855355"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24349.031578947368,
            "unit": "ns",
            "range": "± 2776.936297634467"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 101985.02040816327,
            "unit": "ns",
            "range": "± 7365.702758976895"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 88828.28282828283,
            "unit": "ns",
            "range": "± 8123.173593203237"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 97839.6836734694,
            "unit": "ns",
            "range": "± 15388.7939826067"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6740.802083333333,
            "unit": "ns",
            "range": "± 832.7026084388574"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 25118.938775510203,
            "unit": "ns",
            "range": "± 3073.4038781576974"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1710087.3440860214,
            "unit": "ns",
            "range": "± 97031.99584264154"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3336740.015873016,
            "unit": "ns",
            "range": "± 152281.38886809684"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2169097.6904761903,
            "unit": "ns",
            "range": "± 114532.67372396785"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6146878.162162162,
            "unit": "ns",
            "range": "± 305971.1898944497"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7355830.130729167,
            "unit": "ns",
            "range": "± 62666.96467641186"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2288667.804427083,
            "unit": "ns",
            "range": "± 7659.318362168433"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1634359.3985677084,
            "unit": "ns",
            "range": "± 8450.207009446249"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3141813.1325334823,
            "unit": "ns",
            "range": "± 16098.930605028394"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 990366.808984375,
            "unit": "ns",
            "range": "± 8093.84091193135"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 905347.6771484375,
            "unit": "ns",
            "range": "± 3725.082419890035"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4042048.864864865,
            "unit": "ns",
            "range": "± 134445.1657868495"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4241436,
            "unit": "ns",
            "range": "± 196768.8566673789"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5225013.884615385,
            "unit": "ns",
            "range": "± 142314.45807291032"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4685034.1228070175,
            "unit": "ns",
            "range": "± 193173.87836434806"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7492588,
            "unit": "ns",
            "range": "± 184007.9945871918"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9476956.857142856,
            "unit": "ns",
            "range": "± 100065.95756173652"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 25595450.066666666,
            "unit": "ns",
            "range": "± 465206.6085564973"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 64154733.10714286,
            "unit": "ns",
            "range": "± 1832240.7002779983"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 127192161.08333333,
            "unit": "ns",
            "range": "± 3173235.35850571"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 262258747.4117647,
            "unit": "ns",
            "range": "± 8370041.012518872"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 58006.395348837206,
            "unit": "ns",
            "range": "± 3168.051107278898"
          }
        ]
      }
    ]
  }
}