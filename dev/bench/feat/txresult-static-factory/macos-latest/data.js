window.BENCHMARK_DATA = {
  "lastUpdate": 1690789225778,
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
        "date": 1690789197248,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9549643.761904761,
            "unit": "ns",
            "range": "± 435160.4380656342"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 25986360.14285714,
            "unit": "ns",
            "range": "± 1033542.4192851658"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 59433141.625,
            "unit": "ns",
            "range": "± 1093275.3790219477"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 115149210.93103448,
            "unit": "ns",
            "range": "± 3343172.38752791"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 233208309.25,
            "unit": "ns",
            "range": "± 7213562.292371132"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 83410.13636363637,
            "unit": "ns",
            "range": "± 8685.578528342014"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 385644.52127659577,
            "unit": "ns",
            "range": "± 44403.99157460518"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 387420.35353535356,
            "unit": "ns",
            "range": "± 59384.665021369525"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 378869.37234042556,
            "unit": "ns",
            "range": "± 57034.62795435884"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4648848.670212766,
            "unit": "ns",
            "range": "± 297458.7742756332"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4060855.7021276597,
            "unit": "ns",
            "range": "± 317000.02550088364"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 25328.340425531915,
            "unit": "ns",
            "range": "± 4349.779150377394"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 128113.45652173914,
            "unit": "ns",
            "range": "± 11561.639697404271"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 123071.45555555556,
            "unit": "ns",
            "range": "± 14167.779965459931"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 126101.02747252748,
            "unit": "ns",
            "range": "± 14399.316575094543"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 9293.511494252874,
            "unit": "ns",
            "range": "± 1101.4833180154596"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 27307.593406593405,
            "unit": "ns",
            "range": "± 3363.09945991631"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1591366.7113402062,
            "unit": "ns",
            "range": "± 141493.2530199437"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3023327.7260273974,
            "unit": "ns",
            "range": "± 149920.52969381446"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2233234.6354166665,
            "unit": "ns",
            "range": "± 184184.003173921"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6482555.032967033,
            "unit": "ns",
            "range": "± 767302.0381531563"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3692654.9623655914,
            "unit": "ns",
            "range": "± 280469.7303687915"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3770254.4375,
            "unit": "ns",
            "range": "± 301009.45689535764"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4633989.417582418,
            "unit": "ns",
            "range": "± 306386.8368480918"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4174466.0416666665,
            "unit": "ns",
            "range": "± 293030.9152743162"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7683559.79787234,
            "unit": "ns",
            "range": "± 451890.119935629"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7617403.974888393,
            "unit": "ns",
            "range": "± 106228.34781091487"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2386825.8803335335,
            "unit": "ns",
            "range": "± 98379.62621956386"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1567592.5401785714,
            "unit": "ns",
            "range": "± 43840.57325115149"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3203052.7862519054,
            "unit": "ns",
            "range": "± 169722.77059990307"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 972148.7081801471,
            "unit": "ns",
            "range": "± 19300.07305146191"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 809956.107514881,
            "unit": "ns",
            "range": "± 18818.564465332965"
          }
        ]
      }
    ]
  }
}