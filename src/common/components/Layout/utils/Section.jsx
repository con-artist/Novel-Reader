import React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import theme from "@/src/common/config/theme";

const Section = ({ boxProps, containerProps, children }) => {
  return (
    <Box component="section">
      <Container
        maxWidth="xl"
        sx={{ [theme.breakpoints.down("sm")]: { px: 3 } }}
        {...containerProps}
      >
        <Box component="section" {...boxProps}>
          {children}
        </Box>
      </Container>
    </Box>
  );
};

export default Section;
