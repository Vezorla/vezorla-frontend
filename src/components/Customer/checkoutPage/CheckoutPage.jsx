import React, { Component } from 'react';
import Discount from './logic/Discount';
import Payment from './logic/Payment';
import ReviewContainer from './logic/ReviewContainer';
import ShippingInfo from './logic/ShippingInfoContainer';
import ProcessBar from '../../common/Stepper/ProcessBar';

/**
 * @file CheckPage Component
 * @author MinhL4m
 * @version 1.0
 */

export default class CheckoutPage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			stage: 0,
			cart: true
		};
		this.setStage = this.setStage.bind(this);
		this._switchCase = this._switchCase.bind(this);
	}
	steps = [ 'Shipping Information', 'Discount', 'Review & Pay' ];
	setStage(newStage) {
		this.setState({
			stage: newStage
		});
	}

	fetchCheckCart = async () => {
		try {
			const response = await fetch('url');
			if (response.status === 200) {
				const data = await response.json();
				this.setState({ cart: data });
			}
		} catch (err) {}
	};

	_switchCase(stageVal) {
		switch (stageVal) {
			case 1:
				return <Discount stage={this.state.stage} setStage={this.setStage} />;
			case 2:
				return <ReviewContainer stage={this.state.stage} setStage={this.setStage} />;
			default:
				return <ShippingInfo stage={this.state.stage} setStage={this.setStage} auth={this.props.auth} />;
		}
	}

	render() {
		return (
			<div>
				{this.state.cart ? (
					<div>
						{this._switchCase(this.state.stage)} <ProcessBar stage={this.state.stage} steps={this.steps} />
					</div>
				) : (
					<div>
						<h1>Your cart is empty please add item then check out</h1>
					</div>
				)}
			</div>
		);
	}
}
