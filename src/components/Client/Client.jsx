import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import CartContainer from './cartPage/logic/CartContainer';
import CheckoutPage from './checkoutPage/CheckoutPage';

export default function Client() {
	return (
		<Switch>
			
			<Route path="/client/cart" exact strict component={CartContainer} />
			<Route path="/client/checkout" exact strict component={CheckoutPage} />

			<Redirect to="/404" />
		</Switch>
	);
}
