import { PayPalButton } from 'react-paypal-button-v2';
import React, { Component } from 'react';

const URL = 'http://localhost:8080/api/customer/payment/success';

export default class Payment extends Component {
	render() {
		return (
			<PayPalButton
				amount={this.props.total}
				options={{ currency: 'CAD', disableFunding: 'card', clientId: 'sb' }}
				onSuccess={() => {
					this.props.setDone();
					return fetch(URL, {
						method: 'PUT',
						body: JSON.stringify(true)
					});
				}}
				catchError={this.props.setError}
			/>
		);
	}
}
