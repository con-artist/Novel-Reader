import { Color } from "@mui/material";
import { createTheme, PaletteColorOptions } from "@mui/material/styles";

let theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 545,
      md: 768,
      lg: 992,
      xl: 1200,
    },
  },
  status: {
    danger: "#ea1717",
  },

  spacing: 4,

  typography: {
    htmlFontSize: 14,
    fontFamily: "'Poppins', sans-serif",
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
    h1: {
      fontFamily: "'Poppins', sans-serif",
      fontWeight: 700,
      fontSize: 40,
      lineHeight: 1.167,
      letterSpacing: "-0.01562em",
      color: "#000000",
    },
    h2: {
      fontFamily: "'Poppins', sans-serif",
      fontWeight: 700,
      fontSize: 36,
      lineHeight: 1.2,
      letterSpacing: "-0.00833em",
      color: "#000000",
    },
    h3: {
      fontFamily: "'Poppins', sans-serif",
      fontWeight: 600,
      fontSize: 28,
      lineHeight: 1.167,
      letterSpacing: "0em",
      color: "#000000",
    },
    h4: {
      fontFamily: "'Poppins', sans-serif",
      fontWeight: 600,
      fontSize: 24,
      lineHeight: 1.235,
      letterSpacing: "0.00735em",
      color: "#000000",
    },
    h5: {
      fontFamily: "'Poppins', sans-serif",
      fontWeight: 600,
      fontSize: 18,
      lineHeight: 1.334,
      letterSpacing: "0em",
      color: "#000000",
    },
    h6: {
      fontFamily: "'Poppins', sans-serif",
      fontWeight: 500,
      fontSize: 16,
      lineHeight: 1.6,
      letterSpacing: "0.0075em",
      color: "#000000",
    },
    subtitle1: {
      fontFamily: "'Inter', 'Helvetica', 'Arial', sans-serif",
      fontWeight: 500,
      fontSize: 14,
      lineHeight: 1.5,
      letterSpacing: "0.00938em",
      color: "#444444",
    },
    subtitle2: {
      fontFamily: "'Inter', 'Helvetica', 'Arial', sans-serif",
      fontWeight: 400,
      fontSize: 16,
      lineHeight: 1.57,
      letterSpacing: "0.00714em",
      color: "#444444",
    },
    body1: {
      fontFamily: "'Inter', 'Helvetica', 'Arial', sans-serif",
      fontWeight: 400,
      fontSize: 14,
      lineHeight: 1.5,
      letterSpacing: "0.00938em",
      color: "#444444",
    },

    body2: {
      fontFamily: "'Inter', 'Helvetica', 'Arial', sans-serif",
      fontWeight: 400,
      fontSize: 12,
      lineHeight: 1.5,
      letterSpacing: "0.01071em",
      color: "#444444",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 10,
          textTransform: "none",
          minWidth: "100px",
          padding: "6px 18px",
          outline: "none",
          "&:focus": {
            outline: "none",
          },
        },
        sizeSmall: {
          padding: "6px 12px",
        },
        outlinedPrimary: {
          // "&:hover": {
          //   backgroundColor: "#44924C !important",
          //   color: "#FFFFFF !important",
          // },
        },
      },
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          fontSize: 12,
          marginLeft: 0,
        },
      },
    },
  },
});

export default theme;
