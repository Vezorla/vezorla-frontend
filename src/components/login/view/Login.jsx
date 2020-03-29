import React from 'react';
import { TextField, Button } from '@material-ui/core';
import { NavLink } from 'react-router-dom';
import EmailInput from '../../common/Inputs/Email/EmailInput';

/**
 * @file Login View Componenet 
 * @author MinhL4m
 * @version 1.0
 */

/**
 * Login Functional Component
 * @param {string} username - value of username textfield
 * @param {string} password - value of password textfield
 * @param {string} error - error that may occured during login process
 * @param {function} setUsername - function set username when user type
 * @param {function} setPassword - function set password when user type
 * @param {function} onClick - function handle submit username and password
 * @returns Login View Component
 */
export default function Login({ email, password, error = '', setEmail, setPassword, onClick }) {
	React.useEffect(() => {
		const btn = document.querySelector('.login-btn');
		const pass = document.querySelector('.pass');
		const email = document.querySelector('.email');

		function enter(e) {
			if (e.keyCode === 13) {
				e.preventDefault();

				btn.click();
			}
		}

		pass.addEventListener('keyup', enter);
		email.addEventListener('keyup', enter);
		return () => {
			pass.removeEventListener('keyup', enter);
			email.removeEventListener('keyup', enter);
		};
	}, []);

	return (
		<div>
			<div>
				<h1>Welcome</h1>
				<h2>Sign in to continue</h2>
			</div>
			<div>
				<EmailInput className="email" helperText="Invalid Email" onChange={setEmail} value={email} />
				<TextField className="pass" label="Password" type="password" value={password} onChange={setPassword} />
			</div>
			<div>{error !== '' ? <p>{error}</p> : ''}</div>
			<div>
				<Button className="login-btn" variant="contained" onClick={onClick} size="large">
					Sign in
				</Button>
				<NavLink to="/register" exact>
					<Button  variant="contained" size="small">
						Create Account
					</Button>
				</NavLink>
			</div>
		</div>
	);
}
