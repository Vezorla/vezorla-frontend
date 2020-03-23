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
				{props.outStockList.length === 0 ? (
					<div>
						<h1>Out of Stock Item</h1>
						{props.outStockList.map((lineItem) => (
							<div>
								<p>lineItem.name</p>
							</div>
						))}
					</div>
				) : (
					''
				)}
				<div>
					<h1>In Stock Item</h1>
					{props.inStockList.map((lineItem) => (
						<LineItem
							key={lineItem.prodId}
							onDelete={props.onDelete}
							onChange={props.onChange}
							{...lineItem}
						/>
					))}
				</div>
			</div>
		);
	};

	const CartComponent = loadingHOC(lineItemList)({ ...props, message: 'Cannot get Cart' });
	return CartComponent;
}
export default Cart;
