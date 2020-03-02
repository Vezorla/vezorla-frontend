import React from 'react';
import LineItem from './LineItem';
import loadingHOC from '../../../common/HOC/LoadingHOC';

/**
 * @file Cart View Component
 * @author MinhL4m
 * @version 1.0
 */


function Cart(props) {
	const lineItemList = () => {
		return (
			<div>
				{props.list.map((lineItem) => (
					<LineItem key={lineItem.prodId} onDelete={props.onDelete} onChange={props.onChange} {...lineItem} />
				))}
			</div>
		);
	};

	const subTotal = () => {
		var total = 0;
		props.list.map((lineItem) => {
			total += lineItem.price * lineItem.quantity;
		});
		return total;
	};

	const CartComponent = loadingHOC(lineItemList)(props);
	return CartComponent;
}
export default Cart;
