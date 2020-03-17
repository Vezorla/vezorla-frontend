import React from 'react';
import { TextField, Button } from '@material-ui/core';
import PopUp from '../../../common/PopUp/PopUp';
import EmailInput from '../../../common/Inputs/Email/EmailInput';

export default function AddRetail({
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
	message,
	match
}) {
	console.log(setStoreName);
	console.log(setContactName);
	console.log(setPassword);
	console.log(setBussNum);
	console.log(setEmail);

	return (
		<div>
			{save ? <PopUp label="Save" message="Retail saved" onClick={setSave} /> : ''}
			{error ? <PopUp message={message} onClick={setError} /> : ''}
			<h1>Register Retail Client</h1>
			<div>
				<TextField label="Store Name" value={info.storeName} onChange={setStoreName} />
				<TextField label="Contact Name" value={info.contactName} onChange={setContactName} />
				<EmailInput value={info.email} onChange={setEmail} />
				<TextField label="Password" type="password" value={info.password} onChange={setPassword} />
				<TextField
					label="Confirm Password"
					type="password"
					value={info.confirmPassword}
					onChange={setConfirmPassword}
					error={!match}
					helperText={match ? '' : 'Unmatch password'}
				/>
				<TextField label="Business Number" value={info.bussNum} onChange={setBussNum} />
			</div>
			<Button variant="contained" onClick={onSave}>
				Add
			</Button>
		</div>
	);
}
