import { Defined } from "@definedfi/sdk";

const sdk = new Defined(process.env.DEFINED_API_KEY || "");

sdk.queries
  .token({
    input: {
      address: "0xc56c7a0eaa804f854b536a5f3d5f49d2ec4b12b8",
      networkId: 1,
    },
  })
  .then(console.log);
