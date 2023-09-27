
import { Defined } from "./index";
import { print } from 'graphql'
import { OnEventsCreatedDocument, OnPriceUpdatedDocument, SubscriptionOnEventsCreatedArgs, SubscriptionOnPriceUpdatedArgs } from "./gql/graphql";
import { Sink } from "graphql-ws";

export class Subscribe {
  constructor(private sdk: Defined) { }
  tokenPrices = async (vars: SubscriptionOnPriceUpdatedArgs, sink: Sink) => { return this.sdk.subscribe(print(OnPriceUpdatedDocument), vars, sink)}
  tokenEvents = async (vars: SubscriptionOnEventsCreatedArgs, sink: Sink) => { return this.sdk.subscribe(print(OnEventsCreatedDocument), vars, sink)}
}