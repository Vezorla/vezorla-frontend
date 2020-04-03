import React from 'react';
import { CheckCircle } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import { Button, Typography } from '@material-ui/core';

/**
 * @file Done Page View Componenet 
 * @author MinhL4m
 * @version 1.0
 */

export default function DoneForgotPass() {
	return (
		<div>
			<Typography variant="h4" component="h4">
				Thank you
			</Typography>

			<CheckCircle />
			<Typography variant="h4" component="h4">
				Sign in to continue
			</Typography>
			<Link to="/login">
				<Button>Sign In</Button>
			</Link>
		</div>
	);
}
