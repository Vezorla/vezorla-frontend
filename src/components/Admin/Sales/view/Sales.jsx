import React from 'react';
import { Card, Button, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';

/**
 * @author MinhL4m
 * @version 1.0
 */

const URL = '/admin/sales';

export default function Sales({ list = [] }) {
	return (
		<div>
			<Typography variant="h2" component="h2">
				Sales
			</Typography>
			{list.map((invoice) => (
				<Link to={`${URL}/${invoice.invoiceNum}`}>
					<Card
						key={invoice.invoiceNum}
						justifyContent="center"
						disableUnderline={true}
						style={{ border: '1px solid black', marginTop: '3em', paddingBottom: '10px', color: '#0C3658' }}
					>
						<Typography variant="h4" component="h4">
							Invoice - {invoice.invoiceNum}
						</Typography>

						<Typography variant="h5" component="h5">
							Email: {invoice.email}
						</Typography>
						<Typography variant="h5" component="h5">
							Date Placed: {invoice.date}
						</Typography>
						<Typography variant="h5" component="h5">
							Total: {invoice.total}
						</Typography>

						<Button variant="contained" size="large">
							View
						</Button>
					</Card>
				</Link>
			))}
		</div>
	);
}
