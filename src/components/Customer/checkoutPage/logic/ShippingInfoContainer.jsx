import React, { Component } from 'react';
import ProcessButtons from '../../../common/Stepper/ProcessButtons';
import NecessaryInput from '../../../common/Inputs/NecessaryInput/NecessaryInput';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Error from '../../../common/Error/Error';
import { withRouter } from 'react-router-dom';
/**
 * @file Shipping Component
 * @author MinhL4m
 * @version 1.0
 */

//TODO add toggle for pickup, make the shipping stop when false, and give it some time so the server can process then make fetch request to get discount

class ShippingInfo extends Component {
	constructor(props) {
		super(props);
		this.state = {
			info: {
				firstname: '',
				lastname: '',
				email: '',
				phone: '',
				address: '',
				city: '',
				postalCode: '',
				provice: '',
				country: '',
				pickup: false
			},
			error: false
		};
		this.handleNext = this.handleNext.bind(this);
		this.setFistname = this.setFistname.bind(this);
		this.setLastName = this.setLastName.bind(this);
		this.setPhone = this.setPhone.bind(this);
		this.setPostalCode = this.setPostalCode.bind(this);
		this.setEmail = this.setEmail.bind(this);
		this.setAddress = this.setAddress.bind(this);
		this.setCity = this.setCity.bind(this);
		this.setProvice = this.setProvice.bind(this);
		this.setCountry = this.setCountry.bind(this);
		this.setError = this.setError.bind(this);
		this.setPickup = this.setPickup.bind(this);
	}

	//----setter------
	setError() {
		this.setState({ error: false });
	}

	setFistname(e) {
		this.setState({
			info: {
				...this.state.info,
				firstname: e.target.value
			}
		});
	}
	setLastName(e) {
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
	setPickup() {
		this.setState({
			info: {
				...this.state.info,
				pickup: !this.state.info.pickup,
				postalCode: '',
				address: '',
				city: '',
				provice: '',
				country: ''
			}
		});
	}

	//----Did Mount-----
	componentDidMount() {
		this.fetchData();
	}

	//get customer info onload
	fetchData = async () => {
		try {
			const response = await fetch(`http://localhost:8080/api/customer/info`, {
				method: 'GET',
				credentials: 'include',
				headers: {
					Accept: 'application/json',
					'Content-Type': 'application/json'
				}
			});

			if (response.status === 200) {
				const data = await response.json();
				if (data !== null) {
					this.setState({ info: { ...data } });
				}
			} else if (response.state === 401) {
				this.props.history.push('/login');
			}
		} catch (err) {}
	};

	//----next button handler---
	handleNext = async () => {
		if (
			/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
				this.state.info.email
			) &&
			!this.state.pickup === /[A-Z]{1}\d{1}[A-Z]{1}\d{1}[A-Z]{1}\d{1}/g.test(this.state.info.postalCode)
		) {
			try {
				console.log(JSON.stringify({ ...this.state.info }));
				const response = await fetch('http://localhost:8080/api/customer/cart/checkout/shipping', {
					method: 'POST',
					headers: {
						Accept: 'application/json',
						'Content-Type': 'application/json'
					},
					body: JSON.stringify({ ...this.state.info }),
					credentials: 'include'
				});

				if (response.status === 200) {
					this.props.setStage(this.props.stage + 1);
				} else if (response.status === 401) {
					//unauthentical
				} else {
					this.setState({ error: true });
				}
			} catch (err) {
				this.setState({ error: true });
			}
		}
	};

	render() {
		return (
			<div>
				{this.state.error ? <Error message="something wrong" onClick={this.setError} /> : ''}
				<div>
					<h1>Shipping Information</h1>

					<div>
						<NecessaryInput
							info={this.state.info}
							setAddress={this.setAddress}
							setCity={this.setCity}
							setCountry={this.setCountry}
							setEmail={this.setEmail}
							setFirstname={this.setFistname}
							setLastname={this.setLastName}
							setPhone={this.setPhone}
							setPostalCode={this.setPostalCode}
							setProvice={this.setProvice}
							disabled={this.state.info.pickup}
						/>
					</div>
					<FormControlLabel
						control={<Checkbox checked={this.state.info.pickup} onChange={this.setPickup} value="pickup" />}
						label="Pickup at # street for free"
					/>
					<ProcessButtons
						stage={this.props.stage}
						handleBack={null}
						handleNext={this.handleNext}
						hasNext={true}
						complete={true}
					/>
				</div>
			</div>
		);
	}
}

export default withRouter(ShippingInfo);
