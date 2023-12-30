import Document, { Html, Head, Main, NextScript } from "next/document"

// This allow us to add extra elements/configuration outside of react application
class MyDocuments extends Document {
  render() {
    return (
      <Html lang="en">
        <Head></Head>
        <body>
          <div id="overlay"></div>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocuments
