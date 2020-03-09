import React from 'react';

export default function InvoiceDetail({ list, subtotal, shipping, tax, total_tax, total }) {
	const ItemList = list.map((item) => (
		<tr>
			<td>{item.description}</td>
			<td>{item.quantity}</td>
			<td>{item.price}</td>
			<td>{item.total}</td>
		</tr>
	));

	return (
		<div>
			<table>
				<tr>
					<th>Description</th>
					<th>QTy</th>
					<th>Unit Price</th>
					<th>Total</th>
				</tr>
				<ItemList />
			</table>
			<div>
				<div>
					<p>SUBTOTAL</p>
					<p>{subtotal}</p>
				</div>
				<div>
					<p>SHIPPING</p>
					<p>{shipping}</p>
				</div>
				<div>
					<p>TAX RATE</p>
					<p>{tax}</p>
				</div>
				<div>
					<p>TOTAL TAX</p>
					<p>{total_tax}</p>
				</div>
				<div>
					<p>INVOICE TOTAL</p>
					<p>{total}</p>
				</div>
			</div>
		</div>
	);
}
