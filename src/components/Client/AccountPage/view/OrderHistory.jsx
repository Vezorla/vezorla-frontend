import React from 'react';
import InvoicePO from '../../../common/Invoice_Purchase/InvoicePO';
import LoadingHOC from '../../../common/HOC/LoadingHOC';

/**
 * @file Order History view Component 
 * @author MinhL4m
 * @version 1.0
 */

const OrderHistoryComponent = ({ list }) => {
	return (
		<div>
			{list !== null && list.lengt > 0 ? (
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
			) : (
				<h1>There are no current order history</h1>
			)}
		</div>
	);
};

const OrderHistory = (props) => {
	return LoadingHOC(OrderHistoryComponent)({ ...props, message: 'something went wrong with loading order history' });
};

export default OrderHistory;
