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

sdk.send<{ getNetworks: Network[] }>(`query GetNetworks { getNetworks { id name } }`, {}).then(res => {
  console.log("Networks: ", res.getNetworks)
})

``` 

## Contributing

Prs open! 
