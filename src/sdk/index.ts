import { GraphQLClient, Variables } from 'graphql-request'
import { TypedDocumentNode } from '@graphql-typed-document-node/core'
import { VariablesAndRequestHeadersArgs } from 'graphql-request/build/esm/types'

export class Defined {
  private client: GraphQLClient

  constructor(
    private apiKey: string,
    private apiUrl: string = `https://graph.defined.fi/graphql`

  ) {
    this.client = new GraphQLClient(this.apiUrl, {
      method: "POST",
      headers: new Headers({
        'Content-Type': 'application/json',
        'Authorization': this.apiKey,
        'X-Apollo-Operation-Name': 'query'
      })
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
}