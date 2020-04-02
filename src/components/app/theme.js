import {createMuiTheme} from "@material-ui/core";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#D0C50A'
    },
    secondary: {
      main: '#0C3658'
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
        color: "#0C3658"
      }
    },
    MuiFormLabel: {
      root: {
        color: "#0C3658"
      }
    },
    MuiTypography: {
      root: {
        color: "#0C3658"
      }
    }
  }
});

export default theme;