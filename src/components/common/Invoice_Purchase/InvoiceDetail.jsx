import React from 'react';

export default function InvoiceDetail({ list, subtotal, taxes, total, discount }) {
	return (
		<div>
			<table>
				<tr>
					<th>Name</th>
					<th>QTy</th>
					<th>Price</th>
					<th>Total</th>
				</tr>
				{list.map((item) => (
					<tr>
						<td>{item.name}</td>
						<td>{item.qty}</td>
						<td>{item.price}</td>
						<td>{item.extendedPrice}</td>
					</tr>
				))}
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
