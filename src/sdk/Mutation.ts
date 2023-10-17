import {
  CreateWebhooksDocument,
  CreateWebhooksInput,
} from "./generated/graphql";
import { Defined } from "./index";

export class Mutation {
  constructor(private sdk: Defined) {}
  createWebhooks = async (vars: { input: CreateWebhooksInput }) =>
    this.sdk.mutation(CreateWebhooksDocument, vars);
}
