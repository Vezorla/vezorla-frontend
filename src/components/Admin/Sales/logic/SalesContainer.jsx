import React, { Component } from 'react';
import Sales from '../view/Sales';
import LoadingHOC from '../../../common/HOC/LoadingHOC';

/**
 * @author MinhL4m
 * @version 1.0
 */

const URL = 'http://localhost:8080/api/admin/order_history';

export default class SalesContainer extends Component {
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
			let response = await fetch(URL, {
				method: 'GET',
				mode: 'cors',
				credentials: 'include'
			});

			if (response.status === 200) {
				const data = await response.json();
				this.setState({ list: [ ...data.invoices ], stage: 'done' });
			} else {
				this.setState({ stage: 'error', message: 'something wrong' });
			}
		} catch (err) {
			this.setState({ stage: 'error', message: 'Something wrong' });
		}
	};

	componentDidMount() {
		this.fetchData();
	}

	render() {
		return LoadingHOC(Sales)(this.state);
	}
}
