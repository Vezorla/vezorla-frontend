import React from 'react';

export default function WeekSale({ orderNum, orderVal, productSold, percentCompare }) {
	return (
		<div>
			<div>
				<span>Number of Orders: {orderNum}</span>
				<span>Number of Orders: {orderVal}</span>
				<span>Number of Orders: {productSold}</span>
			</div>
			<div>
				<p>{percentCompare}</p>
				<p>Over Week Prior</p>
			</div>
		</div>
	);
}
