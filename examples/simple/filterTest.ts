import { Defined } from '@definedfi/sdk'

const sdk = new Defined(process.env.DEFINED_API_KEY || "")

sdk.queries.filterTokens({
  filters: {
    liquidity: { gt: 100000 },
    txnCount24: { gt: 200 },
    network: [1],
  },
  limit: 10
}).then(console.log)