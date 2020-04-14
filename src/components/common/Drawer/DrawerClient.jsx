import React from 'react';
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
} from '@material-ui/core';
import {
  AccountCircle,
  Bookmark,
  Email,
  Home,
  PowerSettingsNew,
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

export default function DrawerClient() {
  const classes = useStyles();
  const classesGlobal = globalStyles();

  const [state, setState] = React.useState({
    left: false
  });

  const logout = async () => {
    try {
      await fetch('http://localhost:8080/api/auth/logout', {
        method: 'DELETE',
        mode: 'cors',
        credentials: 'include'
      });
    } catch (err) {
    }
  };

  const toggleDrawer = (side, open) => (event) => {
    if (event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({...state, [side]: open});
  };

  const sideList = (side) => (
    <div
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
      <List>
        <Box boxShadow={3} className={classes.boxListItem}>
          <NavLink to="/client/account" exact className={classesGlobal.link}>
            <ListItem button>
              <ListItemIcon>
                <AccountCircle color={"primary"}/>
              </ListItemIcon>
              <ListItemText
                primary={'Account'}
                className={classes.text}
                primaryTypographyProps={{variant: "h6"}}
              />
            </ListItem>
          </NavLink>
        </Box>
        <Divider/>
        <Box boxShadow={3} className={classes.boxListItem}>
          <NavLink to="/" exact className={classesGlobal.link}>
            <ListItem button>
              <ListItemIcon>
                <Home color={"primary"}/>
              </ListItemIcon>
              <ListItemText
                primary={'Home'}
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
                primary={'Cart'}
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
                primary={'Shop'}
                className={classes.text}
                primaryTypographyProps={{variant: "h6"}}
              />
            </ListItem>
          </NavLink>
        </Box>
        <Divider/>
        {/* <Box boxShadow={3} padding="5px">
            <NavLink to="/findus" exact>
              <ListItem button key={"Find us"} className={classes.type}>
                <ListItemIcon>
                  <ExploreIcon className={classes.icon} />
                </ListItemIcon>
                <ListItemText primary={"Find Us"} classes={{primary: classes.text}} />
              </ListItem>
            </NavLink>
          </Box> */}
        <Box boxShadow={3} className={classes.boxListItem}>
          <NavLink to="/customer/contact" exact className={classesGlobal.link}>
            <ListItem button>
              <ListItemIcon>
                <Email color={"primary"}/>
              </ListItemIcon>
              <ListItemText
                primary={'Contact'}
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
                primary={'About'}
                className={classes.text}
                primaryTypographyProps={{variant: "h6"}}
              />
            </ListItem>
          </NavLink>
        </Box>
        <Divider/>
        <Box boxShadow={3} className={classes.boxListItem}>
          <NavLink to="/" className={classesGlobal.link} onClick={logout}>
            <ListItem button>
              <ListItemIcon>
                <PowerSettingsNew color={"primary"}/>
              </ListItemIcon>
              <ListItemText
                primary={'Logout'}
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
      <Button onClick={toggleDrawer('left', true)}>
        <Menu color={"secondary"}/>
      </Button>
      <Drawer
        open={state.left}
        onClose={toggleDrawer('left', false)}
      >
        {sideList('left')}
      </Drawer>
    </div>
  );
}
