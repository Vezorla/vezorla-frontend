import React, { Component } from 'react';
import Login from '../view/Login';
import { withRouter } from 'react-router-dom';

/**
 * @file Login View Componenet 
 * @author MinhL4m
 * @version 1.0
 */

/**
 * Login Logic class component
 */
class LoginContainer extends Component {
	/**
	 * Constructor
	 * @param {setAuth} set authentication (client, admin) 
	 */
	constructor( props) {
		super(props);
		this.state = {
			username: '',
			password: '',
			error: ''
		};
		this.onClick = this.onClick.bind(this);
		this.setPassword = this.setPassword.bind(this);
		this.setUsername = this.setUsername.bind(this);
	}

	//----Setter-----
	setUsername = (usernameVal) => {
		this.setState({ username: usernameVal });
	};

	setPassword = (passwordVal) => {
		this.setState({ password: passwordVal });
	};

	/**
	 * Handle on log in
	 * Post request to server to verify the email and password
	 */
	onClick = async () => {
		try {
			const response = await fetch('url', {
				method: 'POST',
				headers: {
					Content: 'application/json',
					Accept: 'application/json'
				},
				body: JSON.stringify(this.state),
				credentials: 'include'
			});

			//if 401 (Unauthorized) then error message
			if (response.status === 401) {
				this.setState({ error: 'Invalid username or password' });
			} else if (response.status === 200) {
				//if 200 (ok)
				const data = await response.json();
				//login as admin
				if (data === 'something') {
					this.props.setAuth('do something');
				} else {
					//login as client
					this.props.setAuth('do something');
				}
				this.props.history.push('/home');
			}
		} catch (err) {
			this.setState({ error: 'Something wrong' });
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

export default withRouter(LoginContainer);
