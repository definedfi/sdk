import { GraphQLClient, Variables } from 'graphql-request'
import { TypedDocumentNode } from '@graphql-typed-document-node/core'
import { VariablesAndRequestHeadersArgs } from 'graphql-request/build/esm/types'
import { Client, ExecutionResult, Sink, createClient } from 'graphql-ws'
import { invariant } from './invariant'
import WebSocket from 'isomorphic-ws'

export type CleanupFunction = () => void

export class Defined {
  private client: GraphQLClient
  private wsClient: Client

  constructor(
    private apiKey: string,
    private apiUrl: string = `https://graph.defined.fi/graphql`,
    private apiRealtimeUrl: string = `wss://realtime-api.defined.fi/graphql`
  ) {
    invariant(this.apiKey, "apiKey must be defined")

    this.client = new GraphQLClient(this.apiUrl, {
      method: "POST",
      headers: new Headers({
        'Content-Type': 'application/json',
        'Authorization': this.apiKey,
        'X-Apollo-Operation-Name': 'query'
      })
    })

    this.wsClient = createClient({
      webSocketImpl: WebSocket,
      url: this.apiRealtimeUrl,
      connectionParams: {
        Authorization: this.apiKey
      }
    })
  }

  public async query<TResults, TVars extends Variables>(doc: TypedDocumentNode<TResults, TVars>, args: TVars = {} as TVars) {
    const res = await this.client.request<typeof doc, TVars>(doc, ...([ args ] as unknown as VariablesAndRequestHeadersArgs<TVars>))
    return res as TResults
  }

  // Very simple network based fetch implementation, no compilation required
  public async send<TResults, V extends Variables = Variables>(gqlString: string, args: V = {} as V) {
    const res = await this.client.request<TResults>(gqlString, args)
    return res
  }

  public subscribe<TResults, TVars extends Record<string, unknown> = {}>(doc: string, args: TVars, sink: Sink<ExecutionResult<TResults>>): CleanupFunction {
    const cleanup = this.wsClient.subscribe<TResults>({
      query: doc,
      variables: args
    }, sink)
    return cleanup
  }
}