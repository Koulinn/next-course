import Link from "next/link"
import React from "react"
const clients = [
  {
    id: "max",
    name: "Max",
  },
  {
    id: "manu",
    name: "Manu",
  },
]

export default function ClientsPage() {
  return (
    <div>
      <h1>The Clients page</h1>
      <ul>
        {clients.map((client) => {
          const linkConfig = {
            pathname: "/clients/[id]",
            query: { id: client.id },
          }

          const linkHref = `/clients/${client.id}`
          return (
            <li key={client.id}>
              <Link href={linkHref}>{client.name}</Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
