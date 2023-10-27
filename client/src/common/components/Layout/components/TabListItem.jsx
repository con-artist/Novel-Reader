import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Box from "@mui/material/Box";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { useMediaQuery, useTheme } from "@mui/material";
import { styled } from "@mui/material";

import { Blues, neutral } from "@/src/common/config/colors";

const openedMixin = (theme) => ({
  backgroundColor: neutral["A700"],
  width: "100%",
  borderRadius: 4,
  "& .MuiTypography-h6": {
    color: Blues["A100"],
    fontWeight: 500,
    lineHeight: "21px",
  },
});

const closedMixin = (theme) => ({
  bgcolor: "blue",
  width: "100%",
  "& .MuiTypography-h6": {
    color: neutral["600"],
    fontWeight: 400,
    lineHeight: "21px",
  },
});

const MuiListItem = styled(ListItem, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  ...(open && {
    ...openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
  }),
}));

const TabListItem = ({ Icon, route, name, id, handleClick }) => {
  const router = useRouter();
  return (
    <Box display="flex" width="100%">
      <Link href={route} passHref style={{ width: "100%" }}>
        <Box py={1.5}>
          <MuiListItem
            open={router.pathname.startsWith(`/${id}`)}
            sx={{
              cursor: "pointer",
              py: 2,
              columnGap: 2,
            }}
            onClick={handleClick}
          >
            <ListItemIcon style={{ minWidth: "20px" }}>{Icon}</ListItemIcon>
            <ListItemText
              primaryTypographyProps={{
                variant: "h6",
                fontSize: { xs: 14, lg: 16 },
              }}
            >
              {name}
            </ListItemText>
          </MuiListItem>
        </Box>
      </Link>
    </Box>
  );
};

export default TabListItem;
