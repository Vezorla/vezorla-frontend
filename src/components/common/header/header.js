import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
// import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import ShoppingCart from '@material-ui/icons/ShoppingCart';
import NavBar from './customerOverlay';
import Badge from '@material-ui/core/Badge';


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" style={{backgroundColor : "#D0C50A"}}>
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <NavBar />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Vezorla
          </Typography>
          <IconButton color="#D0C50A">
            <Badge badgeContent={4} color="secondary">
              <ShoppingCart style={{color: "#0C3658" }} />
            </Badge>
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
}