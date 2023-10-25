import React from "react";
import { useRouter } from "next/router";

import Route from "./Route";
import Layout from "../Layout/components/Layout";

const Routes = ({ Component, pageProps }) => {
  const router = useRouter();

  return <Layout></Layout>;
};

export default Routes;
