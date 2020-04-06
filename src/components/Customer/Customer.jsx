import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import ShopContainer from './shopPage/logic/ShopContainer';
import ProductContainer from './productPage/logic/ProductContainer';
import RegisterContainer from './registerPage/logic/RegisterContainer';
import CartContainer from './cartPage/logic/CartContainer';
import CheckoutPage from './checkoutPage/CheckoutPage';
import ContactContainer from "./Contact/Contact-container";
import About from "./About/About";

/**
 * @file Routing Component for Customer features
 * @author MinhL4m
 * @version 1.0
 */

/**
 * Return Switch component contains all route for customer 
 * @param {Function} increaseCart - function use to increase line item of header component. line item is state of App component
 */
function Customer({ increaseCart, auth }) {
	return (
		<Switch>
			<Route path="/customer/shop" exact strict component={ShopContainer} />
			{/* TODO make this register hidden for client */}
			<Route path="/customer/register" exact strict component={RegisterContainer} />
			<Route
				path="/customer/product/:productid"
				exact
				strict
				render={({ match }) => (
					<ProductContainer prodId={match.params.productid} addCartHandler={increaseCart} />
				)}
			/>
			<Route
				path="/customer/cart"
				exact
				strict
				key="cartPath"
				render={() => <CartContainer key="cart" changeCartHandler={increaseCart} />}
			/>
			<Route path="/customer/checkout" exact strict render={() => <CheckoutPage auth={auth} />} />
			<Route path="/customer/contact" exact strict component={ContactContainer}/>
			<Route path="/customer/about" exact strict component={About}/>
			<Redirect to="/404" />
		</Switch>
	);
}


export default Customer
