import React from 'react';
import { makeStyles, AppBar, Toolbar, Typography, Badge, createMuiTheme, ThemeProvider } from '@material-ui/core';

import IconButton from '@material-ui/core/IconButton';
import ShoppingCart from '@material-ui/icons/ShoppingCart';
import AdminNavBar from './adminOverlay';
import CustomerNavBar from './customerOverlay';
import ClientNavBar from './clientOverlay';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1
	},
	appBar: {
		backgroundColor: '#D0C50A'
	},
	menuButton: {
		marginRight: theme.spacing(2)
	},
	title: {
		flexGrow: 1
	}
}));

const theme = createMuiTheme({
	palette: {
		primary: {
			main: '#fff'
		}
	}
});

function NavBar({ auth = 'customer' }) {
	switch (auth) {
		case 'admin':
			return <AdminNavBar />;
		case 'client':
			return <ClientNavBar />;
		default:
			return <CustomerNavBar />;
	}
}

export default function ButtonAppBar(props) {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<AppBar className={classes.appBar} position={"fixed"}>
				<Toolbar>
					<IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
						<NavBar auth={props.auth} />
					</IconButton>
					<Typography variant="h6" className={classes.title}>
						Vezorla
					</Typography>
					<Link to="/customer/cart">
						<IconButton color="#D0C50A">
							{/*<ThemeProvider theme={theme}>*/}
								<Badge badgeContent={props.cart} color="primary">
									<ShoppingCart style={{ color: '#0C3658' }} />
								</Badge>
							{/*</ThemeProvider>*/}
						</IconButton>
					</Link>
				</Toolbar>
			</AppBar>
			{/* Second static app bar as a shim */}
			<AppBar position={"fixed"} />
			<Toolbar />
		</div>
	);
}
