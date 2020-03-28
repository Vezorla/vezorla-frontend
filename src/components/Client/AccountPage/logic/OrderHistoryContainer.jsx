import React, { Component } from 'react';
import OrderHistory from '../view/OrderHistory';
/**
 * @file Order View logic Component 
 * @author MinhL4m
 * @version 1.0
 */
const URL = 'http://localhost:8080/api/client/order_history';

export default class OrderHistoryContainer extends Component {
	constructor() {
		super();
		this.state = {
			list: [],
			stage: ''
		};
	}

	fetchData = async () => {
		this.setState({ stage: 'loading' });
		try {
			const response = await fetch(URL);
			if (response.status === 200) {
				const data = await response.json();
				if (data !== null && data.length !== 0 && data !== undefined) {
					this.setState({ list: [...data.invoices] });
					this.setState({ stage: 'done' });
				}
			} else if (response.state >= 400) {
				this.setState({ stage: 'error' });
			}
		} catch (err) {
			this.setState({ stage: 'error' });
		}
	};

	componentDidMount() {
		// this.fetchData();
	}

	render() {
		return <OrderHistory {...this.state} />;
	}
}
