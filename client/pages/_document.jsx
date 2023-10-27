/* eslint-disable @next/next/next-script-for-ga */
import * as React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en" style={{ scrollBehavior: "smooth" }}>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="icon" href="/favicon/favicon.svg" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="anonymous"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap"
            rel="stylesheet"
          />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Inter:300,400,500,600,700&display=swap"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@700&family=Permanent+Marker&family=Poppins:ital,wght@0,400;0,500;1,400&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
