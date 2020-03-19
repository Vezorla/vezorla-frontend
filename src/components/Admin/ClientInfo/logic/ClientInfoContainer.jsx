import React, { Component } from 'react';
import ClientInfo from '../view/ClientInfo';
import { withRouter } from 'react-router';

class ClientInfoContainer extends Component {
	constructor() {
		super();
		this.state = {
			info: {
				firstName: '',
				lastName: '',
				email: '',
				phoneNumber: '',
				address: '',
				city: '',
				province: '',
				postalCode: '',
				country: '',
				type: ''
			},
			stage: '',
			error: false,
			message: '',
			success: false,
			reseted: false,
			order: 0,
			value: 0
		};
	}

	//----setter------
	setStageValue(field) {
		return (e) => {
			this.setState({ info: { ...this.state.info, [`${field}`]: e.target.value } });
		};
	}

	setPopUp(field) {
		return (e) => {
			this.setState({ [`${field}`]: false });
		};
	}

	setPhone(newVal) {
		this.setState({
			info: {
				...this.state.info,
				phoneNumber: newVal
			}
		});
	}
	setPostalCode(newVal) {
		this.setState({
			info: {
				...this.state.info,
				postalCode: newVal
			}
		});
	}

	goBack() {
		this.props.history('/admin/client');
	}

	onSave = async () => {
		try {
			const response = await fetch('url', {
				method: 'PUT',
				headers: {
					'Content-Type': 'application/json'
				},
				credentials: 'include',
				body: JSON.stringify(this.state.info)
			});
			if (response.status === 200) {
				this.setState({ success: true, message: 'Information updated' });
			} else if (response.status >= 400) {
				this.setState({ error: true, message: 'something wrong!' });
			}
		} catch (err) {
			this.setState({ error: true, message: 'something wrong!' });
		}
	};

	onReset = async () => {
		try {
			const response = await fetch('url', {
				method: 'PUT',
				headers: {
					'Content-Type': 'application/json'
				},
				credentials: 'include',
				body: JSON.stringify(this.state.info.email)
			});
			if (response.status === 200) {
				const data = await response.json();
				if (data === true) {
					this.setState({ reseted: true, message: 'Password reseted' });
				}
			}
		} catch (error) {
			this.setState({ error: true, message: 'Cannot Reset Password' });
		}
	};

	fetchData = async () => {
		try {
			const response = await fetch('url');
			if (response.status === 200) {
				const data = await response.json();
				this.setState({ info: { ...data } });
				this.setState({ stage: 'done' });
			} else if (response.status >= 400) {
				this.setState({ stage: 'error' });
			}
		} catch (err) {
			this.setState({ stage: 'error' });
		}
	};

	fetchTotal = async () => {
		try {
			const response = await fetch('url');
			if (response.state === 200) {
				const data = await response.json();
				this.setState({ ...this.state, ...data });
			} else {
			}
		} catch (err) {}
	};

	componentDidMount() {
		this.setState({ stage: 'loading' });
		this.fetchTotal();
		this.fetchData();
	}

	render() {
		return (
			<div>
				<ClientInfo
					{...this.state}
					setFirstname={this.setStageValue('firstName')}
					setLastname={this.setStageValue('lastName')}
					setPhone={this.setPhone}
					setAddress={this.setStageValue('address')}
					setCity={this.setStageValue('city')}
					setProvince={this.setStageValue('province')}
					setPostalCode={this.setPostalCode}
					setCountry={this.setStageValue('country')}
					onSave={this.onSave}
					onReset={this.onReset}
					setError={this.setPopUp('error')}
					setReset={this.setPopUp('reseted')}
					goBack={this.goBack}
				/>
			</div>
		);
	}
}

export default withRouter(ClientInfoContainer);
