import React from 'react';
import InvoiceDetail from '../../../common/Invoice_Purchase/InvoiceDetail';

/**
 * @file ViewInvoice View component 
 * @author MinhL4m
 * @version 1.0
 */

export default function ViewInvoice({ invoiceNum, date, list, subtotal, taxes, total, discount }) {
	return (
		<div>
			<h1>Invoice Number - {invoiceNum}</h1>
			<h2>{date}</h2>
			<InvoiceDetail list={list} subtotal={subtotal} taxes={taxes} total={total} discount={discount} />
		</div>
	);
}
