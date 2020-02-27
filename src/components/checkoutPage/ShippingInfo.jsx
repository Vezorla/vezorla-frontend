import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import ProcessButtons from '../common/Stepper/ProcessButtons';

import PhoneInpute from '../common/Inputs/Phone/PhoneInput';
import EmailInput from '../common/Inputs/Email/EmailInput';
import PostalCodeInput from '../common/Inputs/PostalCode/PostalCodeInput';
import PhoneInput from '../common/Inputs/Phone/PhoneInput';

class ShippingInfo extends Component {
	constructor(props) {
		super(props);
		this.state = {
			firstname: '',
			lastname: '',
			email: '',
			phone: '',
			address: '',
			city: '',
			postalCode: '',
			pickup: false
		};
		this.setPhone = this.setPhone.bind(this);
		this.setPostalCode = this.setPostalCode.bind(this);
		this.setEmail = this.setEmail.bind(this);
		this.handleNext = this.handleNext.bind(this);
	}

	//----setter------
	setPhone(phoneVal) {
		this.setState({ phone: phoneVal });
	}
	setPostalCode(postalCodeVal) {
		this.setState({ postalCode: postalCodeVal });
	}
	setEmail(emailVal) {
		this.setState({ email: emailVal });
	}

	componentDidMount() {
		// TODO check account if user have account then auto fill the fill
	}

	//get customer info onload
	fetchData = async () => {
		this.setStage('loading');

		const data = await fetch(`http://localhost:8080/api/customer/info`, {
			method: 'GET',
			credentials: 'include',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json'
			}
		})
			.then((res) => {
				return res.json();
			})
			.catch((err) => {
				return null;
			});
		if (data !== null) {
			this.setState({ ...data });

			this.setPhone(data.phone);
			this.setPostalCode(data.postalCode);
		}
	};

	//----next button handler---
	handleNext = async () => {
		// if(this.checkComplete()){
		// let data = ''
		// const jsonData = await fetch('url', {
		//     method: 'PUT',
		//     header: {
		//         'accept':'application/json',
		//         'Content-Type': 'application/json'
		//     },
		//     body: JSON.stringify(this.state.info)
		// })

		// if(jsonData.ok){
		//     data = await jsonData.json();
		// }

		// if(data){
		console.log(this.state);
		this.props.setStage(this.props.stage + 1);
		// }
		// }else{
		// change the input
		// }
	};

	render() {
		return (
			<div>
				<h1>Shipping Information</h1>
				<TextField
					autoFocus
					label="First Name"
					value={this.state.firstname}
					onChange={(e) => {
						const target = e.target;
						this.setState({
							firstname: target.value
						});
					}}
				/>

				<TextField
					label="Last Name"
					value={this.state.lastname}
					onChange={(e) => {
						const target = e.target;
						this.setState({
							lastname: target.value
						});
					}}
				/>

				<EmailInput value={this.state.email} helperText="Incorrect Format" onChange={this.setEmail} />

				<PhoneInput value={this.state.phone} onChange={this.setPhone} />

				<TextField
					required
					label="Shipping Address"
					value={this.state.address}
					onChange={(e) => {
						const target = e.target;
						this.setState({
							address: target.value
						});
					}}
				/>

				<TextField
					required
					label="City"
					value={this.state.city}
					onChange={(e) => {
						const target = e.target;
						this.setState({
							city: target.value
						});
					}}
				/>

				<PostalCodeInput
					value={this.state.postalCode}
					helperText="Invalid Post Code"
					onChange={this.setPostalCode}
				/>

				<ProcessButtons
					stage={this.props.stage}
					handleBack={null}
					handleNext={this.handleNext}
					hasNext={true}
					complete={true}
				/>
			</div>
		);
	}
}

export default ShippingInfo;
