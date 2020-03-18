import React from 'react';
import NecessaryInput from '../../../common/Inputs/NecessaryInput/NecessaryInput';
import { Button, FormControlLabel, Switch } from '@material-ui/core';

export default function ClientInfo({
	info,
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
	setSubscription,
	onSave,
	onCancel,
	onReset
}) {
	return (
		<div>
			<div>
				<h1>Client ID</h1>
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
				<FormControlLabel
					control={<Switch checked={info.subscription} onChange={setSubscription} color="primary" />}
					label="Subscription to mailing list"
					labelPlacement="start"
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
				<Button variant="contained" onClick={onCancel}>
					Cancel
				</Button>
			</div>
		</div>
	);
}
