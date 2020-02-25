import React, { useState } from 'react';
import Box from '@material-ui/core/Box';

import img1 from '../../assets/images/img-1.JPG';
import img2 from '../../assets/images/img-2.JPG';
import img3 from '../../assets/images/img-3.JPG';

import { Switch, Route, Redirect, useLocation } from 'react-router-dom';
import ShopContainer from '../shopPage/logic/ShopContainer';
import ProductContainer from '../productPage/logic/ProductContainer';
import Header from '../common/header/header';
import Footer from '../common/footer/footer';
import NotFound from '../404/NotFound';
import CartContainer from '../cartPage/logic/CartContainer';
import CheckoutPage from '../checkoutPage/CheckoutPage';


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

	//increate Cart function
	const increaseCart = (value) => {
		setLineItems(Number(lineItems) + Number(value));
	};

	//set the get cart function up and run
	usePageViews(setLineItems, lineItems);

	return (
		<div className="App">
			{/* <Header cart={lineItems} /> */}
			<Box overflow="scroll" style={{ paddingBottom: '15vh' }}>
				<Switch>
					{/* <Route path={["/","/index"]} exact strict component={Home}/>  */}
					<Route path={[ '/cart', '/cart/:userid' ]} exact strict component={CartContainer} />
					<Route path="/shop" exact strict component={ShopContainer} />
					{/* <Route path="/findus" exact strict component={FindUs}/> */}
					{/* <Route path="/contact" exact strict component={Contact}/> */}
					{/* <Route path="/about" exact strict component={About}/> */}
					{/* <Route path="/login" exact strict component={Login}/> */}
					<Route path='/checkout' exact strict component={CheckoutPage}/>
					<Route
						path="/product/:productid"
						exact
						strict
						render={({ match }) => (
							<ProductContainer prodId={match.params.productid} addCartHandler={increaseCart} />
						)}
					/>

					<Route path="/404" component={NotFound} />
					<Redirect to="/404" />
				</Switch>
			</Box>
			<Footer />
		</div>
	);
}

export default App;