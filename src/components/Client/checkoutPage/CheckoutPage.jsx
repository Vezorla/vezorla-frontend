import React, { Component } from 'react';
import Discount from './Discount';
import Payment from './Payment';
import CartContainer from './CartContainer'
import ShippingInfo from './ShippingInfo';
import ProcessBar from '../../common/Stepper/ProcessBar';

export default class CheckoutPage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			stage: 0
		};
		this.setStage = this.setStage.bind(this);
		this._switchCase = this._switchCase.bind(this);
	}
	steps = [ 'Shipping Information', 'Discount', 'Review', 'Payment' ];
	setStage(newStage) {
		this.setState({
			stage: newStage
		});
	}

	_switchCase(stageVal) {
		switch (stageVal) {
			case 1:
				return <Discount stage={this.state.stage} setStage={this.setStage} />;
			case 2:
				return <CartContainer stage={this.state.stage} setStage={this.setStage} />;
			case 3:
				return <Payment stage={this.state.stage} setStage={this.setStage} />;
			default:
				return <ShippingInfo stage={this.state.stage} setStage={this.setStage} />;
		}
	}

	render() {
		return (
			<div>
				{this._switchCase(this.state.stage)} <ProcessBar stage={this.state.stage} steps={this.steps} />
			</div>
		);
	}
}
