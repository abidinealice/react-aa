import { createTheme } from "@mui/material";
import "@fontsource/afacad";

export const Colors = {
  primary: "#481010",
  bgFooter: "#FED3CE",
};

const theme = () =>
  createTheme({
    palette: {
      primary: {
        main: "#fff",
      },
      secondary: {
        main: Colors.primary,
      },
    },
    typography: {
      allVariants: {
        color: Colors.primary,
        fontFamily: "'Afacad', 'cursive'",
        fontSize: 20,
      },
      h1: {
        fontSize: 50,
        fontWeight: "700",
      },
      h2: {
        fontSize: 40,
        fontWeight: "600",
      },
    },
    components: {
      MuiContainer: {
        styleOverrides: {
          root: {
            padding: 40,
          },
        },
      },
      MuiButton: {
        defaultProps: {
          disableRipple: true,
          disableElevation: true,
        },
        styleOverrides: {
          root: {
            fontSize: 18,
            borderRadius: 20,
            backgroundColor: Colors.primary,
            color: "#fff",
            "&:hover": {
              backgroundColor: "#fff",
              color: Colors.primary,
            },
          },
        },
      },
      MuiInputBase: {
        styleOverrides: {
          root: {
            fontSize: 18,
            borderBottom: 0,
            backgroundColor: Colors.primary,
            borderRadius: 20,
            "&:hover": {
              backgroundColor: Colors.primary,
              borderRadius: 20,
            },
          },
          input: {
            color: "#fff",
            backgroundColor: Colors.primary,
            borderRadius: 20,
            "&:hover": {
              backgroundColor: Colors.primary,
              borderRadius: 20,
            },
          },
        },
      },
      MuiFormLabel: {
        styleOverrides: {
          asterisk: {
            color: Colors.primary,
          },
        },
      },
    },
  });

export default theme;
