import React from "react";
import {
  makeStyles,
  AppBar,
  Toolbar,
  Typography,
  Badge,
  createMuiTheme,
  withTheme,
  ThemeProvider
} from "@material-ui/core";

import IconButton from "@material-ui/core/IconButton";
import ShoppingCart from "@material-ui/icons/ShoppingCart";

import NavBar from "./customerOverlay";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  }
}));

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#fff",
    },
    secondary: {
        main: "#4c00ff"
    }
  }
});

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" style={{ backgroundColor: "#D0C50A" }}>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <NavBar />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Vezorla
          </Typography>
          <IconButton color="#D0C50A">
            <ThemeProvider theme={theme}>
              <Badge badgeContent={4} color="secondary">
                <ShoppingCart style={{ color: "#0C3658" }} />
              </Badge>
            </ThemeProvider>
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
}
