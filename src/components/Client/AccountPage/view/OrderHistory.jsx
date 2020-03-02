import React from 'react';
import InvoicePO from '../../../common/Invoice_Purchase/InvoicePO';

/**
 * @file Order History view Component 
 * @author MinhL4m
 * @version 1.0
 */

export default function OrderHistory({ list }) {
	return (
		<div>
			{list.map((invoice) => (
				<InvoicePO
					title="Invoice Number"
					number={invoice.id}
					total={invoice.total}
					data={invoice.total}
					url={`url/${invoice.id}`}
				/>
			))}
		</div>
	);
}
