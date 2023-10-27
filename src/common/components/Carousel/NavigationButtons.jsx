import React from "react";
import Box from "@mui/material/Box";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

import OulinedButton from "../Buttons/OulinedButton";

const NavigationButtons = ({ prevButtonClass, nextButtonClass }) => {
  return (
    <Box
      display="flex"
      flexDirection="row"
      width="230px"
      margin="auto"
      position="relative"
      zIndex={3}
      sx={{
        bottom: 30,
      }}
      justifyContent="space-between"
    >
      <OulinedButton
        variant="outlined"
        className={prevButtonClass}
        sx={{
          width: 25,
          height: 25,
          borderRadius: 1,
          p: 1,
        }}
      >
        <KeyboardArrowLeftIcon />
      </OulinedButton>
      <OulinedButton
        variant="outlined"
        className={nextButtonClass}
        sx={{
          width: 25,
          height: 25,
          borderRadius: 1,
          p: 1,
        }}
      >
        <KeyboardArrowRightIcon />
      </OulinedButton>
    </Box>
  );
};

export default NavigationButtons;
