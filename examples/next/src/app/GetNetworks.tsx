import { Defined } from "@definedfi/sdk/dist/sdk";
import { Network } from "@definedfi/sdk/src/resources/graphql";

async function getData() {
  const sdk = new Defined(process.env.NEXT_PUBLIC_DEFINED_API_KEY || "");
  const res = await sdk.send<{ getNetworks: Network[] }>(
    `query { getNetworks { id, name } }`,
  );
  if (!res.getNetworks) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }
  return res.getNetworks;
}

export default async function GetNetworks() {
  const data = await getData();
  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}
