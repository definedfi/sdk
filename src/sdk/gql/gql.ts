/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "query PairEvents($query: EventsQueryInput!) {\n  pairEvents: getTokenEvents(query: $query) {\n    cursor\n    items {\n      address\n      baseTokenPrice\n      blockHash\n      blockNumber\n      eventDisplayType\n      eventType\n      id\n      liquidityToken\n      maker\n      networkId\n      quoteToken\n      token0PoolValueUsd\n      token0SwapValueUsd\n      timestamp\n      token0ValueBase\n      token1PoolValueUsd\n      token1SwapValueUsd\n      token1ValueBase\n      transactionHash\n      transactionIndex\n      logIndex\n    }\n  }\n}": types.PairEventsDocument,
    "query GetTokenPrice($inputs: [GetPriceInput]) {\n  getTokenPrices(inputs: $inputs) {\n    address\n    networkId\n    priceUsd\n  }\n}": types.GetTokenPriceDocument,
    "query GetSparklines($input: TokenSparklineInput!) {\n  tokenSparklines(input: $input) {\n    attribute\n    id\n    sparkline {\n      timestamp\n      value\n    }\n  }\n}": types.GetSparklinesDocument,
    "query GetTokens($input: [TokenInput!]) {\n  tokens(ids: $input) {\n    address\n    decimals\n    id\n    name\n    networkId\n    symbol\n    totalSupply\n  }\n}": types.GetTokensDocument,
    "subscription OnEventsCreated($id: String) {\n  onEventsCreated(id: $id) {\n    events {\n      address\n      baseTokenPrice\n      blockHash\n      blockNumber\n      eventDisplayType\n      eventType\n      logIndex\n      id\n      liquidityToken\n      maker\n      networkId\n      timestamp\n      token0SwapValueUsd\n      token0ValueBase\n      token1SwapValueUsd\n      token1ValueBase\n      transactionHash\n      transactionIndex\n      data {\n        ... on MintEventData {\n          amount0\n          amount1\n          amount0Shifted\n          amount1Shifted\n          tickLower\n          tickUpper\n          type\n        }\n        ... on BurnEventData {\n          amount0\n          amount1\n          amount0Shifted\n          amount1Shifted\n          tickLower\n          tickUpper\n          type\n        }\n        ... on SwapEventData {\n          amount0\n          amount0In\n          amount0Out\n          amount1\n          amount1In\n          amount1Out\n          amountNonLiquidityToken\n          priceBaseToken\n          priceBaseTokenTotal\n          priceUsd\n          priceUsdTotal\n          tick\n          type\n        }\n      }\n    }\n    address\n    id\n    networkId\n  }\n}": types.OnEventsCreatedDocument,
    "subscription OnPriceUpdated($address: String, $networkId: Int) {\n  onPriceUpdated(address: $address, networkId: $networkId) {\n    address\n    networkId\n    priceUsd\n  }\n}": types.OnPriceUpdatedDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query PairEvents($query: EventsQueryInput!) {\n  pairEvents: getTokenEvents(query: $query) {\n    cursor\n    items {\n      address\n      baseTokenPrice\n      blockHash\n      blockNumber\n      eventDisplayType\n      eventType\n      id\n      liquidityToken\n      maker\n      networkId\n      quoteToken\n      token0PoolValueUsd\n      token0SwapValueUsd\n      timestamp\n      token0ValueBase\n      token1PoolValueUsd\n      token1SwapValueUsd\n      token1ValueBase\n      transactionHash\n      transactionIndex\n      logIndex\n    }\n  }\n}"): (typeof documents)["query PairEvents($query: EventsQueryInput!) {\n  pairEvents: getTokenEvents(query: $query) {\n    cursor\n    items {\n      address\n      baseTokenPrice\n      blockHash\n      blockNumber\n      eventDisplayType\n      eventType\n      id\n      liquidityToken\n      maker\n      networkId\n      quoteToken\n      token0PoolValueUsd\n      token0SwapValueUsd\n      timestamp\n      token0ValueBase\n      token1PoolValueUsd\n      token1SwapValueUsd\n      token1ValueBase\n      transactionHash\n      transactionIndex\n      logIndex\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query GetTokenPrice($inputs: [GetPriceInput]) {\n  getTokenPrices(inputs: $inputs) {\n    address\n    networkId\n    priceUsd\n  }\n}"): (typeof documents)["query GetTokenPrice($inputs: [GetPriceInput]) {\n  getTokenPrices(inputs: $inputs) {\n    address\n    networkId\n    priceUsd\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query GetSparklines($input: TokenSparklineInput!) {\n  tokenSparklines(input: $input) {\n    attribute\n    id\n    sparkline {\n      timestamp\n      value\n    }\n  }\n}"): (typeof documents)["query GetSparklines($input: TokenSparklineInput!) {\n  tokenSparklines(input: $input) {\n    attribute\n    id\n    sparkline {\n      timestamp\n      value\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query GetTokens($input: [TokenInput!]) {\n  tokens(ids: $input) {\n    address\n    decimals\n    id\n    name\n    networkId\n    symbol\n    totalSupply\n  }\n}"): (typeof documents)["query GetTokens($input: [TokenInput!]) {\n  tokens(ids: $input) {\n    address\n    decimals\n    id\n    name\n    networkId\n    symbol\n    totalSupply\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "subscription OnEventsCreated($id: String) {\n  onEventsCreated(id: $id) {\n    events {\n      address\n      baseTokenPrice\n      blockHash\n      blockNumber\n      eventDisplayType\n      eventType\n      logIndex\n      id\n      liquidityToken\n      maker\n      networkId\n      timestamp\n      token0SwapValueUsd\n      token0ValueBase\n      token1SwapValueUsd\n      token1ValueBase\n      transactionHash\n      transactionIndex\n      data {\n        ... on MintEventData {\n          amount0\n          amount1\n          amount0Shifted\n          amount1Shifted\n          tickLower\n          tickUpper\n          type\n        }\n        ... on BurnEventData {\n          amount0\n          amount1\n          amount0Shifted\n          amount1Shifted\n          tickLower\n          tickUpper\n          type\n        }\n        ... on SwapEventData {\n          amount0\n          amount0In\n          amount0Out\n          amount1\n          amount1In\n          amount1Out\n          amountNonLiquidityToken\n          priceBaseToken\n          priceBaseTokenTotal\n          priceUsd\n          priceUsdTotal\n          tick\n          type\n        }\n      }\n    }\n    address\n    id\n    networkId\n  }\n}"): (typeof documents)["subscription OnEventsCreated($id: String) {\n  onEventsCreated(id: $id) {\n    events {\n      address\n      baseTokenPrice\n      blockHash\n      blockNumber\n      eventDisplayType\n      eventType\n      logIndex\n      id\n      liquidityToken\n      maker\n      networkId\n      timestamp\n      token0SwapValueUsd\n      token0ValueBase\n      token1SwapValueUsd\n      token1ValueBase\n      transactionHash\n      transactionIndex\n      data {\n        ... on MintEventData {\n          amount0\n          amount1\n          amount0Shifted\n          amount1Shifted\n          tickLower\n          tickUpper\n          type\n        }\n        ... on BurnEventData {\n          amount0\n          amount1\n          amount0Shifted\n          amount1Shifted\n          tickLower\n          tickUpper\n          type\n        }\n        ... on SwapEventData {\n          amount0\n          amount0In\n          amount0Out\n          amount1\n          amount1In\n          amount1Out\n          amountNonLiquidityToken\n          priceBaseToken\n          priceBaseTokenTotal\n          priceUsd\n          priceUsdTotal\n          tick\n          type\n        }\n      }\n    }\n    address\n    id\n    networkId\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "subscription OnPriceUpdated($address: String, $networkId: Int) {\n  onPriceUpdated(address: $address, networkId: $networkId) {\n    address\n    networkId\n    priceUsd\n  }\n}"): (typeof documents)["subscription OnPriceUpdated($address: String, $networkId: Int) {\n  onPriceUpdated(address: $address, networkId: $networkId) {\n    address\n    networkId\n    priceUsd\n  }\n}"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;