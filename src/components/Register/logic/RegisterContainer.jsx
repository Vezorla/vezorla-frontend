import React, { Component } from 'react';
import Register from '../view/Register';
import { Button } from '@material-ui/core';
import Error from '../../common/Error/Error';

var match = true;
export default class RegisterContainer extends Component {
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

	onClick = async () => {
		const response = await fetch('url', {
			method: 'POST',
			headers: {
				Accept: 'application/json',
				Content: 'application/json'
			},
			body: JSON.stringify({ ...this.state }),
			credentials: 'include'
		});

		if (response.status === 200) {
			//redirect back t login
		} else {
            
			this.setState({error : true});
		}
	};

	render() {
		return (
			<div>
				{this.state.error ? <Error /> : ''}
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
