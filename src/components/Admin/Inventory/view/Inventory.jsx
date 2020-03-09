import React from 'react';
import { Button, DropDown } from '@material-ui/core';
import { Link } from 'react-router-dom';
import LoadingHOC from '../../../common/HOC/LoadingHOC';

const filterItem = [ { label: 'a', value: 'a' }, { label: 'b', value: 'b' } ];

const Card = ({ img, prodId, quantity, profit, warehouse }) => {
	return (
		<div>
			<div>
				<div>
					<p>Quantity</p>
					<p>{quantity}</p>
				</div>
				<div>
					<p>Profit</p>
					<p>${profit}</p>
				</div>
				<div>
					<p>Warehoust</p>
					<p>{warehouse}</p>
				</div>
				<Link to={`/admin/inventory/${prodId}`}>
					<Button variant="contained" size="small">
						View
					</Button>
				</Link>
			</div>
			<div>
				<img src={img} />
			</div>
		</div>
	);
};

const InventoryComponent = ({ list, filter, onFilterChange }) => {
	return (
		<div>
			<div>
				<DropDown label={'Filter'} selections={filterItem} value={filter} onChange={onFilterChange} />
			</div>
			<div>
				<Link to="/admin/inventory/create">
					<Button variant="contained" size="large">
						Create Product
					</Button>
				</Link>
			</div>
			{list.map((item) => <Card {...item} />)}
		</div>
	);
};

const Inventory = (props) => {
	return LoadingHOC(InventoryComponent)(props);
};

export default Inventory;
