import React from 'react';
import { TextField, Button } from '@material-ui/core';

export default function Setting({ info, setPassword, setGTSNum, onUpdate, onBackUp }) {
	return (
		<div>
			<div>
				<h1>General Setting</h1>
				<TextField label="E-Mail" value={info.email} disabled />
				<TextField label="Password" value={info.password} onChange={setPassword} type="password" />
				<TextField label="Vezorla GST Number" value={info.gtsNum} onChange={setGTSNum} />
				<Button variant="contained" onClick={onUpdate}>
					Update
				</Button>
			</div>
			<div>
				<Button onClick={onBackUp} variant="contained">
					Database Backup
				</Button>
			</div>
		</div>
	);
}
