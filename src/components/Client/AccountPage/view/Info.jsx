import React from 'react';
import NecessaryInput from '../../../common/Inputs/NecessaryInput/NecessaryInput';
import LoadingHOC from '../../../common/HOC/LoadingHOC';

/**
 * @file Info Component 
 * @author MinhL4m
 * @version 1.0
 */

const InfoComponent = ({
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
	setSubscription
}) => {
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
				setProvince={setProvince}
			/>
			{/* TODO Subscription + SAVE */}
		</div>
	);
};

const Info = (props) => {
	return LoadingHOC(InfoComponent)({ ...props, message: 'something went wrong with loading information' });
};

export default Info;
