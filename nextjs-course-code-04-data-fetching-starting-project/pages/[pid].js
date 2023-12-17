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

const getData = async () => {
  const rootDirectory = process.cwd()

  const filePath = path.join(rootDirectory, "data", "dummy-backend.json")

  const jsonData = await fs.readFileSync(filePath)
  const data = JSON.parse(jsonData)
  return data
}

export async function getStaticProps(context) {
  const { params } = context
  const productId = params.pid

  const data = await getData()

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
  const data = await getData()

  const ids = data.products.map((product) => product.id)
  const params = ids.map((id) => ({ params: { pid: id } }))
  return {
    paths: params,
    // fallback is for pages we don't want to pre generated pages. Only for pages that aren't highly accessed.
    // true will try to load the page
    fallback: true,
  }
}
export default ProductDetailsPage

/**
 * https://www.ohmycrawl.com/nextjs/getstaticprops-vs-getserversideprops/#:~:text=When%20to%20use%20getStaticProps%20or,would%20be%20the%20preferred%20method.
 *  To statically render pages (also known as static site generation, or SSG) that load extremely fast on the client, and can be easily cached using a CDN provider to further increase performance, the getStaticProps() method should be exported from the Next component. 

// Build time (when create the build)
Using getStaticProps() for SSG is the most optimal technique for generating performant SEO metrics, but is somewhat limited when used with pages that require frequently updated dynamic data.

To render pages at each request (also known as server side rendering, or SSR) that load faster and more efficiently than typical SPAs, the getServerSideProps() method should be exported from the Next component.

// On each request (client accessing the page)
Using getServerSideProps() for SSR isn’t quite as optimal as SSG, but it still offers great SEO metrics and allows for extremely scalable pages that are heavily reliant on frequently changing dynamic data.
 */
