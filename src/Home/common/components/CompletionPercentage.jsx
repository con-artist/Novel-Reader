import React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { neutral } from "@/src/common/config/colors";

const CompletionPercentage = ({ value }) => {
  return (
    <Box sx={{ position: "relative", display: "inline-flex" }}>
      <CircularProgress variant="determinate" value={value} />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: "absolute",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography
          variant="h6"
          sx={{
            color: neutral["A500"],
            fontWeight: 400,
            fontSize: { xs: 12, lg: 10 },
          }}
        >
          {`${Math.round(value)}%`}
        </Typography>
      </Box>
    </Box>
  );
};

export default CompletionPercentage;
