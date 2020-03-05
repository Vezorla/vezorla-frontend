import React, { Component } from 'react';
import Review from '../view/Review';

/**
 * @file Cart Component
 * @author MinhL4m
 * @version 1.0
 */

export default class CartContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			list: [],
			info: {
				subtotal: '',
				discount: '',
				discounted_subtotal: '',
				taxes: '',
				shipping: '',
				Total: ''
			},
			stage: ''
		};
	}

	fetchData = async () => {
		this.setStage('loading');

		try {
			const response = await fetch(`http://localhost:8080/api/customer/cart/view`, {
				method: 'GET',
				credentials: 'include',
				headers: {
					Accept: 'application/json',
					'Content-Type': 'application/json'
				}
			});

			if (response.status === 200) {
				const data = await response.json();
				if (data !== null) {
					this.setStatge({ list: data[0] });
					this.setState({ info: { ...data[1] } });
					this.setStage('done');
				}
			} else if (response.status > 400) {
				this.setStage('error');
				this.setList('');
				return null;
			}
		} catch (err) {
			this.setStage('error');
			this.setList('');
			return null;
		}
	};

	componentDidMount() {
		this.fetchData();
	}

	handleBack = async () => {
		const response = await fetch('url', {
			method: 'PUT',
			credentials: 'include',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json'
			}
		});
		this.props.setStage(this.props.stage - 1);
	};

	handleNext = () => {
		this.props.setStage(this.props.stage + 1);
	};

	render() {
		return <Review {...this.state} handleNext={this.handleNext} handleBack={this.handleBack} />;
	}
}
