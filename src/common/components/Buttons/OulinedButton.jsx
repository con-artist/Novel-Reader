import React from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

import { Blues, neutral } from "@/src/common/config/colors";

const OulinedButton = ({ sx, ...props }) => {
  return (
    <div>
      <Button
        variant="outlined"
        sx={{
          borderRadius: 2,
          border: "1px solid #2F3A46",
          bgcolor: "#161C20",
          boxShadow: "inset 0 1px 1px #1014,0 1px 0.5px #0B0D0E",
          color: neutral["A500"],
          "&:hover": {
            color: Blues["A200"],
            borderColor: Blues["A200"],
          },
          ...(sx || {}),
        }}
        {...props}
      />
    </div>
  );
};

export default OulinedButton;
