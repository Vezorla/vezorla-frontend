import React, { Component } from 'react';
import Login from '../view/Login';

/**
 * @file Login View Componenet 
 * @author MinhL4m
 * @version 1.0
 */

/**
 * Login Logic class component
 */
export default class LoginContainer extends Component {
	constructor({ setAuth }) {
		super(setAuth);
		this.state = {
			username: '',
			password: '',
			error: ''
		};
		this.onClick = this.onClick.bind(this);
		this.setPassword = this.setPassword.bind(this);
		this.setUsername = this.setUsername.bind(this);
	}

	setUsername = (usernameVal) => {
		this.setState({ username: usernameVal });
	};

	setPassword = (passwordVal) => {
		this.setState({ password: passwordVal });
	};

	//TODO: set auth for each case
	onClick = async () => {
		const response = await fetch('url', {
			method: 'POST',
			headers: {
				Content: 'application/json',
				Accept: 'application/json'
			},
			body: JSON.stringify(this.state),
			credentials: 'include'
		});

		if (response.status === 401) {
			this.setState({ error: 'Invalid username or password' });
		} else if (response.status === 200) {
			const data = await response.json();
			if (data === 'soemthing') {
				this.setAuth('do something');
			} else {
				this.setAuth('do something');
			}
		}
	};

	/**
	 * @returns Login component that Login Logic wrap around Login View
	 */
	render() {
		return (
			<div>
				<Login
					{...this.state}
					setPassword={this.setPassword}
					setUsername={this.setPassword}
					onClick={this.onClick}
				/>
			</div>
		);
	}
}
