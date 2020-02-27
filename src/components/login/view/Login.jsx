import React from 'react';
import { TextField, Button } from '@material-ui/core';
import { NavLink } from 'react-router-dom';

export default function Login({ username, password, error, setUsername, setPassword, onClick }) {
	return (
		<div>
			<div>
				<h1>Welcome</h1>
				<h2>Sign in to continue</h2>
			</div>
			<div>
				<TextField label="Username" error={error === ''} autoFocus value={username} onChange={setUsername} />
				<TextField
					label="Password"
					error={error === ''}
					helperText="Invalid Username or Password! Please try again"
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
