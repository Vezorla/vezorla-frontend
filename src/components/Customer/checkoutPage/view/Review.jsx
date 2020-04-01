import React from 'react';
import ProcessButtons from '../../../common/Stepper/ProcessButtons';
import LoadingHOC from '../../../common/HOC/LoadingHOC';
import Payment from '../logic/Payment';
import { Typography } from '@material-ui/core';
/**
 * @file Review view Component
 * @author MinhL4m
 * @version 1.0
 */

const ReviewComponent = ({ list, info, handleBack, setDone, setError, setLoading }) => {
	return (
		<div>
			<tabel>
				<tr>
					<th>
						<Typography variant="h5" component="h6">
							Name
						</Typography>
					</th>
					<th>
						<Typography variant="h5" component="h6">
							Quantity
						</Typography>
					</th>
					<th>
						<Typography variant="h5" component="h6">
							Price
						</Typography>
					</th>
					<th>
						<Typography variant="h5" component="h6">
							Extended Price
						</Typography>
					</th>
				</tr>
				{list.map((lineItem) => (
					<tr>
						<td>
							<Typography variant="h6" component="h6">
								{lineItem.name}
							</Typography>
						</td>
						<td>
							<Typography variant="h6" component="h6">
								{lineItem.quantity}
							</Typography>
						</td>
						<td>
							<Typography variant="h6" component="h6">
								{lineItem.price}
							</Typography>
						</td>
						<td>
							<Typography variant="h6" component="h6">
								{lineItem.extendedPrice}
							</Typography>
						</td>
					</tr>
				))}
			</tabel>
			<div>
				<Typography variant="h6" component="h5">
					Subtotal: ${info.subtotal}
				</Typography>
				<Typography variant="h6" component="h5">
					Discount: ${info.discount}
				</Typography>
				<Typography variant="h6" component="h5">
					Discounted Subtotal: ${info.discounted_subtotal}
				</Typography>
				<Typography variant="h6" component="h5">
					Tax: ${info.taxes}
				</Typography>
				<Typography variant="h6" component="h5">
					Shipping: ${info.shipping}
				</Typography>
				<Typography variant="h6" component="h5">
					Total: ${info.Total}
				</Typography>
			</div>
			<div />
			<ProcessButtons handleBack={handleBack} complete={true} hasNext={true} />
			<div>
				<Payment total={info.Total} setDone={setDone} setError={setError} setLoading={setLoading} />
			</div>
		</div>
	);
};

export default function Review({ list, info, setDone, setError, handleBack, stage, setLoading }) {
	return LoadingHOC(ReviewComponent)({
		list,
		info,
		handleBack,
		stage,
		setDone,
		setError,
		message: 'Something wrong I already feel it',
		setLoading
	});
}
