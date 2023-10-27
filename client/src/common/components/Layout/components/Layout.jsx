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
        minHeight="100vh"
        boxSizing="border-box"
        width="100%"
        bgcolor={background["A100"]}
        py={{ xs: 20, lg: 26 }}
      >
        {children}
      </Box>
    </Box>
  );
};

export default Layout;
