
import { Defined } from "./index";
import { print } from 'graphql'
import { OnPriceUpdatedDocument, SubscriptionOnPriceUpdatedArgs } from "./gql/graphql";
import { Sink } from "graphql-ws";

export class Subscribe {
  constructor(private sdk: Defined) { }
  tokenPrices = async (vars: SubscriptionOnPriceUpdatedArgs, sink: Sink) => { return this.sdk.subscribe(print(OnPriceUpdatedDocument), vars, sink)}
  tokenEvents = async (vars: SubscriptionOnPriceUpdatedArgs, sink: Sink) => { return this.sdk.subscribe(print(OnPriceUpdatedDocument), vars, sink)}
}