import React, { Component } from 'react';
import Inventory from '../view/Inventory';

const URL = 'http://localhost:8080/api/admin/inventory/all';

/**
 * @file Inventory Componenet 
 * @author MinhL4m
 * @version 1.0
 */

export default class InventoryContainer extends Component {
	constructor() {
		super();
		this.state = {
			list: [],
			stage: '',
			message: ''
		};
	}

	fetchData = async () => {
		this.setState({ stage: 'loading' });
		try {
			const response = await fetch(URL);
			if (response.status === 200) {
				const data = await response.json();
				this.setState({ list: [ ...data.products ], stage: 'done' });
			} else {
				this.setState({ stage: 'done' });
			}
		} catch (err) {
			this.setState({ stage: 'done' });
		}
	};

	componentDidMount() {
		this.fetchData();
	}

	render() {
		return <Inventory {...this.state} />;
		// return <div />;
	}
}
