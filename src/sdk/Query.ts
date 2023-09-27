import {
  QueryGetBarsArgs,
  QueryGetNetworkStatusArgs,
} from "../resources/graphql";
import {
  FilterExchangesDocument,
  FilterExchangesQueryVariables,
  FilterTokensDocument,
  FilterTokensQueryVariables,
  GetBarsDocument,
  GetNetworksDocument,
  GetNetworkStatusDocument,
  GetSparklinesDocument,
  GetSparklinesQueryVariables,
  GetSymbolDocument,
  GetSymbolQueryVariables,
  GetTokenPriceDocument,
  GetTokensDocument,
  ListTopTokensDocument,
  PairEventsDocument,
  PairEventsQueryVariables,
  QueryGetTokenPricesArgs,
  QueryListTopTokensArgs,
  QueryTokenArgs,
} from "./generated/graphql";
import { Defined } from "./index";

export class Query {
  constructor(private sdk: Defined) {}
  pairEvents = async (vars: PairEventsQueryVariables) =>
    this.sdk.query(PairEventsDocument, vars);
  sparklines = async (vars: GetSparklinesQueryVariables) =>
    this.sdk.query(GetSparklinesDocument, vars);
  token = async (vars: QueryTokenArgs) =>
    this.sdk.query(GetTokensDocument, vars);
  price = async (vars: QueryGetTokenPricesArgs) =>
    this.sdk.query(GetTokenPriceDocument, vars);
  bars = async (vars: QueryGetBarsArgs) =>
    this.sdk.query(GetBarsDocument, vars);
  topTokens = async (vars: QueryListTopTokensArgs) =>
    this.sdk.query(ListTopTokensDocument, vars);
  filterTokens = async (vars: FilterTokensQueryVariables) =>
    this.sdk.query(FilterTokensDocument, vars);
  filterExchanges = async (vars: FilterExchangesQueryVariables) =>
    this.sdk.query(FilterExchangesDocument, vars);
  symbol = async (vars: GetSymbolQueryVariables) =>
    this.sdk.query(GetSymbolDocument, vars);
  networks = async () => this.sdk.query(GetNetworksDocument);
  networkStatus = async (vars: QueryGetNetworkStatusArgs) =>
    this.sdk.query(GetNetworkStatusDocument, vars);
}
