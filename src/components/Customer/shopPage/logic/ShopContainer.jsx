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
		this.setFilter = this.setFilter.bind(this);
		this.setOrder = this.setOrder.bind(this);
		this.setList = this.setList.bind(this);
		this.setStage = this.setStage.bind(this);
		this.fetchData = this.fetchData.bind(this);
	}

	//-------Setter for state-----
	setFilter(filterVal) {
		this.setState({
			filter: filterVal
		});
	}
	setOrder(orderVal) {
		this.setState({
			order: orderVal
		});
	}
	setList(listVal) {
		this.setState({
			list: listVal
		});
	}
	setStage(stageVal) {
		this.setState({
			stage: stageVal
		});
	}

	// -----event handler of filter and order. Use to fetch and set the value display--------
	handleChangeFilter = (event) => {
		this.setFilter(event.target.value);
		// this.fetchData('url'+event.target.value);
	};

	handleChangeOrder = (event) => {
		this.setOrder(event.target.value);
		// this.fetchData('url'+event.target.value);
	};

	/**
	 * Handler for adding product to cart
	 */
	fetchData = async (url) => {
		this.setStage('loading');
		try {
			const response = await fetch(url);

			if (response.status === 200) {
				const data = await response.json();
				if (data !== null) {
					this.setList(data);
					this.setStage('done');
				}
			} else if (response.status >= 400) {
				this.setStage('error');
			}
		} catch (err) {
			this.setStage('error');
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
