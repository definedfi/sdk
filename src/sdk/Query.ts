import { Defined } from "./index";
import { GetSparklinesDocument, GetSparklinesQueryVariables, GetTokenPriceDocument, GetTokensDocument, GetTokensQuery, QueryGetTokenPricesArgs, SubscriptionOnPriceUpdatedArgs, PairEventsDocument, PairEventsQueryVariables, QueryTokenArgs, GetBarsDocument, QueryListTopTokensArgs, ListTopTokensDocument, FilterTokensQueryVariables, FilterTokensDocument, FilterExchangesQueryVariables, FilterExchangesDocument } from "./generated/graphql";
import { QueryGetBarsArgs } from "../resources/graphql";

export class Query {
  constructor(private sdk: Defined) { }
  pairEvents = async (vars: PairEventsQueryVariables) => { return this.sdk.query(PairEventsDocument, vars) }
  sparklines = async (vars: GetSparklinesQueryVariables) => { return this.sdk.query(GetSparklinesDocument, vars) }
  token = async (vars: QueryTokenArgs) => { return this.sdk.query(GetTokensDocument, vars) }
  price = async (vars: QueryGetTokenPricesArgs) => { return this.sdk.query(GetTokenPriceDocument, vars) }
  bars = async (vars: QueryGetBarsArgs) => { return this.sdk.query(GetBarsDocument, vars) }
  topTokens = async (vars: QueryListTopTokensArgs) => { return this.sdk.query(ListTopTokensDocument, vars) }
  filterTokens = async (vars: FilterTokensQueryVariables) => { return this.sdk.query(FilterTokensDocument, vars) }
  filterExchanges = async (vars: FilterExchangesQueryVariables) => { return this.sdk.query(FilterExchangesDocument, vars) }
}