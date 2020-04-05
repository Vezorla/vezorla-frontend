import React, { Component } from 'react';
import SaleInfo from '../view/SaleInfo';

/**
 * @author MinhL4m
 * @version 1.0
 */

const URL = 'http://localhost:8080/api/admin/orders';

export default class SaleInfoContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			invoiceNum: '',
			date: new Date(),
			pickup: true,
			shipped: false,
			shippingCost: '',
			subtotal: '',
			discount: '',
			taxes: '',
			total: '',
			email: '',
			firstName: '',
			lastName: '',
			phoneNum: '',
			address: '',
			postalCode: '',
			stage: ''
		};
	}

	fetchData = async () => {
		this.setState({ stage: 'loading' });
		try {
			const response = await fetch(`${URL}/${this.props.saleId}`, {
				method: 'GET',
				credentials: 'include',
				mode: 'cors'
			});
			if (response.status === 200) {
				const data = await response.json();
				this.setState({ ...data, stage: 'done' });
			} else if (response.status >= 400) {
				this.setState({ stage: 'error', message: 'Error has occured! Please try again later.' });
			}
		} catch (err) {
			this.setState({ stage: 'error', message: 'Error has occured! Please try again later.' });
		}
	};

	componentDidMount() {
		this.fetchData();
	}

	render() {
		return <SaleInfo {...this.state} />;
	}
}
