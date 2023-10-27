import Head from "next/head";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { SnackbarProvider } from "notistack";

import theme from "@/src/common/config/theme";
import Routes from "@/src/common/components/routing/Routes";
import ErrorBoundary from "@/src/common/components/error-handlers/ErrorBoundary";
import "../styles/globals.css";

const MyApp = (props) => {
  const { Component, pageProps } = props;

  return (
    <>
      <Head>
        <title></title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <meta name="description" content="" />
        <meta property="og:type" content="website" key="type" />
        <meta property="og:site_name" content="" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <ErrorBoundary>
          <SnackbarProvider>
            <Routes Component={Component} pageProps={pageProps} />
          </SnackbarProvider>
        </ErrorBoundary>
      </ThemeProvider>
    </>
  );
};

export default MyApp;
