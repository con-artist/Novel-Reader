/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";
import Image from "next/image";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { neutral } from "@/src/common/config/colors";

import { sliceString } from "@/src/common/utils/helper";
const NovelCard = ({ data }) => {
  return (
    <Box display="flex" flexDirection="column" rowGap={2}>
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
    </Box>
  );
};

export default NovelCard;
