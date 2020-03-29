import React from 'react';
import { Button, Card } from '@material-ui/core';
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

export default function InvoicePO({ title, invoiceNum, vendor = '', email = '', total, date, url }) {
	return (
		<Link to={url}>
			<Card
				key={invoiceNum}
				justifyContent="center"
				disableUnderline={true}
				style={{ border: '1px solid black', marginTop: '3em', paddingBottom: '10px', color: '#0C3658' }}
			>
				<h1>
					{title} - {invoiceNum}
				</h1>
				{vendor !== '' ? <Vendor vendor={vendor} /> : ''}
				{email !== '' ? <Email email={email} /> : ''}
				<div>
					<h2>Date Placed</h2>
					<p>{date}</p>
				</div>
				<div>
					<h2>Purchase Total</h2>
					<p>{total}</p>
				</div>
				<Button variant="contained" size="large">
					View
				</Button>
			</Card>
		</Link>
	);
}
