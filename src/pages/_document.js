import Document, { Head, Html, Main, NextScript } from "next/document";
import { InitializeColorMode } from "theme-ui";
// we use class over func because we need to extend document
class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700;800&display=swap"
            rel="stylesheet"
          ></link>
          <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/boxicons@latest/css/boxicons.min.css"
          ></link>
          <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/boxicons@latest/css/boxicons.min.css"
          ></link>
        </Head>
        <body>
          <InitializeColorMode />

          {/* Main adds div id="__next" */}
          <Main></Main>

          {/* NextScript adds sctipts in this div */}
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;

// _app vs _document
// _app adds stuff to body, not responsible for html and head
