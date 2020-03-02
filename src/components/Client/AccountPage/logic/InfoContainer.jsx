import React, { Component } from 'react';
import LoadingHOC from '../../../common/HOC/LoadingHOC';
import Info from '../view/Info';
import loadingHOC from '../../../common/HOC/LoadingHOC';
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
		this.setFistname = this.setFistname.bind(this);
		this.setLastName = this.setLastName.bind(this);
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
	setFistname(e) {
		const target = e.target;
		this.setState({
			firstname: target.value
		});
	}
	setLastName(e) {
		const target = e.target;
		this.setState({
			lastname: target.value
		});
	}
	setPhone(newVal) {
		this.setState({
			phone: newVal
		});
	}
	setPostalCode(newVal) {
		this.setState({
			postalCode: newVal
		});
	}
	setEmail(newVal) {
		this.setState({
			email: newVal
		});
	}
	setAddress(e) {
		const target = e.target;
		this.setState({
			address: target.value
		});
	}
	setCity(e) {
		const target = e.target;
		this.setState({
			city: target.value
		});
	}
	setProvice(e) {
		const target = e.target;
		this.setState({
			provice: target.value
		});
	}
	setCountry(e) {
		const target = e.target;
		this.setState({
			country: target.value
		});
	}
	setPassword(e) {
		const target = e.taget;
		this.setState({
			password: target.value
		});
	}
	setSubscription(e) {
		const target = e.target;
		this.setState({
			subscription: target.value
		});
	}

	fetchData = async () => {
		this.setState({ stage: 'loading' });
		try {
			const response = await fetch('url');
			if (response.status === 200) {
				const data = response.json();
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

	componentDidMount() {
		this.fetchData();
	}

	render() {
		return LoadingHOC(Info)({
			...this.state,
			setFirstname: this.setFistname,
			setLastname: this.setLastName,
			setEmail: this.setEmail,
			setAddress: this.setAddress,
			setCity: this.setCity,
			setCountry: this.setCountry,
			setPassword: this.setPassword,
			setPhone: this.setPhone,
			setPostalCode: this.setPostalCode,
			setProvice: this.setProvice,
			setSubscription: this.setSubscription
		});
	}
}
