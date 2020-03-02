import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import ShopContainer from './shopPage/logic/ShopContainer';
import ProductContainer from './productPage/logic/ProductContainer';
import RegisterContainer from './registerPage/logic/RegisterContainer';
import CartContainer from './cartPage/logic/CartContainer';
import CheckoutPage from './checkoutPage/CheckoutPage';

export default function Cutomer({ increaseCart }) {
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
			<Route path="/customer/cart" exact strict component={CartContainer} />
			<Route path="/customer/checkout" exact strict component={CheckoutPage} />
            <Redirect to="/404" />
		</Switch>
	);
}
