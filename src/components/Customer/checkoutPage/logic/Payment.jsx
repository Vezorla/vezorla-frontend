import { PayPalButton } from 'react-paypal-button-v2';
import React, { Component } from 'react';

/**
 * @file PayPal Componenet 
 * @author MinhL4m
 * @version 1.0
 */
const URL = 'http://localhost:8080/api/customer/payment/success';

export default class Payment extends Component {
	render() {
		return (
			<PayPalButton
				amount={this.props.total}
				options={{ currency: 'CAD', disableFunding: 'card', clientId: 'sb' }}
				onSuccess={() => {
					this.props.setLoading(true);
					return fetch(URL, {
						headers: {
							'Content-Type': 'application/json'
						},
						credentials: 'include',
						mode: 'cors',
						method: 'PUT',
						body: JSON.stringify(true)
					}).then((response) => {
						this.props.setLoading(false);
						if (response.status === 200) this.props.setDone();
						else if (response.status >= 400) this.props.setError();
					});
				}}
				catchError={this.props.setError}
			/>
		);
	}
}
