import React, { useEffect, useState } from "react"
import useSWR from "swr"
// Sample regular client-side rendering

const URL =
  "https://next-tutorial-f2046-default-rtdb.europe-west1.firebasedatabase.app/sales.json"

const fetcher = async (url) => {
  const res = await fetch(url)
  const data = await res.json()
  return data
}

// Start the component with the sales from the server side
const LastSalesPage = (props) => {
  const [sales, setSales] = useState(props.sales)
  //   const [apiStatus, setApiStatus] = useState("")

  const { data, error, isLoading } = useSWR(URL, fetcher)

  useEffect(() => {
    if (data) {
      const formattedSales = []

      for (const key in data) {
        const formattedData = {
          id: key,
          username: data[key].username,
          volume: data[key].volume,
        }
        formattedSales.push(formattedData)
      }

      setSales(formattedSales)
    }
  }, [data])

  //   useEffect(() => {
  //     setApiStatus("loading")
  //     fetch(
  //       "https://next-tutorial-f2046-default-rtdb.europe-west1.firebasedatabase.app/sales.json"
  //     ).then(async (res) => {
  //       try {
  //         const data = await res.json()
  //         const formattedSales = []

  //         for (const key in data) {
  //           const formattedData = {
  //             id: key,
  //             username: data[key].username,
  //             volume: data[key].volume,
  //           }
  //           formattedSales.push(formattedData)
  //         }

  //         setApiStatus("success")
  //         setSales(formattedSales)
  //       } catch (error) {
  //         setApiStatus("failed")
  //       } finally {
  //         setTimeout(() => {
  //           setApiStatus("")
  //         }, 2000)
  //       }
  //     })
  //   }, [])

  //   if (apiStatus === "loading") {
  //     return <p>Loading</p>
  //   }

  if (isLoading) {
    return <p>Loading</p>
  }
  if (error) {
    return <p>Fail</p>
  }
  if (sales.length === 0) {
    return <p>No item to display</p>
  }

  return (
    <ul>
      {sales.map((sale) => {
        return (
          <li key={sale.id}>
            {sale.username} - £{sale.volume}
          </li>
        )
      })}
    </ul>
  )
}

export async function getStaticProps() {
  const res = await fetch(
    "https://next-tutorial-f2046-default-rtdb.europe-west1.firebasedatabase.app/sales.json"
  )

  const data = await res.json()
  const formattedSales = []

  for (const key in data) {
    const formattedData = {
      id: key,
      username: data[key].username,
      volume: data[key].volume,
    }
    formattedSales.push(formattedData)
  }

  return {
    props: {
      sales: formattedSales,
      revalidate: 10, // timer to re-execute after deployment
    },
  }
}

export default LastSalesPage
