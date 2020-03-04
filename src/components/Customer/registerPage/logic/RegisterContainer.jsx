import React, { Component } from 'react';
import Register from '../view/Register';
import { Button } from '@material-ui/core';
import Error from '../../../common/Error/Error';
import { withRouter } from 'react-router-dom';

/**
 * @file Register Logic Component
 * @author MinhL4m
 * @version 1.0
 */

var match = true;

/**
 * Register Logic class component
 */
class RegisterContainer extends Component {
	constructor() {
		super();
		this.state = {
			firstname: '',
			lastname: '',
			email: '',
			password: '',
			rePassword: '',
			error: false
		};
		this.setEmail = this.setEmail.bind(this);
		this.setFirstname = this.setFirstname.bind(this);
		this.setLastname = this.setLastname.bind(this);
		this.setPassword = this.setPassword.bind(this);
		this.setRePassword = this.setRePassword.bind(this);
		this.setError = this.setError.bind(this);
	}
	setError() {
		this.setState({ error: false });
	}

	setFirstname = (e) => {
		this.setState({ firstname: e.target.value });
	};

	setLastname = (e) => {
		this.setState({ lastname: e.target.value });
	};

	setEmail = (emailVal) => {
		this.setState({ email: emailVal });
	};

	setPassword = (e) => {
		if (this.state.rePassword !== '') {
			match = e.target.value === this.state.rePassword;
		}
		this.setState({ password: e.target.value });
	};

	setRePassword = (e) => {
		match = this.state.password === e.target.value;
		this.setState({ rePassword: e.target.value });
	};

	/**
	 * Handler for submitting the registration form
	 */
	onClick = async () => {
		//only 2 password match, email valid, and password is not empty then this request is send
		if (
			match === true &&
			this.state.password !== '' &&
			/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
				this.state.email
			)
		) {
			try {
				const response = await fetch('url', {
					method: 'POST',
					headers: {
						Accept: 'application/json',
						Content: 'application/json'
					},
					body: JSON.stringify({ username: this.state.username, password: this.state.password }),
					credentials: 'include'
				});

				if (response.status === 200) {
					const data = await response.json();
					if (data === true) {
						this.props.history.push('/login');
					} else {
						this.setState({ error: true });
					}
				} else {
					this.setState({ error: true });
				}
			} catch (err) {
				this.setState({ error: true });
			}
		}
	};

	/**
	 * @returns Register component that Register Logic wrap around Register View
	 */
	render() {
		return (
			<div>
				{this.state.error ? <Error message="something wrong" onClick={this.setError} /> : ''}
				<Register
					firstname={this.state.firstname}
					lastname={this.state.lastname}
					password={this.state.password}
					rePassword={this.state.rePassword}
					email={this.state.email}
					setEmail={this.setEmail}
					setFirstname={this.setFirstname}
					setLastname={this.setLastname}
					setPassword={this.setPassword}
					setRePassword={this.setRePassword}
					match={match}
				/>
				<Button variant="contained" color="primary" onClick={this.onClick}>
					Create Account
				</Button>
			</div>
		);
	}
}

export default withRouter(RegisterContainer);
