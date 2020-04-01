import React from 'react';
import { Card, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

const URL = 'https://localhost:8080/api/admin/invoices';

export default function Sales({ invoices }) {
	return (
		<div>
			<h1>Sales</h1>
			{invoices.map((invoice) => (
				<Link to={`${URL}/${invoice.invoiceNum}`}>
					<Card
						key={invoice.invoiceNum}
						justifyContent="center"
						disableUnderline={true}
						style={{ border: '1px solid black', marginTop: '3em', paddingBottom: '10px', color: '#0C3658' }}
					>
						<h1>Invoice - {invoice.invoiceNum}</h1>
						<p>${invoice.email}</p>
						<div>
							<h2>Date Placed</h2>
							<p>{invoice.date}</p>
						</div>
						<div>
							<h2>Purchase Total</h2>
							<p>{invoice.total}</p>
						</div>
						<Button variant="contained" size="large">
							View
						</Button>
					</Card>
				</Link>
			))}
		</div>
	);
}
