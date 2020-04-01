import React from 'react';
import LineItem from './LineItem';
import loadingHOC from '../../../common/HOC/LoadingHOC';
import { Typography } from '@material-ui/core';
/**
 * @file Cart View Component
 * @author MinhL4m
 * @version 1.0
 */

function Cart(props) {
	const lineItemList = () => {
		return (
			<div>
				{props.outStockList.length !== 0 ? (
					<div>
						<Typography variant="h4" component="h4">
							Out of Stock Item
						</Typography>
						{props.outStockList.map((lineItem) => (
							<div>
								<Typography variant="h6" component="h4">
									{lineItem.name} out of stock by {lineItem.by}
								</Typography>
							</div>
						))}
					</div>
				) : (
					''
				)}
				<div>
					<Typography variant="h4" component="h4">
						In Stock Item
					</Typography>
					{props.inStockList.length !== 0 ? (
						<div>
							{props.inStockList.map(
								(lineItem, index) =>
									lineItem.quantity > 0 ? (
										<LineItem
											key={lineItem.prodID}
											onDelete={props.onDelete}
											onChange={props.onChange}
											{...lineItem}
											img={props.imgs[index]}
											max={props.quantity[index]}
										/>
									) : (
										''
									)
							)}
						</div>
					) : (
						<Typography variant="h4" component="h4">
							Sorry for this inconvenience
						</Typography>
					)}
				</div>
			</div>
		);
	};

	const CartComponent = loadingHOC(lineItemList)({ ...props, message: 'Cannot get Cart' });
	return CartComponent;
}
export default Cart;
