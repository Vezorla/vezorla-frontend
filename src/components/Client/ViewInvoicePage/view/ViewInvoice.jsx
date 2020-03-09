import React from 'react';
import InvoiceDetail from '../../../common/Invoice_Purchase/InvoiceDetail';

/**
 * @file ViewInvoice View component 
 * @author MinhL4m
 * @version 1.0
 */

export default function ViewInvoice({ number, date, list, subtotal, shipping, tax, total_tax, total, discount }) {
	return (
		<div>
			<h1>Invoice Number - {number}</h1>
			<h2>{date}</h2>
			<InvoiceDetail
				list={list}
				subtotal={subtotal}
				shipping={shipping}
				tax={tax}
				total_tax={total_tax}
				total={total}
				discount={discount}
			/>
		</div>
	);
}
