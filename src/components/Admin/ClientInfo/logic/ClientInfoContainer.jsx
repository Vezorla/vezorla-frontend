import React, { Component } from 'react';
import ClientInfo from '../view/ClientInfo';
import LoadingHOC from '../../../common/HOC/LoadingHOC';

export default class ClientInfoContainer extends Component {
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
	setFirstname(e) {
		this.setState({
			info: {
				...this.state.info,
				firstName: e.target.value
			}
		});
	}
	setLastname(e) {
		this.setState({
			info: {
				...this.state.info,
				lastName: e.target.value
			}
		});
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

	setAddress(e) {
		this.setState({
			info: {
				...this.state.info,
				address: e.target.value
			}
		});
	}
	setCity(e) {
		this.setState({
			info: {
				...this.state.info,
				city: e.target.value
			}
		});
	}
	setProvince(e) {
		this.setState({
			info: {
				...this.state.info,
				province: e.target.value
			}
		});
	}
	setCountry(e) {
		this.setState({
			info: {
				...this.state.info,
				country: e.target.value
			}
		});
	}
	setPassword(e) {
		this.setState({
			info: {
				...this.state.info,
				password: e.target.value
			}
		});
	}

	setError() {
		this.setState({ error: !this.state.error });
	}
	setReseted() {
		this.setState({ reseted: !this.state.reseted });
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
				<ClientInfo {...this.state} />
			</div>
		);
	}
}
