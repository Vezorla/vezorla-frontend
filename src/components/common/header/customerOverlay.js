import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import HomeIcon from '@material-ui/icons/Home';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import ExploreIcon from '@material-ui/icons/Explore';
import StoreIcon from '@material-ui/icons/Storefront';

const useStyles = makeStyles({
  paper: {
    backgroundColor : '#0C3658'
  },
  list: {
    width : '60vw',
    backgroundColor : '#0C3658',
    height : 'auto',
    marginBottom : '5px'

  },
  icon : {
    size : '180%',
    color : '#D0C50A'
  },
  type : {
    textTransform : 'uppercase',
    fontWeight : '800',
    color : '#D0C50A'
  },
  boxSpacing : {
    
  }
});

export default function TemporaryDrawer() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (side, open) => event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
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
        <Box >
        <Box boxShadow={3} padding="5px">
          <ListItem button key={'Home'} className={classes.type}>
            <ListItemIcon><HomeIcon className={classes.icon} /></ListItemIcon> 
            <ListItemText primary={'Home'} />
          </ListItem>
        </Box>
        <Box boxShadow={3} padding="5px">
          <ListItem button key={'Cart'} className={classes.type}>
            <ListItemIcon><ShoppingCartIcon className={classes.icon} /></ListItemIcon>
            <ListItemText primary={'Cart'} />
          </ListItem>
          </Box>
          <Box boxShadow={3} padding="5px">
          <ListItem button key={'Shop'} className={classes.type}>
            <ListItemIcon><StoreIcon className={classes.icon} /></ListItemIcon>
            <ListItemText primary={'Shop'} />
          </ListItem>
          </Box>
      <Divider style={{marginBottom : '15px', marginTop : '15px', backgroundColor : '#D0C50A', width : '90%', marginLeft : 'auto', marginRight : 'auto', height: '30px'}} />
      <Box boxShadow={3} padding="5px">
          <ListItem button key={'Find us'} className={classes.type}>
            <ListItemIcon><ExploreIcon className={classes.icon} /></ListItemIcon>
            <ListItemText primary={'Find Us'} />
          </ListItem>
          </Box>
          <Box boxShadow={3} padding="5px">
          <ListItem button key={'Contact Us'} className={classes.type}>
            <ListItemIcon><MailOutlineIcon className={classes.icon} /></ListItemIcon>
            <ListItemText primary={'Contact Us'} />
          </ListItem>
          </Box>
      <Divider  style={{marginBottom : '15px', marginTop : '15px', backgroundColor : '#D0C50A', width : '90%', marginLeft : 'auto', marginRight : 'auto'}} />
      <Box boxShadow={3} padding="5px">
          <ListItem button key={'About Us'} className={classes.type}>
            <ListItemIcon><BookmarkIcon className={classes.icon} /></ListItemIcon>
            <ListItemText primary={'About Us'} />
          </ListItem>
          </Box>
          <Divider  style={{marginBottom : '15px', marginTop : '15px'}} />
          <Box boxShadow={3} padding="5px">
          <ListItem button key={'Sign In'} className={classes.type}>  
            <ListItemIcon><AccountCircleIcon className={classes.icon} /></ListItemIcon>
            <ListItemText primary={'Sign In'} />
          </ListItem>
          </Box>
          </Box>
      </List>
    </div>
  );

  return (
    <div>
      <Button onClick={toggleDrawer('left', true)}><MenuIcon style={{color: "#0C3658"}} /></Button>
      <Drawer classes={{paper : classes.paper}} open={state.left} onClose={toggleDrawer('left', false)}>
        {sideList('left')}
      </Drawer>
    </div>
  );
}