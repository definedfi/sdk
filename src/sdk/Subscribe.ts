import { print } from "graphql";
import { Sink } from "graphql-ws";

import {
  SubscriptionOnDetailedStatsUpdatedArgs,
  SubscriptionOnNftAssetsCreatedArgs,
  SubscriptionOnNftEventsCreatedArgs,
} from "../resources/graphql";
import {
  OnBarsUpdatedDocument,
  OnDetailedStatsUpdatedDocument,
  OnEventsCreatedDocument,
  OnNftAssetsCreatedDocument,
  OnNftEventsCreatedDocument,
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
  nftAssets = async (vars: SubscriptionOnNftAssetsCreatedArgs, sink: Sink) =>
    this.sdk.subscribe(print(OnNftAssetsCreatedDocument), vars, sink);
  nftEvents = async (vars: SubscriptionOnNftEventsCreatedArgs, sink: Sink) =>
    this.sdk.subscribe(print(OnNftEventsCreatedDocument), vars, sink);
}
