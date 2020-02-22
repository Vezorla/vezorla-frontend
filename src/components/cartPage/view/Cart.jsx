import React from 'react';
import LineItem from './LineItem';
import loadingHOC from '../../common/HOC/LoadingHOC';

function Cart(props) {
	
	const lineItemList = () => {
		return (
			<div>
				{props.list.map((lineItem) => (
					<LineItem
						key={lineItem.product.prodId}
						product={lineItem.product}
						quantity={lineItem.quantity}
						onDelete={props.onDelete}
						onChange={props.onChange}
					/>
				))}
			</div>
		);
	};

	const CartComponent = loadingHOC(lineItemList)(props);
	return CartComponent;
}
export default Cart;
