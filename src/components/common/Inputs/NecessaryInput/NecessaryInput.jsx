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
export default function NecessaryInput({
	info,
	setFirstname,
	setLastname,
	setEmail,
	setPhone,
	setAddress,
	setCity,
	setProvince,
	setPostalCode,
	setCountry,
	setPassword,
	disabled = false,
	className = 'default',
	disbaledEmail = false,
	required = false
}) {
	return (
		<div>
			<TextField
				label="First Name"
				className={`${className}--firstname`}
				value={info.firstName}
				onChange={(e) => setFirstname(e)}
				required={required}
			/>
			<TextField
				label="Last Name"
				className={`${className}--lastname`}
				value={info.lastName}
				onChange={setLastname}
				required={required}
			/>
			<EmailInput
				className={`${className}--email`}
				value={info.email}
				onChange={setEmail ? setEmail : (value) => {}}
				helperText="Invalid Email"
				disabled={disbaledEmail}
				required={required}
			/>
			<PhoneInput
				className={`${className}--phone`}
				value={info.phoneNum}
				onChange={setPhone}
				helperText="Invalid Phone Number"
				required={required}
			/>

			{/* ---Address--- */}
			<TextField
				className={`${className}--address`}
				disabled={disabled}
				label="Address"
				value={info.address}
				onChange={setAddress}
			/>
			<TextField
				className={`${className}--city`}
				disabled={disabled}
				label="City"
				value={info.city}
				onChange={setCity}
			/>
			<TextField
				className={`${className}--province`}
				disabled={disabled}
				label="Province"
				value={info.province}
				onChange={setProvince}
			/>
			<PostalCodeInput
				// disabled={disabled}
				helperText="Invalid Postal Code"
				value={info.postalCode}
				onChange={setPostalCode}
				required={required}
			/>
			<TextField
				className={`${className}--country`}
				disabled={disabled}
				label="Country"
				value={info.country}
				onChange={setCountry}
			/>

			{/* --Password-- */}
			{info.password !== null && info.password !== undefined ? (
				<TextField
					label="New Password"
					className={`${className}--password`}
					value={info.password}
					onChange={setPassword}
					type="password"
				/>
			) : (
				''
			)}
		</div>
	);
}
