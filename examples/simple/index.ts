import { Network } from '../../src/resources/graphql'
import { Defined } from '@definedfi/sdk/dist/sdk'

const sdk = new Defined(process.env.DEFINED_API_KEY || "")

sdk.send<{ getNetworks: Network[] }>(`query GetNetworks { getNetworks { id name } }`, {}).then(res => {
  console.log("Networks: ", res.getNetworks)
})