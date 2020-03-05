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
	disabled
}) {
	return (
		<div>
			<TextField label="First Name" value={info.firstname} onChange={(e) => setFirstname(e)} />
			<TextField label="Last Name" value={info.lastname} onChange={setLastname} />
			<EmailInput value={info.email} onChange={setEmail} helperText="Invalid Email" />
			<PhoneInput value={info.phone} onChange={setPhone} helperText="Invalid Phone Number" />

			{/* ---Address--- */}
			<TextField disabled={disabled} label="Address" value={info.address} onChange={setAddress} />
			<TextField disabled={disabled} label="City" value={info.city} onChange={setCity} />
			<TextField disabled={disabled} label="Provice" value={info.provice} onChange={setProvice} />
			<PostalCodeInput
				disabled={disabled}
				helperText="Invalid Postal Code"
				value={info.postalCode}
				onChange={setPostalCode}
			/>
			<TextField disabled={disabled} label="Country" value={info.country} onChange={setCountry} />

			{/* --Password-- */}
			{info.password !== null && info.password !== '' && info.password !== undefined ? (
				<TextField label="Password" disabled={disabled} value={info.password} onChange={setPassword} />
			) : (
				''
			)}
		</div>
	);
}
