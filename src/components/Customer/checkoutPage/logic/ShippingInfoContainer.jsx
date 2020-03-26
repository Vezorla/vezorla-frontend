import React, { Component } from 'react';
import ProcessButtons from '../../../common/Stepper/ProcessButtons';
import NecessaryInput from '../../../common/Inputs/NecessaryInput/NecessaryInput';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import PopUp from '../../../common/PopUp/PopUp';
import { withRouter } from 'react-router-dom';
/**
 * @file Shipping Component
 * @author MinhL4m
 * @version 1.0
 */

const GET_URL = 'http://localhost:8080/api/customer/info';
const POST_URL = 'http://localhost:8080/api/customer/cart/checkout/shipping';

class ShippingInfo extends Component {
	constructor(props) {
		super(props);
		this.state = {
			info: {
				firstName: '',
				lastName: '',
				email: '',
				phoneNum: '',
				address: '',
				city: '',
				postalCode: '',
				province: '',
				country: '',
				pickup: false
			},
			error: false,
			message: '',
			disbaledEmail: false
		};
		this.setStateInfo = this.setStateInfo.bind(this);
		this.handleNext = this.handleNext.bind(this);
		this.setPhoneNumber = this.setPhoneNumber.bind(this);
		this.setPostalCode = this.setPostalCode.bind(this);
		this.setEmail = this.setEmail.bind(this);
		this.setError = this.setError.bind(this);
		this.setPickup = this.setPickup.bind(this);
	}

	//----setter------

	setStateInfo(field) {
		return (e) => {
			this.setState({
				info: {
					...this.state.info,
					[`${field}`]: e.target.value
				}
			});
		};
	}

	setError() {
		this.setState({ error: false });
	}

	setPhoneNumber(newVal) {
		this.setState({
			info: {
				...this.state.info,
				phoneNum: newVal
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

	setPickup() {
		this.setState({
			info: {
				...this.state.info,
				pickup: !this.state.info.pickup,
				address: '',
				city: '',
				province: '',
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
			const response = await fetch(GET_URL, {
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
					this.setState({ disabledEmail: true, info: { ...data } });
				}
			} else if (response.state === 401) {
				this.props.history.push('/home');
			}
		} catch (err) {}
	};

	//----next button handler---
	handleNext = async () => {
		if (
			/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
				this.state.info.email
			) &&
		 /[A-Z]{1}\d{1}[A-Z]{1}\d{1}[A-Z]{1}\d{1}/g.test(this.state.info.postalCode)
		) {
			try {
				const response = await fetch(POST_URL, {
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
					this.props.history.push('/home');
				} else if (response.status === 406) {
					this.setState({ error: true, message: 'Missing fields please check again' });
				} else {
					this.setState({ error: true, message: 'Something wrong on Serer side' });
				}
			} catch (err) {
				this.setState({ error: true, message: 'Something wrong on Serer side' });
			}
		}
	};

	render() {
		return (
			<div>
				{this.state.error ? (
					<PopUp message={this.state.message} handleOk={this.setError} onClose={this.setError} />
				) : (
					''
				)}
				<div>
					<h1>Shipping Information</h1>

					<div>
						<NecessaryInput
							info={this.state.info}
							setAddress={this.setStateInfo('address')}
							setCity={this.setStateInfo('city')}
							setCountry={this.setStateInfo('country')}
							setEmail={this.setEmail}
							setFirstname={this.setStateInfo('firstName')}
							setLastname={this.setStateInfo('lastName')}
							setPhone={this.setPhoneNumber}
							setPostalCode={this.setPostalCode}
							setProvince={this.setStateInfo('province')}
							disabled={this.state.info.pickup}
							disbaledEmail={this.state.info.disbaledEmail}
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
