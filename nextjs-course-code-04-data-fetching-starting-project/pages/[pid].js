import React from "react"
import fs from "fs"
import path from "path"

function ProductDetailsPage(props) {
  const { loadedProduct } = props

  //For fallback pages
  if (!loadedProduct) {
    return <p>Loading...</p>
  }

  return (
    <div>
      <h1>{`Title:${loadedProduct.title}`}</h1>
      <p>{`Description:${loadedProduct.description}`}</p>
    </div>
  )
}

export async function getStaticProps(context) {
  const { params } = context
  const productId = params.pid

  const rootDirectory = process.cwd()

  const filePath = path.join(rootDirectory, "data", "dummy-backend.json")

  const jsonData = await fs.readFileSync(filePath)
  const data = JSON.parse(jsonData)

  const loadedProduct = data.products.find((prod) => prod.id === productId)

  if (!loadedProduct) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      loadedProduct: loadedProduct,
    },
  }
}

// to SSR details pages
// We should get a list of ids and dynamic add to paths
export async function getStaticPaths() {
  return {
    paths: [
      { params: { pid: "p1" } },
      // { params: { pid: "p2" } },
      // { params: { pid: "p3" } },
    ],
    // fallback is for pages we don't want to pre generated pages. Only for pages that aren't highly accessed.
    fallback: true,
  }
}
export default ProductDetailsPage
