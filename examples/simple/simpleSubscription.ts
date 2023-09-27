import { Defined } from '@definedfi/sdk/dist/sdk'

const sdk = new Defined(process.env.DEFINED_API_KEY || "")

sdk.subscriptions.tokenPrices({
  address: "0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c",
  networkId: 56,
}, {
  next(value) {
    console.log("Price update: ", value)
  },
  complete() {
    console.log("Price subscription completed")
  },
  error(error) {
    console.error("Price subscription error: ", error)
  },
})
