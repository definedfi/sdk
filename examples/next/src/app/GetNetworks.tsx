"use client"

import { Defined } from '@defined/sdk/dist/sdk'
import { useEffect, useState } from 'react'
import { Network } from '@defined/sdk/src/resources/graphql'

// Don't do this -- instead use a .env file and next server routes
const sdk = new Defined(process.env.NEXT_PUBLIC_DEFINED_API_KEY || '')

export default function GetNetworks() {
  const [networks, setNetworks] = useState<Network[]>([])
  useEffect(() => {
    const getNetworks = async () => {
      const res = await sdk.send<{getNetworks: Network[]}>(`query { getNetworks { id, name } }`)
      setNetworks(res.getNetworks)
    }
    getNetworks()
  }, [])

  return (
    <pre>
      {JSON.stringify(networks, null, 2)}
    </pre>
  )
}