import React from "react";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";

import { neutral } from "@/src/common/config/colors";

const DownSideBar = ({ drawer, toggleDrawer, tabs }) => {
  const drawerWidth = 250;

  return (
    <SwipeableDrawer
      anchor="left"
      open={drawer}
      onClose={toggleDrawer(false)}
      onOpen={toggleDrawer(true)}
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: "nowrap",
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
          "&::-webkit-scrollbar": {
            display: "none",
          },
        },
      }}
    >
      {/* <Box sx={{ bgcolor: neutral["A500"] }}>{tabs}</Box> */}
    </SwipeableDrawer>
  );
};

export default DownSideBar;
