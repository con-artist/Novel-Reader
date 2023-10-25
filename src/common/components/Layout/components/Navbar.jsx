import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import NotificationsIcon from "@mui/icons-material/Notifications";

import ProfileIcon from "./ProfileIcon";
import SearchBar from "../../others/SeachBar";
import { Blues, neutral } from "@/src/common/config/colors";

const Navbar = () => {
  const router = useRouter();
  const navTabs = [
    { id: 1, name: "Browse", link: "/" },
    { id: 2, name: "Ranking", link: "/ranking" },
    { id: 3, name: "Search", link: "/search" },
  ];

  return (
    <Box display="flex" justifyContent="space-between" width="100%">
      <Box display="flex" columnGap={8} alignItems="center">
        <Box>
          <Image src="/Logo/new_logo.svg" alt="logo" width={70} height={70} />
        </Box>
        <Box
          sx={{
            flexGrow: 1,
            display: "flex",
            justifyContent: "flex-end",
            columnGap: 1,
          }}
        >
          {navTabs.map((tabs) => (
            <Link key={tabs.id} href={tabs.link}>
              <Button
                variant="text"
                sx={{
                  my: 2,
                  fontSize: 16,

                  color: neutral["A500"],

                  "&:hover": {
                    color: Blues["A100"],
                    backgroundColor: "transparent",
                  },
                }}
              >
                {tabs.name}
              </Button>
            </Link>
          ))}
        </Box>
      </Box>
      <Box display="flex" columnGap={8} alignItems="center">
        <SearchBar />
        <Box display="flex" columnGap={4} alignItems="center">
          {" "}
          <Tooltip title="Notifications">
            <IconButton
              aria-label="notifications"
              size="medium"
              sx={{
                border: "1px solid #2F3A46",
                bgcolor: "#161C20",
                boxShadow: "inset 0 1px 1px #1014,0 1px 0.5px #0B0D0E",
              }}
            >
              <NotificationsIcon
                sx={{ color: neutral["A800"], fontSize: 28 }}
              />
            </IconButton>
          </Tooltip>
          <ProfileIcon />
        </Box>
      </Box>
    </Box>
  );
};

export default Navbar;
