import { Defined } from '../../../src/sdk';
import { graphql } from './gql/gql';
import { NetworksQuery, NetworksQueryVariables } from './gql/graphql';

const doc = graphql(`
  query Networks {
    getNetworks {
      id
      name
    }
  }
`);

const sdk = new Defined(process.env.DEFINED_API_KEY || "");

sdk.query<NetworksQuery, NetworksQueryVariables>(doc).then(res => {
  console.log("Fetched res", res)
})


