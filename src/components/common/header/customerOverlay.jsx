import React from "react";
import {
  makeStyles,
  Drawer,
  Button,
  List,
  Box,
  Divider,
  ListItem,
  ListItemIcon,
  ListItemText
} from "@material-ui/core";

import MenuIcon from "@material-ui/icons/Menu";
import HomeIcon from "@material-ui/icons/Home";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import BookmarkIcon from "@material-ui/icons/Bookmark";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import ExploreIcon from "@material-ui/icons/Explore";
import StoreIcon from "@material-ui/icons/Storefront";
import {NavLink} from 'react-router-dom';
import globalStyles from "../../../assets/styles/styles";

const useStyles = makeStyles({
  list: {
    width: "60vw",
    backgroundColor: "#0C3658",
    height: "auto",
    marginBottom: "5px"
  },
  icon: {
    size: "180%",
    color: "#D0C50A",
    fontSize: "1.5em"
  },
  type: {
    textTransform: "uppercase",
    fontWeight: "800",
    color: "#D0C50A"
  },
  text: {
    letterSpacing: ".11em",
    fontWeight: "500"
  }
});

export default function TemporaryDrawer() {
  const classes = useStyles();
  const classesGlobal = globalStyles();
  const [state, setState] = React.useState({
    left: false
  });

  const toggleDrawer = (side, open) => event => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [side]: open });
  };

  const sideList = side => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
      <List className={classes.boxSpacing}>
        <Box>
          <Box boxShadow={3} padding="5px">
            <NavLink to="/" exact className={classesGlobal.link}>
              <ListItem button key={"Home"} className={classes.type}>
                <ListItemIcon>
                  <HomeIcon className={classes.icon} />
                </ListItemIcon>
                <ListItemText primary={"Home"} />
              </ListItem>
            </NavLink>
          </Box>
          <Box boxShadow={3} padding="5px">
            <NavLink to="/customer/cart" exact className={classesGlobal.link}>
              <ListItem button key={"Cart"} className={classes.type}>
                <ListItemIcon>
                  <ShoppingCartIcon className={classes.icon} />
                </ListItemIcon>
                <ListItemText primary={"Cart"} classes={{primary: classes.text}} />
              </ListItem>
            </NavLink>
          </Box>
          <Box boxShadow={3} padding="5px">
            <NavLink to="/customer/shop" exact className={classesGlobal.link}>
              <ListItem button key={"Shop"} className={classes.type}>
                <ListItemIcon>
                  <StoreIcon className={classes.icon} />
                </ListItemIcon>
                <ListItemText primary={"Shop"} classes={{primary: classes.text}} />
              </ListItem>
            </NavLink>
          </Box>
          <Divider/>
          <Box boxShadow={3} padding="5px">
            <NavLink to="/findus" exact className={classesGlobal.link}>
              <ListItem button key={"Find us"} className={classes.type}>
                <ListItemIcon>
                  <ExploreIcon className={classes.icon} />
                </ListItemIcon>
                <ListItemText primary={"Find Us"} classes={{primary: classes.text}} />
              </ListItem>
            </NavLink>
          </Box>
          <Box boxShadow={3} padding="5px">
            <NavLink to="/contact" exact className={classesGlobal.link}>
              <ListItem button key={"Contact Us"} className={classes.type}>
                <ListItemIcon>
                  <MailOutlineIcon className={classes.icon} />
                </ListItemIcon>
                <ListItemText primary={"Contact Us"} classes={{primary: classes.text}} />
              </ListItem>
            </NavLink>
          </Box>
          <Divider/>
          <Box boxShadow={3} padding="5px">
            <NavLink to="/about" exact className={classesGlobal.link}>
              <ListItem button key={"About Us"} className={classes.type}>
                <ListItemIcon>
                  <BookmarkIcon className={classes.icon} />
                </ListItemIcon>
                <ListItemText primary={"About Us"} classes={{primary: classes.text}} />
              </ListItem>
            </NavLink>
          </Box>
          <Divider/>
          <Box boxShadow={3} padding="5px">
            <NavLink to="/login" className={classesGlobal.link}>
              <ListItem button key={"Sign In"} className={classes.type}>
                <ListItemIcon>
                  <AccountCircleIcon className={classes.icon} />
                </ListItemIcon>
                <ListItemText primary={"Sign In"} classes={{primary: classes.text}} />
              </ListItem>
            </NavLink>
          </Box>
        </Box>
      </List>
    </div>
  );

  return (
    <div>
      <Button onClick={toggleDrawer("left", true)}>
        <MenuIcon color={"secondary"} />
      </Button>
      <Drawer
        open={state.left}
        onClose={toggleDrawer("left", false)}
      >
        {sideList("left")}
      </Drawer>
    </div>
  );
}
