import React from 'react';
import { TextField, Button } from '@material-ui/core';
import Error from '../../../common/Error/PopUp';

export default function AddRetail(
	info,
	setStoreName,
	setContactName,
	setEmail,
	setPassword,
	setConfirmPassword,
	setBussNum,
	onSave,
	save,
	setSave,
	error,
	setError,
	message
) {
	return (
		<div>
			{save ? <Error message="Retail saved" onClick={setSave} /> : ''}
			{error ? <Error message={message} onClick={setError} /> : ''}
			<h1>Register Retail Client</h1>
			<div>
				<TextField label="Store Name" value={info.storeName} onChange={setStoreName} />
				<TextField label="Contact Name" value={info.contactName} onChange={setContactName} />
				<TextField label="Email" value={info.email} onChange={setEmail} />
				<TextField label="Password" type="password" value={info.password} onChange={setPassword} />
				<TextField
					label="Confirm Password"
					type="password"
					value={info.confirmPassword}
					onChange={setConfirmPassword}
				/>
				<TextField label="Business Number" value={info.bussNum} onChange={setBussNum} />
			</div>
			<Button variant="contained" onClick={onSave}>
				Add
			</Button>
		</div>
	);
}
