import React, { useState, useEffect } from 'react';
import { TextField } from '@material-ui/core';

const firstVal = (value) => {
	const phoneReceive = value.replace(/\D/g, '').match(/(\d{0,3})(\d{0,3})(\d{0,4})/);

	return !phoneReceive[2]
		? phoneReceive[1]
		: '(' + phoneReceive[1] + ') ' + phoneReceive[2] + (phoneReceive[3] ? '-' + phoneReceive[3] : '');
};

export default function PhoneInput({ value, className, onChange }) {
	const [ phoneNumber, setPhoneNumber ] = useState('');

	useEffect(() => {
		let initVal = firstVal(value);
		setPhoneNumber(initVal);
	}, []);

	const phoneHandler = (e) => {
		const inputVal = e.target.value.replace(/\D/g, '').match(/(\d{0,3})(\d{0,3})(\d{0,4})/);
		onChange(inputVal[0]);
		setPhoneNumber(
			!inputVal[2] ? inputVal[1] : '(' + inputVal[1] + ') ' + inputVal[2] + (inputVal[3] ? '-' + inputVal[3] : '')
		);
	};

	return (
		<TextField
			className={className !== null ? className : ''}
			label="Phone"
			value={phoneNumber}
			onChange={phoneHandler}
		/>
	);
}
