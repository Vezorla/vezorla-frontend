import React from 'react';
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
} from '@material-ui/core';

import MenuIcon from '@material-ui/icons/Menu';
import HomeIcon from '@material-ui/icons/Home';
import PowerSettingsNew from '@material-ui/icons/PowerSettingsNew';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import StoreIcon from '@material-ui/icons/Storefront';
import { NavLink, useHistory } from 'react-router-dom';
import theme from "../../../assets/styles/theme";

const useStyles = makeStyles({
	paper: {
		backgroundColor: '#0C3658'
	},
	list: {
		width: '60vw',
		backgroundColor: '#0C3658',
		height: 'auto',
		marginBottom: '5px'
	},
	icon: {
		size: '180%',
		color: '#D0C50A',
		fontSize: '1.5em'
	},
	type: {
		textTransform: 'uppercase',
		fontWeight: '800',
		color: '#D0C50A'
	},
	text: {
		color: theme.palette.primary.main,
		letterSpacing: '.11em',
		fontWeight: '500'
	}
});

export default function TemporaryDrawer() {
	const classes = useStyles();

	const history = useHistory();

	const [ state, setState ] = React.useState({
		left: false
	});

	const logout = async () => {
		try {
			await fetch('http://localhost:8080/api/auth/logout', {
				method: 'DELETE',
				mode: 'cors',
				credentials: 'include'
			});
			history.push('/');
		} catch (err) {}
	};

	const toggleDrawer = (side, open) => (event) => {
		if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
			return;
		}

		setState({ ...state, [side]: open });
	};

	const sideList = (side) => (
		<div
			className={classes.list}
			role="presentation"
			onClick={toggleDrawer(side, false)}
			onKeyDown={toggleDrawer(side, false)}
		>
			<List className={classes.boxSpacing}>
				<Box>
					<Box boxShadow={3} padding="5px">
						<NavLink to="/client/account" exact>
							<ListItem button key={'Home'} className={classes.type}>
								<ListItemIcon>
									<AccountCircleIcon className={classes.icon} />
								</ListItemIcon>
								<ListItemText primary={'Account Settings'} classes={{ primary: classes.text }} />
							</ListItem>
						</NavLink>
					</Box>
					<Box boxShadow={3} padding="5px">
						<NavLink to="/" exact>
							<ListItem button key={'Home'} className={classes.type}>
								<ListItemIcon>
									<HomeIcon className={classes.icon} />
								</ListItemIcon>
								<ListItemText primary={'Home'} classes={{ primary: classes.text }} />
							</ListItem>
						</NavLink>
					</Box>
					<Box boxShadow={3} padding="5px">
						<NavLink to="/customer/cart" exact>
							<ListItem button key={'Cart'} className={classes.type}>
								<ListItemIcon>
									<ShoppingCartIcon className={classes.icon} />
								</ListItemIcon>
								<ListItemText primary={'Cart'} classes={{ primary: classes.text }} />
							</ListItem>
						</NavLink>
					</Box>
					<Box boxShadow={3} padding="5px">
						<NavLink to="/customer/shop" exact>
							<ListItem button key={'Shop'} className={classes.type}>
								<ListItemIcon>
									<StoreIcon className={classes.icon} />
								</ListItemIcon>
								<ListItemText primary={'Shop'} classes={{ primary: classes.text }} />
							</ListItem>
						</NavLink>
					</Box>
					<Divider
						style={{
							marginBottom: '15px',
							marginTop: '15px',
							backgroundColor: '#D0C50A',
							width: '90%',
							marginLeft: 'auto',
							marginRight: 'auto',
							height: '3px',
							borderRadius: '1.5px'
						}}
					/>

					{/* May be delaying this for future development */}
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
					<Box boxShadow={3} padding="5px">
						<NavLink to="/contact" exact>
							<ListItem button key={'Contact Us'} className={classes.type}>
								<ListItemIcon>
									<MailOutlineIcon className={classes.icon} />
								</ListItemIcon>
								<ListItemText primary={'Contact Us'} classes={{ primary: classes.text }} />
							</ListItem>
						</NavLink>
					</Box>
					<Divider
						style={{
							marginBottom: '15px',
							marginTop: '15px',
							backgroundColor: '#D0C50A',
							width: '90%',
							marginLeft: 'auto',
							marginRight: 'auto'
						}}
					/>
					<Box boxShadow={3} padding="5px">
						<NavLink to="/about" exact>
							<ListItem button key={'About Us'} className={classes.type}>
								<ListItemIcon>
									<BookmarkIcon className={classes.icon} />
								</ListItemIcon>
								<ListItemText primary={'About Us'} classes={{ primary: classes.text }} />
							</ListItem>
						</NavLink>
					</Box>
					<Divider style={{ marginBottom: '15px', marginTop: '15px' }} />
					<Box boxShadow={3} padding="5px">
						<Button style={{ width: '100%', height: '100%' }} onClick={logout}>
							<ListItem button key={'Log out'} className={classes.type}>
								<ListItemIcon>
									<PowerSettingsNew className={classes.icon} />
								</ListItemIcon>
								<ListItemText primary={'Logout'} classes={{ primary: classes.text }} />
							</ListItem>
						</Button>
					</Box>
				</Box>
			</List>
		</div>
	);

	return (
		<div>
			<Button onClick={toggleDrawer('left', true)}>
				<MenuIcon style={{ color: '#0C3658' }} />
			</Button>
			<Drawer classes={{ paper: classes.paper }} open={state.left} onClose={toggleDrawer('left', false)}>
				{sideList('left')}
			</Drawer>
		</div>
	);
}
