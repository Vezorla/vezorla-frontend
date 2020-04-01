import React from 'react';
import { TextField, Button } from '@material-ui/core';
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
				<h1>General Setting</h1>
				<TextField label="E-Mail" value={info.email} disabled />
				<TextField label="Password" value={info.password} onChange={setPassword} type="password" />
				<Button variant="contained" onClick={onUpdate}>
					Update
				</Button>
			</div>
			<div>
				<h1>Download Backup</h1>
				<Button onClick={onBackUp} variant="contained">
					Database Backup
				</Button>
			</div>
			<div>
				<h1>Upload Backup</h1>
				<FilePond files={info.file} maxFiles={1} onupdatefiles={setFile} style={{padding: '3rem 0'}} />
				<Button variant="contained" onClick={onUpload}>
					Update
				</Button>
			</div>
		</div>
	);
}
