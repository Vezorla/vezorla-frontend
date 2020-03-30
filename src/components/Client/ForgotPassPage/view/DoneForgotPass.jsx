import React from 'react';
import { CheckCircle } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';

/**
 * @file Done Page View Componenet 
 * @author MinhL4m
 * @version 1.0
 */

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
