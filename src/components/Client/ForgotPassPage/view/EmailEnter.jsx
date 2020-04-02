import React from 'react';
import EmailInput from '../../../common/Inputs/Email/EmailInput';
import { Button, Typography } from '@material-ui/core';
import PopUp from '../../../common/PopUp/PopUp';

/**
 * @file Email Input Componenet 
 * @author MinhL4m
 * @version 1.0
 */

export default function EmailEnter({ value, onChange, onClick, helperText, error, setError }) {
	return (
		<div>
			{error === true ? <PopUp message="Can't find email" handleOk={setError} onClose={setError} /> : ''}
			<div>
				<Typography variant="h4" component="h4">
					Forgot Your Password?
				</Typography>
				<Typography variant="h6" component="h4">
					Don't worry, just enter the e-mail you registered and we will help you with that!
				</Typography>
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
