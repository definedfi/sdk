
import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: "./src/resources/schema.graphql",
  generates: {
    "src/sdk/generated/": {
      preset: "client",
      documents: "src/sdk/**/*",
    },
    "src/resources/graphql.ts": {
      plugins: ["typescript"]
    },
    "src/resources/graphql.schema.json": {
      plugins: ["introspection"]
    }
  }
};

export default config;
