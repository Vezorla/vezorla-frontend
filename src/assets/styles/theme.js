import {createMuiTheme} from "@material-ui/core";

const colorPrimary = "#D0C50A";
const colorSecondary = "#0C3658";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: colorPrimary
    },
    secondary: {
      main: colorSecondary
    }
  },
  typography: {
    fontFamily: [
      'Open Sans',
      'sans-serif',
    ].join(','),
    button: {
      fontWeight: "bold"
    }
  },
  overrides: {
    MuiDrawer: {
      paper: {
        backgroundColor: colorSecondary
      }
    },
    MuiDivider: {
      root: {
        width: "90%",
        height: "0.2rem",
        margin: "1rem auto",
        borderRadius: "1.5px",
        backgroundColor: colorPrimary,
      }
    },
    MuiToolbar: {
      root: {
        justifyContent: "space-between"
      }
    },
    MuiInputBase: {
      root: {
        color: colorSecondary
      }
    },
    MuiFormLabel: {
      root: {
        color: colorSecondary
      }
    },
    MuiTypography: {
      root: {
        color: colorSecondary
      }
    },
    MuiListItemText: {
      primary: {
        color: colorPrimary
      }
    },
    MuiButton: {
      containedPrimary: {
        color: colorSecondary
      }
    },
    MuiBadge: {
      colorSecondary: {
        color: colorSecondary,
        backgroundColor: "white",
        fontWeight: 700
      }
    }
  }
});

export default theme;