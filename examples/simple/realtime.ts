import { Defined } from '@definedfi/sdk/dist/sdk'
import { Price, SubscriptionOnPriceUpdatedArgs } from '../../src/resources/graphql'
import { ExecutionResult, Sink } from 'graphql-ws'

const sdk = new Defined(process.env.DEFINED_API_KEY || "")

const sink: Sink<ExecutionResult<Price>> = {
  next: ({ data }) => {
    // Note that data is correctly typed as a Price model
    console.log("Got subscription data", data)
  },
  error: (err) => {
    console.log("Got subscription error", err)
  },
  complete: () => {
    console.log("Got subscription complete")
  }
}

// Subscribes to the onPriceUpdated event and just logs out the value to the console
sdk.subscribe<Price>(`
  subscription onPriceUpdated($address: String!, $networkId: Int!) {
    onPriceUpdated(address: $address, networkId: $networkId) {
      address
      networkId
      priceUsd
      timestamp
    }
  }
`, {
  address: "0xaef420fd77477d9dc8b46d704d44dd09d6c27866",
  networkId: 1
 }, sink)