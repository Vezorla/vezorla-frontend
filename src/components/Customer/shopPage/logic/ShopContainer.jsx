import React, { Component } from 'react';
import DropDown from '../view/DropDown';
import Shop from '../view/Shop';
import { Grid } from '@material-ui/core';

/**
 * @file Shop Logic Component
 * @author MinhL4m
 * @version 1.0
 */

//TODO change this into valid label and value
const filterItem = [ { label: 'a', value: 'a' }, { label: 'b', value: 'b' } ];
const orderItem = [ { label: 'a', value: 'a' }, { label: 'b', value: 'b' } ];

const URL = 'http://localhost:8080/api/customer/inventory/products/all';

/**
 * Shop Logic class component
 */
class ShopContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			list: [],
			stage: '',
			filter: '',
			order: ''
		};
	}

	// -----event handler of filter and order. Use to fetch and set the value display--------
	handleChangeFilter = (event) => {
		this.setState({ filter: event.target.value });
		// this.fetchData('url'+event.target.value);
	};

	handleChangeOrder = (event) => {
		this.setState({ order: event.target.value });
		// this.fetchData('url'+event.target.value);
	};

	/**
	 * Handler for adding product to cart
	 */
	fetchData = async (url) => {
		this.setState({ stage: 'loading' });
		try {
			const response = await fetch(url);

			if (response.status === 200) {
				const data = await response.json();
				if (data !== null) {
					this.setState({ list: data });
					this.setState({ stage: 'done' });
				}
			} else if (response.status >= 400) {
				this.setState({ stage: 'error' });
			}
		} catch (err) {
			this.setState({ stage: 'error' });
		}
	};

	// ------fetch on load-------
	componentDidMount() {
		this.fetchData(URL);
	}

	/**
	 * @returns Shop component that Shop Logic wrap around Shop View
	 */
	render() {
		return (
			<div>
				<Grid className="shop--filter" container xs={12} justify="space-around">
					<Grid item>
						<DropDown
							label={'Filter'}
							selections={filterItem}
							value={this.state.filter}
							onChange={this.handleChangeFilter}
						/>
					</Grid>
					<Grid item>
						<DropDown
							label={'Order'}
							selections={orderItem}
							value={this.state.order}
							onChange={this.handleChangeOrder}
						/>
					</Grid>
				</Grid>

				<Shop list={this.state.list} stage={this.state.stage} />
			</div>
		);
	}
}

export default ShopContainer;
