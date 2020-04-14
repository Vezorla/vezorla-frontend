import React from 'react';
import {Link} from 'react-router-dom';
import {
  AppBar,
  Badge,
  Container,
  IconButton,
  makeStyles,
  Toolbar,
  Typography,
} from '@material-ui/core';
import ShoppingCart from '@material-ui/icons/ShoppingCart';
import DrawerAdmin from '../Drawer/DrawerAdmin';
import DrawerCustomer from '../Drawer/DrawerCustomer';
import DrawerClient from '../Drawer/DrawerClient';

const useStyles = makeStyles((theme) => ({
  buttonMenu: {
    marginRight: theme.spacing(2)
  },
  buttonCart: {
    marginLeft: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  }
}));

function NavBar({auth = 'customer'}) {
  switch (auth) {
    case 'admin':
      return <DrawerAdmin/>;
    case 'client':
      return <DrawerClient/>;
    default:
      return <DrawerCustomer/>;
  }
}

export default function ButtonAppBar(props) {
  const classes = useStyles();

  return (
    <Container>
      <AppBar position={"fixed"}>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.buttonMenu}
            color="secondary"
            aria-label="menu">
            <NavBar auth={props.auth}/>
          </IconButton>
          <Typography variant="h5" className={classes.title}>
            Vezorla
          </Typography>
          {props.auth !== "admin" ? (
            <IconButton
              className={classes.buttonCart}
              color={"secondary"}
              component={Link}
              to="/customer/cart"
            >
              <Badge badgeContent={props.cart} color={"secondary"}>
                <ShoppingCart/>
              </Badge>
            </IconButton>
          ) : ("")
          }
        </Toolbar>
      </AppBar>
      {/* Second static app bar as a shim */}
      <AppBar position={"fixed"}/>
      <Toolbar/>
    </Container>
  );
}
