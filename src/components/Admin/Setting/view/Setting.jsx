import React from 'react';
import { TextField } from '@material-ui/core';

export default function Setting({ info, confirm, onCancel, setPassword, setGTSNum, onUpdate, onBackUp }) {
	return (
		<div>
			<div>
				<h1>GEneral Setting</h1>
				<TextField label="E-Mail" value={info.email} disabled />
				<TextField label="Password" value={info.password} onChange={setPassword} type="password" />

			</div>
		</div>
	);
}
