import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

import TabList from "./TabList";
import DownSideBar from "./DownSideBar";
// import ProfileIcon from "./ProfileIcon";
// import SearchBar from "../../others/SearchBar";
import { neutral } from "@/src/common/config/colors";

const DownLgNavbar = () => {
  const [drawer, setDrawer] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setDrawer(open);
  };

  return (
    <AppBar
      position="fixed"
      color="inherit"
      sx={{
        boxShadow:
          "rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;",
        bgcolor: neutral["A500"],
        zIndex: 1101,
      }}
    >
      <Toolbar>
        <Container maxWidth="xl" sx={{ px: 4 }}>
          <Box display="flex" alignItems="center">
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              width="100%"
              columnGap={2}
            >
              <Box display="flex" alignItems="center" columnGap={1}>
                <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  onClick={toggleDrawer(true)}
                  edge="start"
                >
                  <MenuIcon sx={{ color: neutral["900"] }} />
                </IconButton>
                {/* <SearchBar /> */}
              </Box>
              {/* <ProfileIcon /> */}
            </Box>
            <DownSideBar
              drawer={drawer}
              toggleDrawer={toggleDrawer}
              tabs={<TabList handleClick={toggleDrawer(false)} />}
            />
          </Box>
        </Container>
      </Toolbar>
    </AppBar>
  );
};

export default DownLgNavbar;
