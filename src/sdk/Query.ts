import { Defined } from "./index";
import { GetSparklinesDocument, GetSparklinesQueryVariables, GetTokenPriceDocument, GetTokensDocument, GetTokensQuery, QueryGetTokenPricesArgs, SubscriptionOnPriceUpdatedArgs, PairEventsDocument, PairEventsQueryVariables, QueryTokenArgs, GetBarsDocument, QueryListTopTokensArgs, ListTopTokensDocument, FilterTokensQueryVariables, FilterTokensDocument, FilterExchangesQueryVariables, FilterExchangesDocument, GetSymbolQueryVariables, GetSymbolDocument } from "./generated/graphql";
import { QueryGetBarsArgs } from "../resources/graphql";

export class Query {
  constructor(private sdk: Defined) { }
  pairEvents = async (vars: PairEventsQueryVariables) => this.sdk.query(PairEventsDocument, vars)
  sparklines = async (vars: GetSparklinesQueryVariables) => this.sdk.query(GetSparklinesDocument, vars)
  token = async (vars: QueryTokenArgs) => this.sdk.query(GetTokensDocument, vars)
  price = async (vars: QueryGetTokenPricesArgs) => this.sdk.query(GetTokenPriceDocument, vars)
  bars = async (vars: QueryGetBarsArgs) => this.sdk.query(GetBarsDocument, vars)
  topTokens = async (vars: QueryListTopTokensArgs) => this.sdk.query(ListTopTokensDocument, vars)
  filterTokens = async (vars: FilterTokensQueryVariables) => this.sdk.query(FilterTokensDocument, vars)
  filterExchanges = async (vars: FilterExchangesQueryVariables) => this.sdk.query(FilterExchangesDocument, vars)
  symbol = async (vars: GetSymbolQueryVariables) => this.sdk.query(GetSymbolDocument, vars)
}