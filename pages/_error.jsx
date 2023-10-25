import NextErrorComponent, { ErrorProps } from "next/error";
import * as Sentry from "@sentry/nextjs";
import Box from "@mui/material/Box";
import { useMediaQuery, useTheme } from "@mui/material";

import { neutral } from "@/src/common/config/colors";
// import { ERROR_400_IMAGE } from "@/src/common/utils/constants";

const isProduction = process.env.NODE_ENV === "production";

const ErrorPage = (props) => {
  const { statusCode, isReadyToRender, err, children = null } = props;
  const theme = useTheme();
  const isDownMd = useMediaQuery(theme.breakpoints.down("md"));

  if (isProduction) {
    console.warn(
      "ErrorPage - Unexpected error caught, it was captured and sent to Sentry. Error details:"
    );
    console.error(err);
  }

  if (isProduction && !isReadyToRender && err) {
    Sentry.captureException(err);
  }

  return (
    <>
      {/* {children ?? <NextErrorComponent statusCode={statusCode} />} */}
      <Box width="100vw" height="100vh" bgcolor={neutral["A500"]}>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          height="100%"
          width="100%"
        >
          {/* <Image
            src={ERROR_400_IMAGE}
            alt="404"
            width={isDownMd ? 200 : 400}
            height={isDownMd ? 200 : 400}
          /> */}
          -404-
        </Box>
      </Box>
    </>
  );
};

ErrorPage.getInitialProps = async (props) => {
  const { res, err, asPath } = props;

  const errorInitialProps = await NextErrorComponent.getInitialProps({
    res,
    err,
  });

  if (isProduction) {
    console.error(
      "ErrorPage.getInitialProps - Unexpected error caught, it was captured and sent to Sentry. Error details:",
      err
    );
  }

  errorInitialProps.isReadyToRender = true;

  if (res?.statusCode === 404) {
    return { statusCode: 404, isReadyToRender: true };
  }

  if (err) {
    if (isProduction) {
      Sentry.captureException(err);
      await Sentry.flush(2000);
    }
    return errorInitialProps;
  }

  if (isProduction) {
    Sentry.captureException(
      new Error(`_error.js getInitialProps missing data at path: ${asPath}`)
    );
    await Sentry.flush(2000);
  }

  return errorInitialProps;
};

export default ErrorPage;
