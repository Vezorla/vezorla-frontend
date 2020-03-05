import React from 'react';
import { TextField } from '@material-ui/core';
import EmailInput from '../../../common/Inputs/Email/EmailInput';
import PhoneInput from '../../../common/Inputs/Phone/PhoneInput';
import PostalCodeInput from '../../../common/Inputs/PostalCode/PostalCodeInput';

/**
 * @file  Necessary Information Input Component
 * @author MinhL4m
 * @version 1.0
 */

//Every setter accept event except PostalCode, Email, Phone
//They accept setter with new value as param
export default function Info({
	info,
	setFirstname,
	setLastname,
	setEmail,
	setPhone,
	setAddress,
	setCity,
	setProvice,
	setPostalCode,
	setCountry,
	setPassword,
	disabled,
	className
}) {
	let name = className !== null || className !== undefined ? 'Default' : className;
	return (
		<div>
			<TextField
				label="First Name"
				className={`${name}--firstname`}
				value={info.firstname}
				onChange={(e) => setFirstname(e)}
			/>
			<TextField label="Last Name" className={`${name}--lastname`} value={info.lastname} onChange={setLastname} />
			<EmailInput
				className={`${name}--email`}
				value={info.email}
				onChange={setEmail}
				helperText="Invalid Email"
			/>
			<PhoneInput
				className={`${name}--phone`}
				value={info.phone}
				onChange={setPhone}
				helperText="Invalid Phone Number"
			/>

			{/* ---Address--- */}
			<TextField
				className={`${name}--address`}
				disabled={disabled}
				label="Address"
				value={info.address}
				onChange={setAddress}
			/>
			<TextField
				className={`${name}--city`}
				disabled={disabled}
				label="City"
				value={info.city}
				onChange={setCity}
			/>
			<TextField
				className={`${name}--provice`}
				disabled={disabled}
				label="Provice"
				value={info.provice}
				onChange={setProvice}
			/>
			<PostalCodeInput
				disabled={disabled}
				helperText="Invalid Postal Code"
				value={info.postalCode}
				onChange={setPostalCode}
			/>
			<TextField
				className={`${name}--country`}
				disabled={disabled}
				label="Country"
				value={info.country}
				onChange={setCountry}
			/>

			{/* --Password-- */}
			{info.password !== null && info.password !== '' && info.password !== undefined ? (
				<TextField
					label="Password"
					className={`${name}--password`}
					disabled={disabled}
					value={info.password}
					onChange={setPassword}
				/>
			) : (
				''
			)}
		</div>
	);
}
