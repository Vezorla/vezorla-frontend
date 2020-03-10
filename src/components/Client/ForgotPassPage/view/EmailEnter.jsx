import React from 'react';
import EmailInput from '../../../common/Inputs/Email/EmailInput';
import { Button } from '@material-ui/core';
import Error from '../../../common/Error/Error';

export default function EmailEnter({ value, onChange, onClick, helperText, error, setError }) {
	return (
		<div>
			{error === true ? <Error message="Cant find email" onClick={setError} /> : ''}
			<div>
				<h1>Forgot Your Password?</h1>
				<p>Don't worry, just enter the e-mail you registered and we will help you with that!</p>
			</div>
			<div>
				<EmailInput value={value} onChange={onChange} helperText={helperText} />
			</div>
			<Button onClick={onClick} variant="contained" size="large">
				SEND
			</Button>
		</div>
	);
}
