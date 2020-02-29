import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import ShopContainer from './shopPage/logic/ShopContainer';
import ProductContainer from './productPage/logic/ProductContainer';
import RegisterContainer from './Register/logic/RegisterContainer';

export default function Cutomer({ increaseCart }) {
	return (
		<Switch>
			<Route path="/customer/shop" exact strict component={ShopContainer} />
			<Route path="/customer/register" exact strict component={RegisterContainer} />
			<Route
				path="/customer/product/:productid"
				exact
				strict
				render={({ match }) => (
					<ProductContainer prodId={match.params.productid} addCartHandler={increaseCart} />
				)}
			/>
            <Redirect to="/404" />
		</Switch>
	);
}
