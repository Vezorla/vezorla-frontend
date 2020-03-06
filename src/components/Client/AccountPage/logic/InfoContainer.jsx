import React, { Component } from 'react';
import Info from '../view/Info';
import Button from '@material-ui/core/Button';

export default class InfoContainer extends Component {
	constructor() {
		super();
		this.state = {
			info: {
				firstname: '',
				lastname: '',
				email: '',
				phone: '',
				address: '',
				city: '',
				provice: '',
				postalCode: '',
				country: '',
				password: '',
				subscription: ''
			},
			stage: ''
		};
		this.setFirstname = this.setFirstname.bind(this);
		this.setLastname = this.setLastname.bind(this);
		this.setPhone = this.setPhone.bind(this);
		this.setPostalCode = this.setPostalCode.bind(this);
		this.setEmail = this.setEmail.bind(this);
		this.setAddress = this.setAddress.bind(this);
		this.setCity = this.setCity.bind(this);
		this.setProvice = this.setProvice.bind(this);
		this.setCountry = this.setCountry.bind(this);
		this.setPassword = this.setPassword.bind(this);
		this.setSubscription = this.setSubscription.bind(this);
	}

	//----setter------
	setFirstname(e) {
		this.setState({
			info: {
				...this.state.info,
				firstname: e.target.value
			}
		});
	}
	setLastname(e) {
		this.setState({
			info: {
				...this.state.info,
				lastname: e.target.value
			}
		});
	}
	setPhone(newVal) {
		this.setState({
			info: {
				...this.state.info,
				phone: newVal
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
	setEmail(newVal) {
		this.setState({
			info: {
				...this.state.info,
				email: newVal
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
	setProvice(e) {
		this.setState({
			info: {
				...this.state.info,
				provice: e.target.value
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
	setSubscription(e) {
		this.setState({
			info: {
				...this.state.info,
				subscription: e.target.value
			}
		});
	}

	fetchData = async () => {
		this.setState({ stage: 'loading' });
		try {
			const response = await fetch('url');
			if (response.status === 200) {
				const data = await response.json();

				if (data.length !== 0 && data !== undefined && data !== null) {
					this.setState({ info: { ...data } });
					this.setState({ stage: 'done' });
				}
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
					setFirstname={this.setFirstname}
					setLastname={this.setLastname}
					setEmail={this.setEmail}
					setAddress={this.setAddress}
					setCity={this.setCity}
					setCountry={this.setCountry}
					setPassword={this.setPassword}
					setPhone={this.setPhone}
					setPostalCode={this.setPostalCode}
					setProvice={this.setProvice}
					setSubscription={this.setSubscription}
				/>
				<Button variant="contained" color="primary" onClick={this.onClick}>
					Save
				</Button>
			</div>
		);
	}
}
