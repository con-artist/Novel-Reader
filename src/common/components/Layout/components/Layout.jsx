import React, { useEffect } from "react";
import { useRouter } from "next/router";
import Box from "@mui/material/Box";

import Navigation from "./Navigation";
import { background } from "@/src/common/config/colors";
import Section from "../utils/Section";

const Layout = ({ children }) => {
  return (
    <Box>
      <Navigation />
      <Box
        display="flex"
        flexDirection="column"
        flexGrow={1}
        minHeight={{ xs: `calc(100vh - 56px)`, md: `calc(100vh - 64px)` }}
        boxSizing="border-box"
        alignItems="center"
        width="100%"
        mt={{ xs: 14, lg: 18 }}
        bgcolor={background["A100"]}
        py={{ xs: 6, lg: 8 }}
      >
        <Section>hello</Section>

        {children}
      </Box>
    </Box>
  );
};

export default Layout;
