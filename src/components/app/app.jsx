import React, { useState } from 'react';
import Box from '@material-ui/core/Box';

import { Switch, Route, Redirect, useLocation } from 'react-router-dom';

import Header from '../common/header/header';
import Footer from '../common/footer/footer';
import NotFound from '../common/404/NotFound';
import LoginContainer from '../login/logic/LoginContainer';
import RegisterContainer from '../Customer/registerPage/logic/RegisterContainer';
import ForgotPassContainer from '../Client/ForgotPassPage/logic/ForgotPassContainer';

import Customer from '../Customer/Cutomer';
import Client from '../Client/Client';
import Admin from '../Admin/Admin';

import ClientAuthHOC from '../common/HOC/ClientAuthHOC';
import AdminAuthHOC from '../common/HOC/AdminAuthHOC';
import CustomerAuthHOC from '../common/HOC/CustomerAuthHOC';

import About from '../staticPages/About';
import Contact from '../staticPages/Contact/view/Contact';

import Testing from '../test/Testing';

// Function will run everytime go to new path or first access the application
function usePageViews(setLineItems, setAuth, setDone) {
	let location = useLocation();
	React.useEffect(
		() => {
			fetchAuth(setAuth, setDone);
			fetchCartLineItems(setLineItems);
		},
		[ location ]
	);
}

// Function will fetch for number of item in cart
const fetchCartLineItems = async (setLineItems) => {
	let data = await fetch(`http://localhost:8080/api/customer/cart/get`, {
		method: 'GET',
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json'
		},
		credentials: 'include'
	})
		.then((res) => {
			return res.json();
		})
		.catch((err) => {
			return null;
		});

	if (data !== null) {
		setLineItems(data);
	}
};

const fetchAuth = async (setAuth, setDone) => {
	try {
		const response = await fetch('http://localhost:8080/api/auth/checkRole', {
			method: 'GET',
			credentials: 'include',
			mode: 'cors'
		});
		if (response.status === 200) {
			const data = await response.json();
			if (data.admin === true) {
				setAuth('admin');
			} else {
				setAuth('client');
			}
		} else if (response.status >= 400) {
			setAuth('customer');
		}
	} catch (err) {
		setAuth('customer');
	}
	setDone(true);
};

//-------App--------------
function App() {
	//-------state------
	const [ lineItems, setLineItems ] = useState(0);
	const [ auth, setAuth ] = useState('customer');
	const [ done, setDone ] = useState(false);

	const authFunc = {
		setAuth: setAuth.bind(App)
	};

	//increate Cart function
	const increaseCart = () => {
		console.log('a');
		fetchCartLineItems(setLineItems);
	};

	usePageViews(setLineItems, setAuth, setDone);

	return (
		<div className="App">
			{/* <Header cart={lineItems} auth={auth} /> */}
			<Box overflow="scroll" style={{ paddingBottom: '15vh' }}>
				<Switch>
					<Route path="/" exact strict component={Testing} />

					<Route path="/client" render={() => ClientAuthHOC(Client, auth)({ done: done })} />
					<Route path="/admin" render={() => AdminAuthHOC(Admin, auth)({ done: done })} />
					<Route path="/customer" render={() => <Customer increaseCart={increaseCart} auth={auth} />} />
					<Route
						path="/login"
						exact
						strict
						render={() => CustomerAuthHOC(LoginContainer, auth)({ setAuth: authFunc.setAuth, done: done })}
					/>
					<Route
						path="/register"
						exact
						strict
						render={() => CustomerAuthHOC(RegisterContainer, auth)({ done: done })}
					/>
					<Route
						path="/forgot"
						exact
						strict
						render={() => CustomerAuthHOC(ForgotPassContainer, auth)({ done: done })}
					/>
					<Route path="/contact" exact strict component={Contact} />
					<Route path="/about" exact strict component={About} />
					<Route path="/404" component={NotFound} />
					<Redirect to="/404" />
				</Switch>
			</Box>
			<Footer />
		</div>
	);
}

export default App;
