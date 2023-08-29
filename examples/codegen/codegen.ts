import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: "node_modules/@definedfi/sdk/src/resources/schema.graphql",
  documents: "src/**/*.ts",
  generates: {
    "src/gql/": {
      preset: "client",
      plugins: ["typescript-document-nodes"]
    }
  }
};

export default config;
