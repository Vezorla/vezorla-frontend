import React, { Component } from 'react';

export default class ForgotPassContainer extends Component {
	constructor() {
		super();
		this.state = {
			email: '',
			stage: '',
			error: ''
		};
	}

	onChange(newEmail) {
		this.setState({ email: newEmail });
	}

	async onClick() {
		this.setState({ stage: 'loading' });
		try {
			const response = await fetch('url', {
				headers: {
					'Content-Type': 'application/json'
				},
				credentials: 'include',
				body: JSON.stringify(this.state.email)
			});

			if (response.status === 200) {
			} else if (response.status === 406) {
			}
		} catch (err) {}
	}

	render() {
		return <div>{/*dsa*/}</div>;
	}
}
