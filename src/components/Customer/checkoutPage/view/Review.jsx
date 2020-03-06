import React from 'react';
import ProcessButtons from '../../../common/Stepper/ProcessButtons';
import LoadingHOC from '../../../common/HOC/LoadingHOC';

/**
 * @file Review view Component
 * @author MinhL4m
 * @version 1.0
 */

const ReviewComponent = ({ list, info, handleBack, handleNext }) => {
	return (
		<div>
			<tabel>
				<tr>
					<th>Name</th>
					<th>Quantity</th>
					<th>Price</th>
					<th>Extended Price</th>
				</tr>
				{list.map((lineItem) => (
					<tr>
						<td>{lineItem.name}</td>
						<td>{lineItem.quantity}</td>
						<td>{lineItem.price}</td>
						<td>{lineItem.extendedPrice}</td>
					</tr>
				))}
			</tabel>
			<div>
				<p>Subtotal: {info.subtotal}</p>
				<p>Discount: {info.discount}</p>
				<p>Discounted Subtotal: {info.discounted_subtotal}</p>
				<p>Tax: {info.taxes}</p>
				<p>Shipping: {info.shipping}</p>
				<p>Total: {info.total}</p>
			</div>
			<ProcessButtons handleBack={handleBack} handleNext={handleNext} complete={true} hasNext={true} />
		</div>
	);
};

export default function Review({ list, info, handleBack, handleNext, stage }) {
	return LoadingHOC(ReviewComponent)({
		list,
		info,
		handleBack,
		handleNext,
		stage,
		message: 'Something wrong I already feel it'
	});
}
