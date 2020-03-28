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
      'Roboto',
      'sans-serif',
    ].join(','),
  },
});

theme.overrides = {
  ...theme.overrides,
  MuiTextField: {
    ...theme.MuiTextField,
    root: {
      ...theme.root,
      color: theme.palette.secondary.main
    }
  },
};

export default theme;