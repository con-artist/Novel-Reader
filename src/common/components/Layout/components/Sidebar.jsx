import React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Slide from "@mui/material/Slide";

import Navbar from "./Navbar";

function HideOnScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
  window: PropTypes.func,
};

const Sidebar = (props) => {
  return (
    <>
      <HideOnScroll {...props}>
        <AppBar
          sx={{
            "& .MuiPaper-root": {
              display: "flex",
              justifyContent: "center",
            },

            width: "100%",
            alignItems: "center",
            bgcolor: "#11161A",
            boxShadow: "inset 0px -1px 1px #1F262E",
            backdropFilter: "blur(8px)",
            height: 72,
          }}
        >
          <Toolbar sx={{ mx: 6, maxWidth: 1280, width: "100%" }}>
            <Navbar />
          </Toolbar>
        </AppBar>
      </HideOnScroll>
    </>
  );
};

export default Sidebar;
