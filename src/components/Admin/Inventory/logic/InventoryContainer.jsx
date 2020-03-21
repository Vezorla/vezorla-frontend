import React, { Component } from 'react';
import Inventory from '../view/Inventory';

export default class InventoryContainer extends Component {
	constructor() {
		super();
		this.state = {
			filter: '',
			list: [],
			stage: '',
			message: ''
		};
	}

	onFilterChange = (e) => {
		this.setState({
			filter: e.target.value
		});
	};

	fetchData = async () => {
		this.setState({ stage: 'loading' });
		try {
			const response = await fetch('url');
			if (response.status === 200) {
				const data = await response.json();
				if (data !== null && data.length > 0) {
					this.setState({ list: data, stage: 'done' });
				}
			} else {
			}
		} catch (err) {}
	};

	render() {
		return <Inventory {...this.state} onFilterChange={this.onFilterChange} />;
	}
}
