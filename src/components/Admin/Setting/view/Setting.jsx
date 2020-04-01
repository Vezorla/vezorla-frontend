import React from 'react';
import { TextField, Button, Typography } from '@material-ui/core';
import { FilePond, registerPlugin } from 'react-filepond';
import 'filepond/dist/filepond.min.css';

/**
 * @file Setting View Componenet 
 * @author MinhL4m
 * @version 1.0
 */

export default function Setting({ info, setPassword, onUpdate, onBackUp, onUpload, setFile }) {
	return (
		<div>
			<div>
				<Typography variant="h4" component="h4">
					General Setting
				</Typography>
				<TextField label="E-Mail" value={info.email} disabled />
				<TextField label="Password" value={info.password} onChange={setPassword} type="password" />
				<Button variant="contained" onClick={onUpdate}>
					Update
				</Button>
			</div>
			<div>
				<Typography variant="h4" component="h4">
					Download Backup
				</Typography>

				<Button onClick={onBackUp} variant="contained">
					Database Backup
				</Button>
			</div>
			<div>
				<Typography variant="h4" component="h4">
					Upload Backup
				</Typography>
				<FilePond files={info.file} maxFiles={1} onupdatefiles={setFile} style={{ padding: '3rem 0' }} />
				<Button variant="contained" onClick={onUpload}>
					Update
				</Button>
			</div>
		</div>
	);
}
