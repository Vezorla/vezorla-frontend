import React, { useState, useEffect } from 'react';
import { TextField } from '@material-ui/core';

var postalCodeValid = true;

/**
 * @file PostalCode Input Component
 * @author MinhL4m
 * @version 1.0
 */

const firstVal = (value) => {
	if (value === '') {
		postalCodeValid = true;
	}
	const postalCodeReceive = value.replace(/\s/g, '').match(/([a-zA-Z0-9]{0,3})([a-zA-Z0-9]{0,3})/);
	return !postalCodeReceive[2]
		? postalCodeReceive[1].toUpperCase()
		: postalCodeReceive[1].toUpperCase() + ' ' + postalCodeReceive[2].toUpperCase();
};

export default function PostalCodeInput({ value, className, onChange, helperText, disabled, required = false }) {
	const [ postalCode, setPostalCode ] = useState('');

	useEffect(
		() => {
			const initVal = firstVal(value);
			setPostalCode(initVal);
		},
		[ value ]
	);

	const postalCodeHandler = (e) => {
		const inputVal = e.target.value.replace(/\s/g, '').match(/([a-zA-Z0-9]{0,3})([a-zA-Z0-9]{0,3})/);
		const regrex = /[A-Z]{1}\d{1}[A-Z]{1}\d{1}[A-Z]{1}\d{1}/g;

		onChange(inputVal[0]);
		setPostalCode(
			!inputVal[2] ? inputVal[1].toUpperCase() : inputVal[1].toUpperCase() + ' ' + inputVal[2].toUpperCase()
		);

		if (!regrex.test(inputVal[0]) && inputVal[0].length === 6) {
			postalCodeValid = false;
		} else {
			postalCodeValid = true;
		}
	};

	return (
		<TextField
			required={required}
			className={className !== null ? className : ''}
			label="Postal Code"
			error={!postalCodeValid}
			helperText={postalCodeValid ? '' : helperText}
			value={postalCode}
			onChange={postalCodeHandler}
			disabled={disabled}
		/>
	);
}
