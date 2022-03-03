import Document, { Head, Html, Main, NextScript } from "next/document";
import { InitializeColorMode } from "theme-ui";

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
          <Main></Main>
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
