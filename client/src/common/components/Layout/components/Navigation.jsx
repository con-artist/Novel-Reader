import React from "react";
import { useMediaQuery, useTheme } from "@mui/material";

import Sidebar from "./Sidebar";
import DownLgNavbar from "./DownLgNavbar";

const Navigation = () => {
  const theme = useTheme();
  const isUpLg = useMediaQuery(theme.breakpoints.up("lg"));

  return <>{isUpLg ? <Sidebar /> : <DownLgNavbar />}</>;
};

export default Navigation;
