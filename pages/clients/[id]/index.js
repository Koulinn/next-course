import { useRouter } from "next/router"
import React from "react"

export default function ClientsProjectPage() {
  const router = useRouter()
  const loadProject = () => {
    //... do API
    router.push(`/clients/max/projectA`)
  }
  return (
    <div>
      <h1>The projects of a Given Client</h1>
      <button onClick={loadProject}>Load Project A</button>
    </div>
  )
}
