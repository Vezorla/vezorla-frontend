import React, { Component } from 'react';
import LoadingHOC from '../../../common/HOC/LoadingHOC';
import ViewInvoice from '../view/ViewInvoice';

/**
 * @file ViewInvoice Logic component 
 * @author MinhL4m
 * @version 1.0
 */

const URL = 'url';

export default class ViewInvoiceContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			number: '',
			date: '',
			list: [],
			subtotal: '',
			shipping: '',
			discount: '',
			tax: '',
			total_tax: '',
			total: '',
			stage: ''
		};
	}

	fetchData = async () => {
		this.setState({ stage: 'loading' });
		try {
			const response = await fetch(`${URL}/${this.props.invoice}`);
			if (response.status === 200) {
				const data = await response.json();
				this.setState = { info: { ...data } };
				this.setState({ stage: 'done' });
				// need to catch 418 to redirect
			} else if (response.status >= 400) {
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
		return LoadingHOC(ViewInvoice)(this.state);
	}
}
