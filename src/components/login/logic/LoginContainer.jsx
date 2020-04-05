import React, { Component } from 'react';
import Login from '../view/Login';
import { withRouter } from 'react-router-dom';

/**
 * @file Login View Componenet 
 * @author MinhL4m
 * @version 1.0
 */

const URL = 'http://localhost:8080/api/auth/login';

/**
 * Login Logic class component
 */
class LoginContainer extends Component {
	/**
	 * Constructor
	 * @param {setAuth} set authentication (client, admin) 
	 */
	constructor(props) {
		super(props);
		this.state = {
			email: '',
			password: '',
			error: ''
		};
		this.onClick = this.onClick.bind(this);
		this.setPassword = this.setPassword.bind(this);
		this.setEmail = this.setEmail.bind(this);
	}

	//----Setter-----
	setEmail = (emailVal) => {
		this.setState({ email: emailVal });
	};

	setPassword = (e) => {
		this.setState({ password: e.target.value });
	};

	/**
	 * Handle on log in
	 * Post request to server to verify the email and password
	 */
	onClick = async () => {
		if (
			/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
				this.state.email
			)
		) {
			try {
				const response = await fetch(URL, {
					method: 'POST',
					headers: {
						Content: 'application/json',
						Accept: 'application/json'
					},
					body: JSON.stringify({ email: this.state.email, password: this.state.password }),
					credentials: 'include'
				});

				//if 401 (Unauthorized) then error message
				if (response.status === 401) {
					this.setState({ error: 'Invalid username or password', password: '' });
				} else if (response.status === 200) {
					//if 200 (ok)
					const data = await response.json();
					//login as admin
					if (data.admin === true) {
						this.props.setAuth('admin');
						this.props.history.push('/admin/dashboard');
					} else {
						//login as client
						this.props.setAuth('client');
						this.props.history.push('/');
					}
				}
			} catch (err) {
				this.setState({ error: 'Error has occured! Please try again later.', password: '' });
			}
		}
	};

	/**
	 * @returns Login component that Login Logic wrap around Login View
	 */
	render() {
		return (
			<div>
				<Login {...this.state} setPassword={this.setPassword} setEmail={this.setEmail} onClick={this.onClick} />
			</div>
		);
	}
}

export default withRouter(LoginContainer);
