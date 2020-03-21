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
import PowerSettingsNew from '@material-ui/icons/PowerSettingsNew'
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import BookmarkIcon from "@material-ui/icons/Bookmark";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import ExploreIcon from "@material-ui/icons/Explore";
import StoreIcon from "@material-ui/icons/Storefront";
import {NavLink} from 'react-router-dom';

const useStyles = makeStyles({
  paper: {
    backgroundColor: "#0C3658"
  },
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
          <NavLink to="/admin/dashboard" exact>
              <ListItem button key="Dashboard" className={classes.type}>
                <ListItemIcon>
                  <AccountCircleIcon className={classes.icon} />
                </ListItemIcon>
                <ListItemText primary={"Dashboard"} classes={{primary: classes.text}} />
              </ListItem>
            </NavLink>
            </Box>
            <Box boxShadow={3} padding="5px">
            <NavLink to="/admin/inventory" exact>
              <ListItem button key={"Inventory"} className={classes.type}>
                <ListItemIcon>
                  <HomeIcon className={classes.icon} />
                </ListItemIcon>
                <ListItemText primary={"Inventory"} classes={{primary: classes.text}} />
              </ListItem>
            </NavLink>
          </Box>
          <Box boxShadow={3} padding="5px">
            <NavLink to="/admin/clients" exact>
              <ListItem button key={"Clients"} className={classes.type}>
                <ListItemIcon>
                  <ShoppingCartIcon className={classes.icon} />
                </ListItemIcon>
                <ListItemText primary={"Clients"} classes={{primary: classes.text}} />
              </ListItem>
            </NavLink>
          </Box>
          <Box boxShadow={3} padding="5px">
            <NavLink to="/admin/purchases" exact>
              <ListItem button key={"Purchases"} className={classes.type}>
                <ListItemIcon>
                  <StoreIcon className={classes.icon} />
                </ListItemIcon>
                <ListItemText primary={"Purchases"} classes={{primary: classes.text}} />
              </ListItem>
            </NavLink>
          </Box>
          <Divider
            style={{
              marginBottom: "15px",
              marginTop: "15px",
              backgroundColor: "#D0C50A",
              width: "90%",
              marginLeft: "auto",
              marginRight: "auto",
              height: "3px",
              borderRadius: "1.5px"
            }}
          />
          <Box boxShadow={3} padding="5px">
            <NavLink to="/admin/sales" exact>
              <ListItem button key={"Sales"} className={classes.type}>
                <ListItemIcon>
                  <ExploreIcon className={classes.icon} />
                </ListItemIcon>
                <ListItemText primary={"Sales"} classes={{primary: classes.text}} />
              </ListItem>
            </NavLink>
          </Box>
          <Box boxShadow={3} padding="5px">
            <NavLink to="/admin/discounts" exact>
              <ListItem button key={"Discounts"} className={classes.type}>
                <ListItemIcon>
                  <MailOutlineIcon className={classes.icon} />
                </ListItemIcon>
                <ListItemText primary={"Discounts"} classes={{primary: classes.text}} />
              </ListItem>
            </NavLink>
          </Box>
          <Divider
            style={{
              marginBottom: "15px",
              marginTop: "15px",
              backgroundColor: "#D0C50A",
              width: "90%",
              marginLeft: "auto",
              marginRight: "auto"
            }}
          />
          <Box boxShadow={3} padding="5px">
            <NavLink to="/admin/settings" exact>
              <ListItem button key={"Settings"} className={classes.type}>
                <ListItemIcon>
                  <BookmarkIcon className={classes.icon} />
                </ListItemIcon>
                <ListItemText primary={"Settings"} classes={{primary: classes.text}} />
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
        <MenuIcon style={{ color: "#0C3658" }} />
      </Button>
      <Drawer
        classes={{ paper: classes.paper }}
        open={state.left}
        onClose={toggleDrawer("left", false)}
      >
        {sideList("left")}
      </Drawer>
    </div>
  );
}
