import React from "react";
import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import MuiLink from "@mui/material/Link";

import { tabProps } from "@/src/common/utils/utils";
import { useMediaQuery, useTheme } from "@mui/material";

const DetailNavbar = ({
  tabs,
  tabIdx,
  onTabChange,
  appBarProps,
  containerProps,
  tabsProps,
  tabOtherProps,
  children,
  LinkComponent,
  useCustomTab,
}) => {
  const theme = useTheme();
  const isDownSm = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <AppBar
      {...(appBarProps || {})}
      sx={{
        top: "-100px",
        zIndex: 100,
        paddingTop: "2px",
        ...(appBarProps?.sx || {}),
      }}
    >
      <Container maxWidth="xl" {...(containerProps || {})}>
        <Tabs
          value={tabIdx}
          onChange={onTabChange}
          textColor="primary"
          indicatorColor="primary"
          centered={isDownSm ? true : false}
          variant={isDownSm ? "fullWidth" : "standard"}
          TabIndicatorProps={{
            style: {
              height: "0.3em",
              borderRadius: theme.spacing(4),
            },
          }}
          {...(tabsProps || {})}
        >
          {useCustomTab ||
            tabs?.map((tab, index) => (
              <Tab
                key={tab.label}
                label={tab.label}
                sx={{ textTransform: "initial", fontSize: 28, color: "red" }}
                {...tabProps(tab?.route || "/", LinkComponent || MuiLink)}
                {...(tabOtherProps || {})}
              />
            ))}
        </Tabs>
        {children}
      </Container>
    </AppBar>
  );
};

export default DetailNavbar;
