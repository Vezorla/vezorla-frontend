import {createMuiTheme} from "@material-ui/core";

const colorMain = "#D0C50A";
const colorSecondary = "#0C3658";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: colorMain
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
    }
  }
});

export default theme;