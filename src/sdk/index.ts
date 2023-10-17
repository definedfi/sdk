import { TypedDocumentNode } from "@graphql-typed-document-node/core";
import { GraphQLClient, Variables } from "graphql-request";
import { VariablesAndRequestHeadersArgs } from "graphql-request/build/esm/types";
import {
  Client as GraphQLWsClient,
  createClient,
  ExecutionResult,
  Sink,
} from "graphql-ws";
import WebSocket from "isomorphic-ws";

import { invariant } from "./invariant";
import { Mutation } from "./Mutation";
import { Query } from "./Query";
import { Subscribe } from "./Subscribe";

export type CleanupFunction = () => void;

export class Defined {
  private client: GraphQLClient;
  private wsClient: GraphQLWsClient;
  public queries: Query;
  public mutations: Mutation;
  public subscriptions: Subscribe;

  constructor(
    private apiKey: string,
    private apiUrl: string = `https://graph.defined.fi/graphql`,
    private apiRealtimeUrl: string = `wss://realtime-api.defined.fi/graphql`,
  ) {
    invariant(this.apiKey, "apiKey must be defined");
    this.queries = new Query(this);
    this.mutations = new Mutation(this);
    this.subscriptions = new Subscribe(this);
    this.client = new GraphQLClient(this.apiUrl, {
      method: "POST",
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: this.apiKey,
        "X-Apollo-Operation-Name": "query",
      }),
    });
    this.wsClient = createClient({
      webSocketImpl: WebSocket,
      url: this.apiRealtimeUrl,
      connectionParams: {
        Authorization: this.apiKey,
      },
    });
  }

  public async query<TResults, TVars extends Variables>(
    doc: TypedDocumentNode<TResults, TVars>,
    args: TVars = {} as TVars,
  ) {
    const res = await this.client.request<typeof doc, TVars>(
      doc,
      ...([args] as unknown as VariablesAndRequestHeadersArgs<TVars>),
    );
    return res as TResults;
  }

  public async mutation<TResults, TVars extends Variables>(
    doc: TypedDocumentNode<TResults, TVars>,
    args: TVars = {} as TVars,
  ) {
    const res = await this.client.request<typeof doc, TVars>(
      doc,
      ...([args] as unknown as VariablesAndRequestHeadersArgs<TVars>),
    );
    return res as TResults;
  }

  // Very simple network based fetch implementation, no compilation required
  public async send<TResults, V extends Variables = Variables>(
    gqlString: string,
    args: V = {} as V,
  ) {
    const res = await this.client.request<TResults>(gqlString, args);
    return res;
  }

  public subscribe<
    TResults,
    TVars extends Record<string, unknown> = Record<string, never>,
  >(
    doc: string,
    args: TVars,
    sink: Sink<ExecutionResult<TResults>>,
  ): CleanupFunction {
    const cleanup = this.wsClient.subscribe<TResults>(
      {
        query: doc,
        variables: args,
      },
      sink,
    );
    return cleanup;
  }
}
