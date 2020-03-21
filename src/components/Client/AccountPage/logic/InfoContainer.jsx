import React, { Component } from 'react';
import Info from '../view/Info';

export default class InfoContainer extends Component {
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
				password: '',
				subscription: false
			},
			stage: ''
		};

		this.setPhone = this.setPhone.bind(this);
		this.setPostalCode = this.setPostalCode.bind(this);
		this.setSubscription = this.setSubscription.bind(this);
		this.setStateValue = this.setStateValue.bind(this);
	}

	//----setter------

	setStateValue(field) {
		return (e) => {
			this.setState({ info: { ...this.state.info, [`${field}`]: e.target.value } });
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
	setSubscription(e) {
		this.setState({
			info: {
				...this.state.info,
				subscription: e.target.checked
			}
		});
	}

	fetchData = async () => {
		this.setState({ stage: 'loading' });
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

	onClick = async () => {
		try {
			const response = await fetch('url', {
				methods: 'PUT',
				headers: {
					'Content-Type': 'application/json'
				},
				credentials: 'include',
				body: JSON.stringify(this.state.info)
			});
			if (response.status === 200) {
				//do something that not decide
			} else if (response.status === 406) {
				this.props.setMessage('Input incorrect! Please check again');
				this.props.setError();
			} else {
				this.props.setMessage('Something wrong');
				this.props.setError();
			}
		} catch (err) {
			this.props.setMessage('Something wrong');
			this.props.setError();
		}
	};

	componentDidMount() {
		// this.fetchData();
	}

	render() {
		return (
			<div>
				<Info
					{...this.state}
					setFirstname={this.setStateValue('firstName')}
					setLastname={this.setStateValue('lastName')}
					setAddress={this.setStateValue('address')}
					setCity={this.setStateValue('city')}
					setCountry={this.setStateValue('country')}
					setPassword={this.setStateValue('password')}
					setPhone={this.setPhone}
					setPostalCode={this.setPostalCode}
					setProvince={this.setStateValue('province')}
					setSubscription={this.setSubscription}
					onClick={this.onClick}
				/>
			</div>
		);
	}
}
