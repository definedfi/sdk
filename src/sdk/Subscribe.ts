import { print } from "graphql";
import { Sink } from "graphql-ws";

import { SubscriptionOnDetailedStatsUpdatedArgs } from "../resources/graphql";
import {
  OnBarsUpdatedDocument,
  OnDetailedStatsUpdatedDocument,
  OnEventsCreatedDocument,
  OnPriceUpdatedDocument,
  SubscriptionOnBarsUpdatedArgs,
  SubscriptionOnEventsCreatedArgs,
  SubscriptionOnPriceUpdatedArgs,
} from "./generated/graphql";
import { Defined } from "./index";

export class Subscribe {
  constructor(private sdk: Defined) {}
  tokenPrices = async (vars: SubscriptionOnPriceUpdatedArgs, sink: Sink) =>
    this.sdk.subscribe(print(OnPriceUpdatedDocument), vars, sink);
  tokenEvents = async (vars: SubscriptionOnEventsCreatedArgs, sink: Sink) =>
    this.sdk.subscribe(print(OnEventsCreatedDocument), vars, sink);
  bars = async (vars: SubscriptionOnBarsUpdatedArgs, sink: Sink) =>
    this.sdk.subscribe(print(OnBarsUpdatedDocument), vars, sink);
  detailedPairStats = async (
    vars: SubscriptionOnDetailedStatsUpdatedArgs,
    sink: Sink,
  ) => this.sdk.subscribe(print(OnDetailedStatsUpdatedDocument), vars, sink);
}
