import React from 'react';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

/**
 * @file Invoice/ Purchase Order Component
 * @author MinhL4m
 * @version 1.0
 */

const Vendor = ({ vendor }) => {
	return (
		<div>
			<h2>Vendor</h2>
			<p>{vendor}</p>
		</div>
	);
};

const Email = ({ email }) => {
	return (
		<div>
			<h2>Email</h2>
			<p>{email}</p>
		</div>
	);
};

export default function InvoicePO({ title, number, vendor, email, total, date, url }) {
	return (
		<div>
			<h1>
				{title} - {number}
			</h1>
			{vendor !== null ? <Vendor vendor={vendor} /> : ''}
			{email !== null ? <Email email={email} /> : ''}
			<div>
				<h2>Date Placed</h2>
				<p>{date}</p>
			</div>
			<div>
				<h2>Purchase Total</h2>
				<p>{total}</p>
			</div>
			<Link to={url}>
				<Button variant="contained" size="large">
					View
				</Button>
			</Link>
		</div>
	);
}
