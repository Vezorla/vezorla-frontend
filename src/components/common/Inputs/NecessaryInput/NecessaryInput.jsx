import React, {useEffect} from 'react';
import { TextField } from '@material-ui/core';
import EmailInput from '../../../common/Inputs/Email/EmailInput';
import PhoneInput from '../../../common/Inputs/Phone/PhoneInput';
import PostalCodeInput from '../../../common/Inputs/PostalCode/PostalCodeInput';

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
	setPassword
}) {

    useEffect(() => {
        console.log(info.password)
    }, [])
	return (
		<div>
			<TextField label="First Name" value={info.firstname} onChange={setFirstname} />
			<TextField label="Last Name" value={info.lastname} onChange={setLastname} />
			<EmailInput value={info.email} onChange={setEmail} helperText="Invalid Email" />
			<PhoneInput value={info.phone} onChange={setPhone} helperText="Invalid Phone Number" />
			<TextField label="Address" value={info.address} onChange={setAddress} />
			<TextField label="City" value={info.city} onChange={setCity} />
			<TextField label="Provice" value={info.provice} onChange={setProvice} />
			<PostalCodeInput helperText="Invalid Postal Code" value={info.postalCode} onChange={setPostalCode} />
			<TextField label="Country" value={info.country} onChange={setCountry} />
			{info.password !== null && info.password !== '' && info.password !== undefined ? (
				<TextField label="Password" value={info.password} onChange={setPassword} />
			) : (
				''
			)}
		</div>
	);
}
