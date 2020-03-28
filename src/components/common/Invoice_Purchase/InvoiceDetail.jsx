import React from 'react';

export default function InvoiceDetail({ list, subtotal, taxes, total, discount }) {
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
					<p>DISCOUNT</p>
					<p>{discount}</p>
				</div>
				<div>
					<p>TAX RATE</p>
					<p>{taxes}</p>
				</div>
				<div>
					<p>INVOICE TOTAL</p>
					<p>{total}</p>
				</div>
			</div>
		</div>
	);
}
