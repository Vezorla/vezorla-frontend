import React from 'react';
import NecessaryInput from '../../../common/Inputs/NecessaryInput/NecessaryInput';
import { Button, Typography } from '@material-ui/core';
import LoadingHOC from '../../../common/HOC/LoadingHOC';
import PopUp from '../../../common/PopUp/PopUp';

/**
 * @file Client Info View Componenet 
 * @author MinhL4m
 * @version 1.0
 */

function ClientInfoComponent({
	info,
	message,
	error,
	success,
	reseted,
	order,
	value,
	setFirstname,
	setLastname,
	setPhone,
	setAddress,
	setCity,
	setProvince,
	setPostalCode,
	setCountry,
	onSave,
	onReset,
	setError,
	setReset,
	goBack
}) {
	return (
		<div>
			{error ? <PopUp label="Error" message={message} onClose={setError} /> : ''}
			{success ? <PopUp label="Success" message={message} onClose={goBack} handleOk={goBack} /> : ''}
			{reseted ? <PopUp label="Reset" message={message} onClose={setReset} handleOk={setReset} /> : ''}
			<div>
				<Typography variant="h4" component="h2">
					Client ID - {info.type}
				</Typography>
			
			</div>
			<div>
				<NecessaryInput
					info={info}
					setAddress={setAddress}
					setCity={setCity}
					setCountry={setCountry}
					setFirstname={setFirstname}
					setLastname={setLastname}
					setPhone={setPhone}
					setPostalCode={setPostalCode}
					setProvince={setProvince}
					disbaledEmail={true}
				/>

				<Button variant="contained" onClick={onReset}>
					Reset Password
				</Button>
			</div>

			<div>
				<div>
					<p>Order Total</p>
					<p>{order}</p>
				</div>
				<div>
					<p>Total Value</p>
					<p>${value}</p>
				</div>
			</div>

			<div>
				<Button variant="contained" onClick={onSave}>
					Save
				</Button>
				<Button variant="contained" onClick={goBack}>
					Cancel
				</Button>
			</div>
		</div>
	);
}

export default function ClientInfo(props) {
	return LoadingHOC(ClientInfoComponent)({ ...props });
}
