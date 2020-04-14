import React from "react";
import {NavLink} from 'react-router-dom';
import {
  Box,
  Button,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles
} from "@material-ui/core";
import {
  AccountCircle,
  Bookmark,
  Email,
  Home,
  ShoppingCart,
  Storefront,
  Menu
} from "@material-ui/icons";
import globalStyles from "../../../assets/styles/styles";

const useStyles = makeStyles((theme) => ({
  boxListItem : {
    padding: "0.3rem 0"
  },
  text: {
    letterSpacing: ".15rem",
    textTransform: "uppercase",
  }
}));

export default function DrawerCustomer() {
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

    setState({...state, [side]: open});
  };

  const sideList = side => (
    <div
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
      <List>
        <Box boxShadow={3} className={classes.boxListItem}>
          <NavLink to="/" exact className={classesGlobal.link}>
            <ListItem button>
              <ListItemIcon>
                <Home color={"primary"}/>
              </ListItemIcon>
              <ListItemText
                primary={"Home"}
                className={classes.text}
                primaryTypographyProps={{variant: "h6"}}
              />
            </ListItem>
          </NavLink>
        </Box>
        <Box boxShadow={3} className={classes.boxListItem}>
          <NavLink to="/customer/cart" exact className={classesGlobal.link}>
            <ListItem button>
              <ListItemIcon>
                <ShoppingCart color={"primary"}/>
              </ListItemIcon>
              <ListItemText
                primary={"Cart"}
                className={classes.text}
                primaryTypographyProps={{variant: "h6"}}
              />
            </ListItem>
          </NavLink>
        </Box>
        <Box boxShadow={3} className={classes.boxListItem}>
          <NavLink to="/customer/shop" exact className={classesGlobal.link}>
            <ListItem button>
              <ListItemIcon>
                <Storefront color={"primary"}/>
              </ListItemIcon>
              <ListItemText
                primary={"Shop"}
                className={classes.text}
                primaryTypographyProps={{variant: "h6"}}
              />
            </ListItem>
          </NavLink>
        </Box>
        <Divider/>
        {/*<Box boxShadow={3} padding="5px">
            <NavLink to="/customer/find-us" exact className={classesGlobal.link}>
              <ListItem button key={"Find us"} className={classes.type}>
                <ListItemIcon>
                  <ExploreIcon className={classes.icon} />
                </ListItemIcon>
                <ListItemText primary={"Find Us"} classes={{primary: classes.text}} />
              </ListItem>
            </NavLink>
          </Box>*/}
        <Box boxShadow={3} className={classes.boxListItem}>
          <NavLink to="/customer/contact" exact className={classesGlobal.link}>
            <ListItem button>
              <ListItemIcon>
                <Email color={"primary"}/>
              </ListItemIcon>
              <ListItemText
                primary={"Contact"}
                className={classes.text}
                primaryTypographyProps={{variant: "h6"}}
              />
            </ListItem>
          </NavLink>
        </Box>
        <Box boxShadow={3} className={classes.boxListItem}>
          <NavLink to="/customer/about" exact className={classesGlobal.link}>
            <ListItem button>
              <ListItemIcon>
                <Bookmark color={"primary"}/>
              </ListItemIcon>
              <ListItemText
                primary={"About"}
                className={classes.text}
                primaryTypographyProps={{variant: "h6"}}
              />
            </ListItem>
          </NavLink>
        </Box>
        <Divider/>
        <Box boxShadow={3} className={classes.boxListItem}>
          <NavLink to="/login" className={classesGlobal.link}>
            <ListItem button>
              <ListItemIcon>
                <AccountCircle color={"primary"}/>
              </ListItemIcon>
              <ListItemText
                primary={"Sign In"}
                className={classes.text}
                primaryTypographyProps={{variant: "h6"}}
              />
            </ListItem>
          </NavLink>
        </Box>
      </List>
    </div>
  );

  return (
    <div>
      <Button onClick={toggleDrawer("left", true)}>
        <Menu color={"secondary"}/>
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
