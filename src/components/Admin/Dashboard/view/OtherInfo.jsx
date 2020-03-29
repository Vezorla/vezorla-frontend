import React from 'react';
import { Link } from 'react-router-dom';

/**
 * @file Other Info View Componenet 
 * @author MinhL4m
 * @version 1.0
 */

export default function NewClient({ newClient, highSell, lowSell, lowStock, pendingOrder }) {
	return (
		<div>
			<div>
				<Link to="/admin/clients">
					<p>{newClient}</p>
					<p>New Clients</p>
				</Link>
			</div>
			<div>
				<h2>Product Information</h2>
				<p>Number High Sellers {highSell}</p>
				<p>Number Low Sellers {lowSell}</p>
				<p>Products Low on Stock {lowStock}</p>
			</div>
			<div>
				<Link to="/admin/sales">
					<p>{pendingOrder} Retail Orders Pending</p>
				</Link>
			</div>
		</div>
	);
}
