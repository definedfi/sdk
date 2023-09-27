import { Defined } from "./index";
import { print } from 'graphql'
import { OnPriceUpdatedDocument, GetSparklinesDocument, GetSparklinesQueryVariables, GetTokenPriceDocument, GetTokensDocument, GetTokensQuery, QueryGetTokenPricesArgs, SubscriptionOnPriceUpdatedArgs, PairEventsDocument, PairEventsQueryVariables } from "./gql/graphql";
import { QueryGetTokensInfoArgs } from "../resources/graphql";
import { Sink } from "graphql-ws";

export class Query {
  constructor(private sdk: Defined) { }
  pairEvents = async (vars: PairEventsQueryVariables) => { return this.sdk.query(PairEventsDocument, vars) }
  sparklines = async (vars: GetSparklinesQueryVariables) => { return this.sdk.query(GetSparklinesDocument, vars) }
  token = async (vars: QueryGetTokensInfoArgs) => { return this.sdk.query(GetTokensDocument, vars) }
  price = async (vars: QueryGetTokenPricesArgs) => { return this.sdk.query(GetTokenPriceDocument, vars) }
}