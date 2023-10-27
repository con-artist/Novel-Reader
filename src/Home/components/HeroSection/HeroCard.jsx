/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";
import Image from "next/image";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { neutral } from "@/src/common/config/colors";

import { sliceString } from "@/src/common/utils/helper";
const HeroCard = ({ data }) => {
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      pl={10}
      alignItems="center"
      sx={{
        backgroundImage: `url('${data.background}')`,
        width: "100%",
        height: "100%",
        position: "relative",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: " no-repeat",
        borderRadius: "10px",
        "&::before": {
          content: "''",
          position: "absolute",
          borderRadius: "10px",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.6)", // Background color with opacity
        },
        "&::after": {
          content: "''",
          position: "absolute",
          borderRadius: "10px",
          bottom: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundImage: "linear-gradient(0deg,#0f0f0f,transparent)", // Gradient from bottom to top with transparency
        },
      }}
    >
      <Box
        display="flex"
        flexDirection="column"
        rowGap={3}
        zIndex={2}
        width="65%"
      >
        <Typography
          variant="h1"
          sx={{
            color: neutral["A500"],
            fontWeight: 600,
            fontSize: { xs: 18, lg: 28 },
          }}
        >
          {data.name}
        </Typography>
        <Box display="flex">
          <Typography
            variant="h6"
            sx={{
              color: neutral["A500"],
              px: 3,
              borderRadius: 2,
              border: "1px solid #2F3A46",
              bgcolor: "#262931",
              boxShadow: "inset 0 1px 1px #1014,0 1px 0.5px #0B0D0E",
              fontWeight: 400,
              fontSize: { xs: 12, lg: 14 },
            }}
          >
            {data.status}
          </Typography>
        </Box>
        <Box display="flex">
          <Typography
            variant="h4"
            sx={{
              color: neutral["A500"],
              fontWeight: 400,
              fontSize: { xs: 14, lg: 16 },
            }}
          >
            {sliceString(data.description, 200)}
          </Typography>
        </Box>
      </Box>
      <Box display="flex" position="relative" width="30%" height="100%">
        <img
          src={data.character}
          alt="character-image"
          style={{
            height: data.height,
            position: "absolute",
            bottom: 0,
            right: 0,
            zIndex: 1,
          }}
        />
      </Box>
    </Box>
  );
};

export default HeroCard;
