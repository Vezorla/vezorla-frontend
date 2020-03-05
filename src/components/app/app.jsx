import React, { useState } from 'react';
import Box from '@material-ui/core/Box';

import { Switch, Route, Redirect, useLocation } from 'react-router-dom';

import Header from '../common/header/header';
import Footer from '../common/footer/footer';
import NotFound from '../common/404/NotFound';
import LoginContainer from '../login/logic/LoginContainer';

import Customer from '../Customer/Cutomer';
import Client from '../Client/Client';

import AuthHOC from '../common/HOC/AuthHOC';
import About from "../staticPages/About";
import Contact from '../staticPages/Contact/view/Contact';

// Function will run everytime go to new path or first access the application
function usePageViews(setLineItems, currentLineItem) {
	let location = useLocation();
	React.useEffect(
		() => {
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

//-------App--------------
function App() {
	//-------state------
	const [ lineItems, setLineItems ] = useState(0);
	const [ auth, setAuth ] = useState('client');

	//increate Cart function
	const increaseCart = (value) => {
		setLineItems(Number(lineItems) + Number(value));
	};

	//set the get cart function up and run
	usePageViews(setLineItems, lineItems);

	return (
		<div className="App">
			<Header cart={lineItems} />
			<Box overflow="scroll" style={{ paddingBottom: '15vh' }}>
				<Switch>
					<Route path="/client" render={() => AuthHOC(Client, auth)()} />
					{/* <Route path="/admin" render={() => AuthHOC(Admin, auth)()} /> */}
					<Route path="/customer" render={() => <Customer increaseCart={increaseCart} />} />
					<Route path="/login" exact strict render={() => <LoginContainer setAuth={setAuth} />} />
					<Route path="/contact" exact strict component={Contact} />
					<Route path="/about" exact strict component={About}/>
					<Route path="/404" component={NotFound} />
					<Redirect to="/404" />
				</Switch>
			</Box>
			<Footer />
		</div>
	);
}

export default App;
