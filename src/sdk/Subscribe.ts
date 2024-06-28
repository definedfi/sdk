import { ExecutionResult, print } from "graphql";
import { Sink } from "graphql-ws";

import {
  SubscriptionOnDetailedStatsUpdatedArgs,
  SubscriptionOnNftAssetsCreatedArgs,
  SubscriptionOnNftEventsCreatedArgs,
} from "../resources/graphql";
import {
  OnBarsUpdatedDocument,
  OnBarsUpdatedSubscription,
  OnDetailedStatsUpdatedDocument,
  OnDetailedStatsUpdatedSubscription,
  OnEventsCreatedDocument,
  OnEventsCreatedSubscription,
  OnNftAssetsCreatedDocument,
  OnNftAssetsCreatedSubscription,
  OnNftEventsCreatedDocument,
  OnNftEventsCreatedSubscription,
  OnPairMetadataUpdatedDocument,
  OnPairMetadataUpdatedSubscription,
  OnPriceUpdatedDocument,
  OnPriceUpdatedSubscription,
  SubscriptionOnBarsUpdatedArgs,
  SubscriptionOnEventsCreatedArgs,
  SubscriptionOnPairMetadataUpdatedArgs,
  SubscriptionOnPriceUpdatedArgs,
} from "./generated/graphql";
import { Defined } from "./index";

export class Subscribe {
  constructor(private sdk: Defined) {}
  tokenPrices = async (
    vars: SubscriptionOnPriceUpdatedArgs,
    sink: Sink<ExecutionResult<OnPriceUpdatedSubscription>>,
  ) => this.sdk.subscribe(print(OnPriceUpdatedDocument), vars, sink);
  tokenEvents = async (
    vars: SubscriptionOnEventsCreatedArgs,
    sink: Sink<ExecutionResult<OnEventsCreatedSubscription>>,
  ) => this.sdk.subscribe(print(OnEventsCreatedDocument), vars, sink);
  bars = async (
    vars: SubscriptionOnBarsUpdatedArgs,
    sink: Sink<ExecutionResult<OnBarsUpdatedSubscription>>,
  ) => this.sdk.subscribe(print(OnBarsUpdatedDocument), vars, sink);
  detailedPairStats = async (
    vars: SubscriptionOnDetailedStatsUpdatedArgs,
    sink: Sink<ExecutionResult<OnDetailedStatsUpdatedSubscription>>,
  ) => this.sdk.subscribe(print(OnDetailedStatsUpdatedDocument), vars, sink);
  pairMetadata = async (
    vars: SubscriptionOnPairMetadataUpdatedArgs,
    sink: Sink<ExecutionResult<OnPairMetadataUpdatedSubscription>>,
  ) => this.sdk.subscribe(print(OnPairMetadataUpdatedDocument), vars, sink);
  nftAssets = async (
    vars: SubscriptionOnNftAssetsCreatedArgs,
    sink: Sink<ExecutionResult<OnNftAssetsCreatedSubscription>>,
  ) => this.sdk.subscribe(print(OnNftAssetsCreatedDocument), vars, sink);
  nftEvents = async (
    vars: SubscriptionOnNftEventsCreatedArgs,
    sink: Sink<ExecutionResult<OnNftEventsCreatedSubscription>>,
  ) => this.sdk.subscribe(print(OnNftEventsCreatedDocument), vars, sink);
}
