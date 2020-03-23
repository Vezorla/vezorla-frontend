import React, { Component } from 'react';
import ForgotPass from '../view/ForgotPass';

const URL = 'url';

export default class ForgotPassContainer extends Component {
	constructor() {
		super();
		this.state = {
			email: '',
			stage: false,
			error: false
		};
		this.onChange = this.onChange.bind(this);
		this.onClick = this.onClick.bind(this);
		this.setError = this.setError.bind(this);
	}

	setError() {
		this.setState({ error: false });
	}

	onChange(newEmail) {
		this.setState({ email: newEmail });
	}

	onClick() {
		try {
			const response = fetch(URL, {
				headers: {
					'Content-Type': 'application/json'
				},
				credentials: 'include',
				body: JSON.stringify(this.state.email)
			});

			if (response.status === 200) {
				this.setState({ stage: true });
			} else if (response.status === 406) {
				this.setState({ error: true });
			} else {
				this.setState({ error: true });
			}
		} catch (err) {
			this.setState({ error: true });
		}
	}

	render() {
		return (
			<div>
				<ForgotPass
					helperText="invalid email"
					onChange={this.onChange}
					onClick={this.onClick}
					stage={this.state.stage}
					error={this.state.error}
					setError={this.setError}
				/>
			</div>
		);
	}
}
