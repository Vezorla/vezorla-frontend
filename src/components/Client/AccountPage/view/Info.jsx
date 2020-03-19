import React from 'react';
import NecessaryInput from '../../../common/Inputs/NecessaryInput/NecessaryInput';
import LoadingHOC from '../../../common/HOC/LoadingHOC';
import { Button, FormControlLabel, Switch } from '@material-ui/core';
/**
 * @file Info Component 
 * @author MinhL4m
 * @version 1.0
 */

const InfoComponent = ({
	info,
	setFirstname,
	setLastname,
	setPhone,
	setAddress,
	setCity,
	setProvince,
	setPostalCode,
	setCountry,
	setPassword,
	setSubscription,
	onClick
}) => {
	return (
		<div>
			<NecessaryInput
				info={info}
				setAddress={setAddress}
				setCity={setCity}
				setCountry={setCountry}
				setFirstname={setFirstname}
				setLastname={setLastname}
				setPassword={setPassword}
				setPhone={setPhone}
				setPostalCode={setPostalCode}
				setProvince={setProvince}
				disbaledEmail={true}
			/>
			<FormControlLabel
				control={<Switch checked={info.subscription} onChange={setSubscription} color="primary" />}
				label="Subscription to mailing list"
				labelPlacement="start"
			/>

			<Button variant="contained" onClick={onClick}>
				Save
			</Button>
		</div>
	);
};

const Info = (props) => {
	return LoadingHOC(InfoComponent)({ ...props, message: 'something went wrong with loading information' });
};

export default Info;
