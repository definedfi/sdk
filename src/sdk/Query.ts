import { Defined } from "./index";
import { GetSparklinesDocument, GetSparklinesQueryVariables, GetTokenPriceDocument, GetTokensDocument, GetTokensQuery, QueryGetTokenPricesArgs, SubscriptionOnPriceUpdatedArgs, PairEventsDocument, PairEventsQueryVariables, QueryTokenArgs } from "./gql/graphql";

export class Query {
  constructor(private sdk: Defined) { }
  pairEvents = async (vars: PairEventsQueryVariables) => { return this.sdk.query(PairEventsDocument, vars) }
  sparklines = async (vars: GetSparklinesQueryVariables) => { return this.sdk.query(GetSparklinesDocument, vars) }
  token = async (vars: QueryTokenArgs) => { return this.sdk.query(GetTokensDocument, vars) }
  price = async (vars: QueryGetTokenPricesArgs) => { return this.sdk.query(GetTokenPriceDocument, vars) }
}