import { Network } from '../../src/resources/graphql'
import { Defined } from '@definedfi/sdk'

const sdk = new Defined(process.env.DEFINED_API_KEY || "")

sdk.send<{ getNetworks: Network[] }>(`query GetNetworks { getNetworks { id name } }`, {}).then(res => {
  console.log("Networks: ", res.getNetworks)
})
sdk.queries.price({ inputs: [{ address: "0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c", networkId: 56 }]}).then(console.log)
sdk.queries.pairEvents({ query: { address: "0xd99c7f6c65857ac913a8f880a4cb84032ab2fc5b", networkId: 56 } }).then(console.log)
sdk.queries.sparklines({ input: { ids: ["0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c:56"] } }).then(console.log)
sdk.queries.token({ input: { address: "0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c", networkId: 56 } }).then(console.log)
sdk.queries.getSymbol({ symbol: "0xd99c7f6c65857ac913a8f880a4cb84032ab2fc5b:56" }).then(console.log)