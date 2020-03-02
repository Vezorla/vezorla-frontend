import React from 'react';
import NecessaryInput from '../../../common/Inputs/NecessaryInput/NecessaryInput';

/**
 * @file Info Component 
 * @author MinhL4m
 * @version 1.0
 */

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
	setSubscription
}) {
	return (
		<div>
			<NecessaryInput
				info={info}
				setAddress={setAddress}
				setCity={setCity}
				setCountry={setCountry}
				setEmail={setEmail}
				setFirstname={setFirstname}
				setLastname={setLastname}
				setPassword={setPassword}
				setPhone={setPhone}
				setPostalCode={setPostalCode}
				setProvice={setProvice}
			/>
			{/* TODO Subscription + SAVE */}
		</div>
	);
}
