import Head from "next/head"
import Layout from "../components/layout/layout"
import "../styles/globals.css"

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      {/* Next automatically merge heads */}
      <Head>
        <title>
          General title shared across all pages that doesn't have a specific
          data
        </title>
        <meta
          name="viewport"
          content="initial-scale=1.0, width=device-width"
        ></meta>
      </Head>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
