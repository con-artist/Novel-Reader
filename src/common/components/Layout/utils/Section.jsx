import React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import theme from "@/src/common/config/theme";

const Section = ({ boxProps, containerProps, children }) => {
  return (
    <Box component="section" sx={{ width: "100%" }}>
      <Container
        maxWidth={1280}
        mx={{ xs: 3, lg: 6 }}
        sx={{ [theme.breakpoints.down("sm")]: { px: 3 } }}
        {...containerProps}
      >
        {children}
      </Container>
    </Box>
  );
};

export default Section;
