import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';
import LoadingHOC from '../../../common/HOC/LoadingHOC';

const OrderCard = ({ clientId, date, total }) => {
	return (
		<div>
			<h1>Client ID - {clientId}</h1>
			<h2>Date Placed</h2>
			<p>{date}</p>
			<h2>Order Total</h2>
			<p>{total}</p>
			<Link to={`url${clientId}`}>
				<Button variant="contained">View</Button>
			</Link>
		</div>
	);
};

function PendingOrderComponent({ list }) {
	return <div>{list.map((order) => <OrderCard {...order} />)}</div>;
}
const PendingOrder = (props) => {
	return LoadingHOC(PendingOrderComponent)({
		...props,
		message: 'something went wrong with loading Pending Order list'
	});
};
export default PendingOrder;
