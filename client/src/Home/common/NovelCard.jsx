/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";
import Image from "next/image";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";

import OulinedButton from "@/src/common/components/Buttons/OulinedButton";
import { neutral } from "@/src/common/config/colors";
import { sliceString } from "@/src/common/utils/helper";
import CompletionPercentage from "./CompletionPercentage";

const NovelCard = ({ data }) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      rowGap={2}
      position="relative"
      width="100%"
    >
      <Box
        display="flex"
        position="relative"
        top={0}
        height="360px"
        borderRadius={2}
        sx={{
          boxShadow: "inset 0 1px 1px #1014, 0 1px 0.5px #0b0d0e",
        }}
      >
        <img
          src={data.cover}
          alt="novel-cover"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            borderRadius: "8px",
          }}
        />
        <Box
          display="flex"
          px={2}
          columnGap={1}
          py={0.5}
          position="absolute"
          bgcolor="transparent"
          style={{
            bottom: 0,
            borderTopRightRadius: 8,
            borderBottomLeftRadius: 8,
            border: "1px solid #2F3A46",
            backdropFilter: "blur(8px)",
          }}
        >
          <ThumbUpIcon
            sx={{
              fontSize: "12px !important",
              color: neutral["A500"],
              position: "relative",
              top: 5,
            }}
          />
          <Typography
            variant="h6"
            sx={{
              color: neutral["A500"],
              fontWeight: 400,
              fontSize: { xs: 12, lg: 14 },
            }}
          >
            {data.rating}
          </Typography>
        </Box>
        <Box
          display="flex"
          position="absolute"
          bgcolor="#161C20"
          style={{
            bottom: 3,
            right: 3,
            borderRadius: "50%",
            border: "1px solid #2F3A46",
            backdropFilter: "blur(8px)",
          }}
        >
          <CompletionPercentage value={data.completetion_per} />
        </Box>
      </Box>
      <Box
        display="flex"
        px={2}
        py={1}
        position="absolute"
        bgcolor="transparent"
        style={{
          borderRadius: 8,
          border: "1px solid #2F3A46",
          backdropFilter: "blur(8px)",
        }}
      >
        <Typography
          variant="h6"
          sx={{
            color: neutral["A500"],
            fontWeight: 400,
            fontSize: { xs: 12, lg: 14 },
          }}
        >
          {data.status}
        </Typography>
      </Box>

      <Box display="flex" flexDirection="column" rowGap={1}>
        <Typography
          variant="h6"
          sx={{
            color: neutral["A500"],
            fontWeight: 500,
            fontSize: { xs: 14, lg: 16 },
            height: 50,
          }}
        >
          {sliceString(data.name, 50)}
        </Typography>
      </Box>
    </Box>
  );
};

export default NovelCard;
