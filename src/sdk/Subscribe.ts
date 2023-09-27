
import { Defined } from "./index";
import { print } from 'graphql'
import { OnBarsUpdatedDocument, OnEventsCreatedDocument, OnPriceUpdatedDocument, SubscriptionOnBarsUpdatedArgs, SubscriptionOnEventsCreatedArgs, SubscriptionOnPriceUpdatedArgs } from "./generated/graphql";
import { Sink } from "graphql-ws";

export class Subscribe {
  constructor(private sdk: Defined) { }
  tokenPrices = async (vars: SubscriptionOnPriceUpdatedArgs, sink: Sink) => this.sdk.subscribe(print(OnPriceUpdatedDocument), vars, sink)
  tokenEvents = async (vars: SubscriptionOnEventsCreatedArgs, sink: Sink) => this.sdk.subscribe(print(OnEventsCreatedDocument), vars, sink)
  bars = async (vars: SubscriptionOnBarsUpdatedArgs, sink: Sink) => this.sdk.subscribe(print(OnBarsUpdatedDocument), vars, sink)
}