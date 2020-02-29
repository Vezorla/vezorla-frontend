import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import CartContainer from './cartPage/logic/CartContainer';
import CheckoutPage from './checkoutPage/CheckoutPage';

export default function Client() {
	return (
		<Switch>
			{/* <Route path={["/","/index"]} exact strict component={Home}/>  */}
			<Route path={[ '/client/cart' ]} exact strict component={CartContainer} />

			{/* <Route path="/findus" exact strict component={FindUs}/> */}
			{/* <Route path="/contact" exact strict component={Contact}/> */}
			{/* <Route path="/about" exact strict component={About}/> */}

			<Route path="/client/checkout" exact strict component={CheckoutPage} />

			<Redirect to="/404" />
		</Switch>
	);
}
