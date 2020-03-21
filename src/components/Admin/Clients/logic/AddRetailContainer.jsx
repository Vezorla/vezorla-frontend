import React, { Component } from 'react';
import AddRetail from '../view/AddRetail';
let match = true;

export default class AddRetailContainer extends Component {
	constructor() {
		super();
		this.state = {
			info: {
				storeName: '',
				contactName: '',
				email: '',
				password: '',
				confirmPassword: '',
				bussNum: ''
			},
			save: false,
			error: false,
			message: ''
		};
		this.setStateValue = this.setStateValue.bind(this);
		this.setPopUp = this.setPopUp.bind(this);
		this.setEmail = this.setEmail.bind(this);
		this.setPassword = this.setPassword.bind(this);
		this.setConfirmPassword = this.setConfirmPassword.bind(this);
		this.onSave = this.onSave.bind(this);
	}

	setStateValue(field) {
		return (e) => {
			this.setState({ info: { ...this.state.info, [`${field}`]: e.target.value } });
		};
	}

	setEmail = (newVal) => {
		this.setState({ info: { ...this.state.info, email: newVal } });
	};

	setPassword = (e) => {
		if (this.state.info.confirmPassword !== '') {
			match = e.target.value === this.state.info.confirmPassword;
		}
		this.setState({ info: { ...this.state.info, password: e.target.value } });
	};

	setConfirmPassword = (e) => {
		match = this.state.info.password === e.target.value;
		this.setState({ info: { ...this.state.info, confirmPassword: e.target.value } });
	};

	setPopUp(field) {
		return (e) => {
			this.setState({ [`${field}`]: false });
		};
	}

	onSave = async () => {
		if (true) {
			try {
				const response = await fetch('url', {
					method: 'POST',
					header: {
						'Content-Type': 'application/json'
					},
					credentials: 'include',
					body: JSON.stringify(this.state.info)
				});
				if (response.status === 200) {
					const data = await response.json();
					if (data === true) {
						//set PopUp
					}
				} else {
				}
			} catch (err) {}
		}
	};

	render() {
		return (
			<div>
				<AddRetail
					save={this.state.save}
					error={this.state.error}
					message={this.state.message}
					setError={this.setPopUp('error')}
					setSave={this.setPopUp('save')}
					info={this.state.info}
					setBussNum={this.setStateValue('bussNum')}
					setConfirmPassword={this.setConfirmPassword}
					setContactName={this.setStateValue('contactName')}
					setEmail={this.setEmail}
					setPassword={this.setPassword}
					setStoreName={this.setStateValue('storeName')}
					match={match}
					onSave={this.onSave}
				/>
			</div>
		);
	}
}
