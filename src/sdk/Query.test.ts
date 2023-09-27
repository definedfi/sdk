import { Event } from "../resources/graphql";
import { Defined } from "./index";

describe("Query", () => {
  const sdk = new Defined("dummy-key");

  it("should set up queries", async () => {
    jest.spyOn(sdk, "query").mockResolvedValue({
      pairEvents: {
        items: [
          {
            address: "0x1234",
          },
        ] as Event[],
      },
    });
    const res = await sdk.queries.pairEvents({
      query: { address: "0x1234", networkId: 1 },
    });
    expect(res.pairEvents?.items?.[0]?.address).toEqual("0x1234");
    expect(sdk.queries).toBeDefined();
  });

  it("should have a pairEvents query", async () => {
    jest.spyOn(sdk, "query").mockResolvedValue({
      pairEvents: {
        items: [
          {
            address: "0x1234",
          },
        ] as Event[],
      },
    });
    const res = await sdk.queries.pairEvents({
      query: { address: "0x1234", networkId: 1 },
    });
    expect(res.pairEvents?.items?.[0]?.address).toEqual("0x1234");
    expect(sdk.queries).toBeDefined();
  });
});
