import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useSnackbar } from "notistack";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import PersonIcon from "@mui/icons-material/Person";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";
import NotificationsIcon from "@mui/icons-material/Notifications";
import BookmarkIcon from "@mui/icons-material/Bookmark";

import { neutral } from "@/src/common/config/colors";

const ProfileIcon = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const router = useRouter();
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {};

  return (
    <>
      <Box sx={{ display: "flex", alignItems: "center", textAlign: "center" }}>
        <Tooltip title="Profile Menu">
          <IconButton
            onClick={handleClick}
            size="medium"
            sx={{
              border: "1px solid #2F3A46",
              bgcolor: "#161C20",
              boxShadow: "inset 0 1px 1px #1014,0 1px 0.5px #0B0D0E",
            }}
            aria-label="Profile"
          >
            <PersonIcon sx={{ color: neutral["A800"], fontSize: 28 }} />
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            width: 230,
            py: 2,
            borderRadius: 1.5,
            filter: "drop-shadow(0px 2px 10px rgba(0,0,0,0.32))",
            border: "1px solid #2F3A46",
            bgcolor: "#1F262E",
            boxShadow: "inset 0 1px 1px #1014,0 1px 0.5px #0B0D0E",
            mt: 1.5,
            "& .MuiAvatar-root": {
              width: 36,
              height: 36,
              ml: -0.5,
              mr: 2,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <Link href={"/profile"}>
          <MenuItem
            sx={{ display: "flex", columnGap: 2, alignItems: "center" }}
          >
            <ListItemIcon>
              <Avatar fontSize="small">
                <PersonIcon />
              </Avatar>
            </ListItemIcon>
            <Box display="flex" flexDirection="column" rowGap={0.5}>
              <Typography
                variant="h5"
                sx={{
                  color: neutral["A500"],
                  fontWeight: 500,
                  fontSize: { xs: 14, lg: 16 },
                }}
              >
                SpiderMan
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  color: neutral["700"],
                  fontWeight: 400,
                  fontSize: { xs: 10, lg: 12 },
                }}
              >
                View my Profile
              </Typography>
            </Box>
          </MenuItem>
        </Link>
        <Divider sx={{ opacity: 0.2, mx: 2, bgcolor: neutral["A500"] }} />
        <Link href={"/settings"}>
          <Box py={1}>
            <MenuItem>
              <ListItemIcon>
                <Settings fontSize="small" sx={{ color: neutral["A800"] }} />
              </ListItemIcon>
              <Typography
                variant="h6"
                sx={{
                  color: neutral["A500"],
                  fontWeight: 400,
                  fontSize: { xs: 14, lg: 16 },
                }}
              >
                Account Settings
              </Typography>
            </MenuItem>
          </Box>
        </Link>
        <Divider sx={{ opacity: 0.2, mx: 2, bgcolor: neutral["A500"] }} />
        <Box py={1}>
          <Link href="/blogs">
            <MenuItem>
              <ListItemIcon>
                <NotificationsIcon
                  fontSize="small"
                  sx={{ color: neutral["A800"] }}
                />
              </ListItemIcon>
              <Typography
                variant="h6"
                sx={{
                  color: neutral["A500"],
                  fontWeight: 400,
                  fontSize: { xs: 14, lg: 16 },
                }}
              >
                Notifications
              </Typography>
            </MenuItem>
          </Link>
          <Link href="events">
            <MenuItem>
              <ListItemIcon>
                <BookmarkIcon
                  fontSize="small"
                  sx={{ color: neutral["A800"] }}
                />
              </ListItemIcon>
              <Typography
                variant="h6"
                sx={{
                  color: neutral["A500"],
                  fontWeight: 400,
                  fontSize: { xs: 14, lg: 16 },
                }}
              >
                My Bookmarks
              </Typography>
            </MenuItem>
          </Link>
        </Box>
        <Divider sx={{ opacity: 0.2, mx: 2, bgcolor: neutral["A500"] }} />
        <Box py={1}>
          <MenuItem onClick={handleLogout}>
            <ListItemIcon>
              <Logout fontSize="small" sx={{ color: neutral["A800"] }} />
            </ListItemIcon>
            <Typography
              variant="h6"
              sx={{
                color: neutral["A500"],
                fontWeight: 400,
                fontSize: { xs: 14, lg: 16 },
              }}
            >
              Logout
            </Typography>
          </MenuItem>
        </Box>
      </Menu>
    </>
  );
};

export default ProfileIcon;
