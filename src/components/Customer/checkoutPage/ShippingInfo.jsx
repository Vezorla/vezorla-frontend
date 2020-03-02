import React, { Component } from 'react';
import ProcessButtons from '../../common/Stepper/ProcessButtons';
import NecessaryInput from '../../common/Inputs/NecessaryInput/NecessaryInput';

/**
 * @file Shipping Component
 * @author MinhL4m
 * @version 1.0
 */


//TODO add toggle for pickup

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
			provice: '',
			country: '',
			pickup: false
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

				<NecessaryInput
					info={this.state}
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
		);
	}
}

export default ShippingInfo;
