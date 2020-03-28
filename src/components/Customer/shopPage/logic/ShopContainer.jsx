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
			stage: ''
		};
	}

	/**
	 * Handler for adding product to cart
	 */
	fetchData = async () => {
		this.setState({ stage: 'loading' });
		try {
			const response = await fetch(URL);

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
		this.fetchData();
	}

	/**
	 * @returns Shop component that Shop Logic wrap around Shop View
	 */
	render() {
		return (
			<div>
				<Shop list={this.state.list} stage={this.state.stage} />
			</div>
		);
	}
}

export default ShopContainer;
