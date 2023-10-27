import React from "react";
import Image from "next/image";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import { neutral } from "../../config/colors";

const GenericError = ({
  imageUrl,
  heading,
  description,
  imageProps,
  headingProps,
  gridContainerProps,
}) => {
  return (
    <Box mt={{ xs: 4, md: 8 }}>
      <Grid
        container
        alignItems="center"
        justifyContent="center"
        spacing={5}
        {...(gridContainerProps || {})}
      >
        {imageUrl && (
          <Grid item xs={12}>
            <Box display="flex" justifyContent="center">
              <Image src={imageUrl} alt={imageUrl} {...imageProps} />
            </Box>
          </Grid>
        )}
        <Grid item xs={12}>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
            rowGap={1}
            px={{ xs: 6, md: 0 }}
          >
            <Typography
              variant="h5"
              color={neutral["900"]}
              align="center"
              {...(headingProps || {})}
            >
              {heading || "Something went wrong!"}
            </Typography>
            <Typography variant="body1" align="center" color="inherit">
              {description || ""}
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default React.memo(GenericError);
