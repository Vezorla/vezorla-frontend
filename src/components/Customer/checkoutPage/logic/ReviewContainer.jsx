import React, { Component } from 'react';
import Review from '../view/Review';

/**
 * @file Cart Component
 * @author MinhL4m
 * @version 1.0
 */

const GET_URL = 'http://localhost:8080/api/customer/cart/review';

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
		this.setState({ stage: 'loading' });

		try {
			const response = await fetch(GET_URL, {
				method: 'GET',
				credentials: 'include',
				mode: 'cors',
				headers: {
					Accept: 'application/json',
					'Content-Type': 'application/json'
				}
			});

			if (response.status === 200) {
				const data = await response.json();
				if (data !== null) {
					this.setState({ list: data[0] });
					this.setState({ info: { ...data[1] } });
					this.setState({ stage: 'done' });
				}
			} else if (response.status > 400) {
				this.setState({ stage: 'error', list:[] });
				
				return null;
			}
		} catch (err) {
			this.setState({ stage: 'error', list:[] });
		
			return null;
		}
	};

	componentDidMount() {
		this.fetchData();
	}

	handleBack = () => {
		this.props.setStage(this.props.stage - 1);
	};

	handleNext = () => {
		this.props.setStage(this.props.stage + 1);
	};

	render() {
		return <Review {...this.state} handleNext={this.handleNext} handleBack={this.handleBack} />;
	}
}
