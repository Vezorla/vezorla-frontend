import React from "react";
import {
  makeStyles,
  AppBar,
  Toolbar,
  Typography,
  Badge
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
            <Badge badgeContent={4} color="secondary">
              <ShoppingCart style={{ color: "#0C3658" }} />
            </Badge>
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
}
