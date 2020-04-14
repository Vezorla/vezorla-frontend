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
	Dashboard,
	Loyalty,
	Menu,
	MonetizationOn,
	Person,
	PowerSettingsNew,
	Settings,
	ShoppingCart,
	Store
} from '@material-ui/icons';
import globalStyles from "../../../assets/styles/styles";

const useStyles = makeStyles((theme) => ({
  boxListItem: {
    padding: "0.3rem 0"
  },
  text: {
	  letterSpacing: ".15rem",
	  textTransform: "uppercase",
  }
}));

export default function TemporaryDrawer() {
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
        <Box>
          <Box boxShadow={3} className={classes.boxListItem}>
            <NavLink to="/admin/dashboard" exact className={classesGlobal.link}>
              <ListItem button>
                <ListItemIcon>
                  <Dashboard color={"primary"}/>
                </ListItemIcon>
                <ListItemText
                  primary={'Dashboard'}
                  className={classes.text}
                  primaryTypographyProps={{variant: "h6"}}
                />
              </ListItem>
            </NavLink>
          </Box>
          <Box boxShadow={3} className={classes.boxListItem}>
            <NavLink to="/admin/inventory" exact className={classesGlobal.link}>
              <ListItem button>
                <ListItemIcon>
                  <Store color={"primary"}/>
                </ListItemIcon>
                <ListItemText
                  primary={'Inventory'}
                  className={classes.text}
                  primaryTypographyProps={{variant: "h6"}}
                />
              </ListItem>
            </NavLink>
          </Box>
          <Box boxShadow={3} className={classes.boxListItem}>
            <NavLink to="/admin/clients" exact className={classesGlobal.link}>
              <ListItem button>
                <ListItemIcon>
                  <Person color={"primary"}/>
                </ListItemIcon>
                <ListItemText
					primary={'Clients'}
					className={classes.text}
                    primaryTypographyProps={{variant: "h6"}}
                />
              </ListItem>
            </NavLink>
          </Box>
          <Box boxShadow={3} className={classes.boxListItem}>
            <NavLink to="/admin/purchase-orders" exact className={classesGlobal.link}>
              <ListItem button>
                <ListItemIcon>
                  <ShoppingCart color={"primary"}/>
                </ListItemIcon>
                <ListItemText
					primary={'Purchase Orders'}
					className={classes.text}
                    primaryTypographyProps={{variant: "h6"}}
                />
              </ListItem>
            </NavLink>
          </Box>
          <Box boxShadow={3} className={classes.boxListItem}>
            <NavLink to="/admin/sales" exact className={classesGlobal.link}>
              <ListItem button>
                <ListItemIcon>
                  <MonetizationOn color={"primary"}/>
                </ListItemIcon>
                <ListItemText
					primary={'Sales'}
					className={classes.text}
                    primaryTypographyProps={{variant: "h6"}}
                />
              </ListItem>
            </NavLink>
          </Box>
          <Box boxShadow={3} className={classes.boxListItem}>
            <NavLink to="/admin/discounts" exact className={classesGlobal.link}>
              <ListItem disabled button>
                <ListItemIcon>
                  <Loyalty color={"primary"}/>
                </ListItemIcon>
                <ListItemText
					primary={'Discounts'}
					className={classes.text}
                    primaryTypographyProps={{variant: "h6"}}
                />
              </ListItem>
            </NavLink>
          </Box>
          <Box boxShadow={3} className={classes.boxListItem}>
            <NavLink to="/admin/settings" exact className={classesGlobal.link}>
              <ListItem button>
                <ListItemIcon>
                  <Settings color={"primary"}/>
                </ListItemIcon>
                <ListItemText
					primary={'Settings'}
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
