import React from 'react';
import { TextField, Button } from '@material-ui/core';
import { NavLink } from 'react-router-dom';

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
export default function Login({ username, password, error, setUsername, setPassword, onClick }) {
	return (
		<div>
			<div>
				<h1>Welcome</h1>
				<h2>Sign in to continue</h2>
			</div>
			<div>
				<TextField label="Username" error={error !== ''} autoFocus value={username} onChange={setUsername} />
				<TextField
					label="Password"
					error={error !== ''}
					helperText={error !== '' ? '' : error}
					type="password"
					value={password}
					onChange={setPassword}
				/>
			</div>
			<div>
				<Button variant="contained" onClick={onClick} size="large">
					Sign in
				</Button>
				<NavLink to="/register" exact>
					<Button variant="contained" size="small">
						Create Account
					</Button>
				</NavLink>
			</div>
		</div>
	);
}
