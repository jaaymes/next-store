import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <title>Store Acert</title>
          <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700&display=swap" rel="stylesheet" />
        </Head>
        <body className="transition-all duration-300">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

