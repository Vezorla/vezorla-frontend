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
			}
		};
		this.setStoreName = this.setStoreName.bind(this);
		this.setContactName = this.setContactName.bind(this);
		this.setEmail = this.setEmail.bind(this);
		this.setPassword = this.setPassword.bind(this);
		this.setConfirmPassword = this.setConfirmPassword.bind(this);
		this.setBussNum = this.setBussNum.bind(this);
		this.onSave = this.onSave.bind(this);
	}

	setStoreName = (e) => {
		this.setState({ info: { ...this.state.info, storeName: e.target.value } });
	};

	setContactName = (e) => {
		this.setState({ info: { ...this.state.info, contactName: e.target.value } });
	};

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

	setBussNum = (e) => {
		this.setState({ info: { ...this.state.info, bussNum: e.target.value } });
	};

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
					info={this.state.info}
					setBussNum={this.setBussNum}
					setConfirmPassword={this.setConfirmPassword}
					setContactName={this.setContactName}
					setEmail={this.setEmail}
					setPassword={this.setPassword}
					setStoreName={this.setStoreName}
					match={match}
					onSave={this.onSave}
				/>
			</div>
		);
	}
}
