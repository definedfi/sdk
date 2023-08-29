# Defined SDK

This package exists to help you develop on top of the Defined API (https://docs.defined.fi).

It provides the public schema SDL for you to use. You can use graphql-codegen to generate types and queries for example.

## Installation

| packager                      | command                   |
| ----------------------------- | ------------------------- |
| [npm](https://www.npmjs.com/) | `npm add @definedfi/sdk`  |
| [yarn](https://yarnpkg.com/)  | `yarn add @definedfi/sdk` |
| [bun](https://bun.sh/)        | `bun add @definedfi/sdk`  |

## Usage

Follow one of the examples in the [examples](/examples) directory, or simply run.

```typescript

import { Network } from '../../src/resources/graphql'
import { Defined } from '@definedfi/sdk/dist/sdk'

const sdk = new Defined(process.env.DEFINED_API_KEY || "")

sdk.send<{ getNetworks: Network[] }>(`
  query GetNetworks {
    getNetworks { id name }
  }
`, {}).then(res => {
  console.log("Networks: ", res.getNetworks)
})

```

## Running the examples

You'll need to have [`curl`](https://curl.se/) installed in order to build this locally, as it fetches the schema from the Defined API.

You need to provide an API key in order for the examples to work. We have [bun](https://bun.sh) in use for development here.

After installing [bun](https://bun.sh), from the project root.

* `bun i`
* `bun run build`

### Simple
This performs a simple inline graphql request, and uses a user-provided query and selection set.

* `cd examples/simple`
* `bun i`
* `DEFINED_API_KEY=xyz bun run index.ts`

### Codegen
This shows how to use graphql-codegen to generate query types and get a fully typed end-to-end experience.

* `cd examples/codegen`
* `bun i`
* `bun run codegen`
* `DEFINED_API_KEY=xyz bun run src/index.ts`

### Next
This shows how you could use it in a next JS project.

* `cd examples/next`
* `bun i`
* `NEXT_PUBLIC_DEFINED_API_KEY=xyz bun run dev`

## Contributing

Prs open!
