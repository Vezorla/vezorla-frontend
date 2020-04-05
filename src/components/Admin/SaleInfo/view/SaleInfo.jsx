import React from 'react';
import { Typography } from '@material-ui/core';
import LoadingHOC from '../../../common/HOC/LoadingHOC';

/**
 * @author MinhL4m
 * @version 1.0
 */

function SaleInfoComponent({
	invoiceNum = '',
	date = new Date(),
	shippingCost,
	subtotal,
	discount,
	taxes,
	total,
	email,
	firstName,
	lastName,
	phoneNum,
	address,
	postalCode
}) {
	return (
		<div>
			<Typography variant="h3" component="h3">
				Invoice Number - {invoiceNum}
			</Typography>
			<Typography variant="h6" component="h6">
				Date: {date.toString()}
			</Typography>
			<Typography variant="h6" component="h6">
				Email: {email}
			</Typography>
			<Typography variant="h6" component="h6">
				First Name: {firstName}
			</Typography>
			<Typography variant="h6" component="h6">
				Last Name: {lastName}
			</Typography>
			<Typography variant="h6" component="h6">
				Address: {address}
			</Typography>
			<Typography variant="h6" component="h6">
				Postal Code: {postalCode}
			</Typography>
			<Typography variant="h6" component="h6">
				Phone Number: {phoneNum}
			</Typography>
			<Typography variant="h6" component="h6">
				Sub-Total: {subtotal}
			</Typography>
			<Typography variant="h6" component="h6">
				Discount: {discount}
			</Typography>
			<Typography variant="h6" component="h6">
				Tax: {taxes}
			</Typography>
			<Typography variant="h6" component="h6">
				Shipping Cost: {shippingCost}
			</Typography>
			<Typography variant="h6" component="h6">
				Total: {total}
			</Typography>
		</div>
	);
}

export default function SaleInfo(props) {
	return LoadingHOC(SaleInfoComponent)({ ...props });
}
