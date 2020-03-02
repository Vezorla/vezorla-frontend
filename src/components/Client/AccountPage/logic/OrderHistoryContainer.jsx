import React, { Component } from 'react';
import LoadingHOC from '../../../common/HOC/LoadingHOC';
import OrderHistory from '../view/OrderHistory';
/**
 * @file Order View logic Component 
 * @author MinhL4m
 * @version 1.0
 */

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
			const response = await fetch('url');
			if (response.status === 200) {
				const data = await response.json();
				if (data !== null && data.length !== 0 && data !== undefined) {
					this.setState({ list: data });
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
		this.fetchData();
	}

	render() {
		return LoadingHOC(OrderHistory)(this.state);
	}
}
