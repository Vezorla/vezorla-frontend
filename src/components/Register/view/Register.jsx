import React from 'react';
import { TextField } from '@material-ui/core';
import EmailInput from '../../common/Inputs/Email/EmailInput';

export default function Register({
	firstname,
	setFirstname,
	lastname,
	setLastname,
	email,
	setEmail,
	password,
	setPassword,
	rePassword,
	setRePassword,
	match
}) {
	return (
		<div>
            <div>
                <h1>Registration</h1>
            </div>
			<TextField label="First Name" value={firstname} onChange={setFirstname} />
			<TextField label="Last Name" value={lastname} onChange={setLastname} />
			<EmailInput helperText="Invalid Email" value={email} onChange={setEmail} />
			<TextField label="Password" type="password" value={password} onChange={setPassword} />
			<TextField
				label="Confirm Password"
				type="password"
				value={rePassword}
				onChange={setRePassword}
                error={!match}
                helperText={match?'':'Unmatch password'}
			/>
		</div>
	);
}
