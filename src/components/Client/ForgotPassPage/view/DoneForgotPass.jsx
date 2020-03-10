import React from 'react';
import { CheckCircle } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';

export default function DoneForgotPass() {
	return (
		<div>
			<h1>Thank you!</h1>
			<CheckCircle />
			<p>Verification email sent to your inbox.</p>
			<Link to="/login">
				<Button>Sign In</Button>
			</Link>
		</div>
	);
}
