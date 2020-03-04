import React, { Component } from 'react';
import ProcessButtons from '../../common/Stepper/ProcessButtons';
import NecessaryInput from '../../common/Inputs/NecessaryInput/NecessaryInput';
import Error from '../../common/Error/Error';
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
				this.state.email
			) &&
			/[A-Z]{1}\d{1}[A-Z]{1}\d{1}[A-Z]{1}\d{1}/g.test(this.state.postalCode)
		) {
			try {
				const response = await fetch('url', {
					method: 'POST',
					headers: {
						Accept: 'application/json',
						Content: 'application/json'
					},
					body: JSON.stringify(...this.state.info),
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
				{this.state.error ? <Error message="something wrong" /> : ''}
				<div>
					<h1>Shipping Information</h1>

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
