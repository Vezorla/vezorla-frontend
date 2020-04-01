import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import PopUp from '../../../common/PopUp/PopUp';
import Setting from '../view/Setting';

/**
 * @file Setting Componenet 
 * @author MinhL4m
 * @version 1.0
 */

const MESSAGE =
	'Make sure to write correctly the email, as it is your username to enter the system and teh main method for communication with the system';
const UPDATE_URL = 'http://localhost:8080/api/client/account/update';
const BACKUP_URL = 'url';
const UPLOAD_URL = 'url';
const EMAIL_URL = 'http://localhost:8080/api/admin/email';

const monthNames = [
	'January',
	'February',
	'March',
	'April',
	'May',
	'June',
	'July',
	'August',
	'September',
	'October',
	'November',
	'December'
];
let dateObj = new Date();
let month = monthNames[dateObj.getMonth()];
let day = String(dateObj.getDate()).padStart(2, '0');
let year = dateObj.getFullYear();

class SettingContainer extends Component {
	constructor() {
		super();
		this.state = {
			info: {
				email: '',
				password: ''
			},
			file: [],
			update: false,
			error: false,
			backup: false,
			success: false,
			message: ''
		};
		this.onUpdate = this.onUpdate.bind(this);
	}

	setStateValue = (field) => {
		return (e) => {
			this.setState({ info: { ...this.state.info, [`${field}`]: e.target.value } });
		};
	};

	setFile = (fileItems) => {
		this.setState({
			file: fileItems.map((fileItem) => fileItem.file)
		});
	};

	onUpdate = async () => {
		this.setState({ update: false });
		try {
			const response = await fetch(UPDATE_URL, {
				method: 'PUT',
				headers: {
					'Content-Type': 'application/json'
				},
				mode: 'cors',
				credentials: 'include',
				body: JSON.stringify({ email: this.state.info.email, password: this.state.info.password })
			});
			if (response.status === 200) {
				this.setState({
					success: true,
					message: 'Account updated',
					info: { ...this.state.info, password: '' }
				});
			} else if (response.status >= 400) {
				this.setState({ error: true, message: 'Something wrong' });
			}
		} catch (err) {
			this.setState({ error: true, message: 'Something wrong' });
		}
	};

	onBackUp = async () => {
		try {
			const response = await fetch(BACKUP_URL, {
				method: 'GET',
				credentials: 'included',
				mode: 'cors'
			});
			if (response.status === 200) {
				this.setState({ success: true, message: 'Please check your email!' });
			} else if (response.status >= 400) {
				this.setState({ error: true, message: 'Something wrong' });
			}
		} catch (err) {
			this.setState({ error: true, message: 'Something wrong' });
		}
	};

	onUpload = async () => {
		if (this.state.file.length > 0 && this.state.file[0].type === 'application/x-zip-compressed') {
			try {
				const response = await fetch(UPLOAD_URL, {
					method: 'POST',
					credentials: 'include',
					mode: 'cors',
					body: this.state.file
				});
				if (response.status === 200) {
					this.setState({ success: true, message: 'Restore Backup Successfully' });
				} else if (response.status >= 400) {
					this.setState({ error: true, message: 'Something wrong' });
				}
			} catch (err) {
				this.setState({ error: true, message: 'Something wrong' });
			}
		} else {
			this.setState({ error: true, message: 'Type of file is not correct! Please use .zip file' });
		}
	};

	fetchData = async () => {
		try {
			const response = await fetch(EMAIL_URL, {
				method: 'GET',
				credentials: 'include',
				mode: 'cors'
			});
			if (response.status === 200) {
				const data = await response.json();
				this.setState({ info: { ...this.state.info, email: data.email } });
			}
		} catch (err) {}
	};

	componentDidMount() {
		this.fetchData();
	}

	render() {
		return (
			<div>
				{this.state.backup ? (
					<PopUp
						message={`Do you want to create backup on ${month + ' ' + day + ',' + year}?`}
						handleOk={() => {
							this.onBackUp();
							this.setState({ backup: false });
						}}
						onClose={() => {
							this.setState({ backup: false });
						}}
						handleCancel={() => {
							this.setState({ backup: false });
						}}
						label="Backup"
					/>
				) : (
					''
				)}
				{this.state.error ? (
					<PopUp
						message={this.state.message}
						handleOk={() => {
							this.setState({ error: false });
						}}
						onClose={() => {
							this.setState({ error: false });
						}}
					/>
				) : (
					''
				)}
				{this.state.update ? (
					<PopUp
						label="Update Admin?"
						message={MESSAGE}
						handleCancel={() => {
							this.setState({ update: false });
						}}
						onClose={() => {
							this.setState({ update: false });
						}}
						handleOk={() => {
							console.log(this.onUpdate);
							this.onUpdate();
							this.setState({ update: false });
						}}
					/>
				) : (
					''
				)}
				{this.state.success ? (
					<PopUp
						label="Success"
						message={this.state.message}
						handleOk={() => {
							this.setState({ success: false });
						}}
						onClose={() => {
							this.setState({ success: false });
						}}
					/>
				) : (
					''
				)}
				<Setting
					info={this.state.info}
					onUpdate={() => {
						this.setState({ update: true });
					}}
					setGTSNum={this.setStateValue('gstNum')}
					setPassword={this.setStateValue('password')}
					onBackUp={() => {
						this.setState({ backup: true });
					}}
					setFile={this.setFile}
					onUpload={this.onUpload}
				/>
			</div>
		);
	}
}

export default withRouter(SettingContainer);
