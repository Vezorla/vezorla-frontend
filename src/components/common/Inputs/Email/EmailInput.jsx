import React from 'react';

import { TextField } from '@material-ui/core';

var emailValid = true;

/**
 * @file Email Input Component
 * @author MinhL4m
 * @version 1.0
 */

export default function EmailInput({ value, onChange, helperText, disabled, className }) {
	const emailHandler = (e) => {
		const regrex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		emailValid = regrex.test(e.target.value.toLowerCase()) || e.target.value === '';
		onChange(e.target.value);
	};

	return (
		<TextField
			required
			label="Email"
			error={!emailValid}
			helperText={emailValid ? '' : helperText}
			value={value}
			onChange={emailHandler}
			disabled={disabled}
			className={className !== null ? className : ''}
		/>
	);
}
