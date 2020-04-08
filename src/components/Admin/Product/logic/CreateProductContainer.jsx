import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import Product from '../view/Product';
import PopUp from '../../../common/PopUp/PopUp';
import LoadingHOC from '../../../common/HOC/LoadingHOC';

/**
 * @file Create Product Componenet 
 * @author MinhL4m
 * @version 1.0
 */

const ADD_URL = 'http://localhost:8080/api/admin/img/upload';
const SAVE_URL = 'http://localhost:8080/api/admin/inventory/create';

class CreateProductContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			info: {
				name: '',
				price: 1,
				description: '',
				subdescription: '',
				harvestTime: new Date(),
				threshold: 0,
				active: true
			},

			stage: '',
			error: false,
			success: false,
			message: '',
			added: false,
			imageName: ''
		};
		this.setStateInfo = this.setStateInfo.bind(this);
		this.setHarvestTime = this.setHarvestTime.bind(this);
		this.setActive = this.setActive.bind(this);
		this.formatDate = this.formatDate.bind(this);
		this.setPrice = this.setPrice.bind(this);
		this.setThreshold = this.setThreshold.bind(this);
		this.goBack = this.goBack.bind(this);
		this.addImg = this.addImg.bind(this);
	}

	setStateInfo(field) {
		return (e) => {
			this.setState({ info: { ...this.state.info, [`${field}`]: e.target.value } });
		};
	}
	setPrice(e) {
		if (e.target.value !== '') {
			this.setState({ info: { ...this.state.info, price: e.target.value } });
		}
	}

	setThreshold(e) {
		if (e.target.value !== '') {
			this.setState({ info: { ...this.state.info, threshold: e.target.value } });
		}
	}

	setHarvestTime(value) {
		this.setState({ info: { ...this.state.info, harvestTime: value } });
	}
	setActive(e) {
		this.setState({ info: { ...this.state.info, active: e.target.checked } });
	}

	goBack = () => {
		this.props.history.push('/admin/inventory');
	};

	addImg = async (e) => {
		const file = e.target.files[0];
		if (file.type === 'image/png' || file.type === 'image/jpeg') {
			const formData = new FormData();

			formData.append('imgFile', file);
			try {
				const response = await fetch(`${ADD_URL}`, {
					method: 'POST',
					credentials: 'include',
					mode: 'cors',
					body: formData
				});

				if (response.status === 200) {
					this.setState({ added: true, message: 'Image has been added', imageName: file.name });
				}
			} catch (err) {
			}
		} else {
			this.setState({ error: true, message: 'This type of file is not supported' });
		}
	};

	onSave = async () => {
		if (
			this.state.info.name !== '' &&
			this.state.info.price !== '' &&
			this.state.info.price > 0 &&
			this.state.info.threshold !== '' &&
			this.state.info.threshold >= 0
		) {
			let date = this.formatDate(this.state.info.harvestTime);

			try {
				const response = await fetch(SAVE_URL, {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json'
					},
					credentials: 'include',
					mode: 'cors',
					body: JSON.stringify({
						name: this.state.info.name,
						price: this.state.info.price,
						description: this.state.info.description,
						subdescription: this.state.info.subdescription,
						harvestTime: date,
						threshold: this.state.info.threshold,
						active: this.state.info.active
					})
				});

				if (response.status === 200) {
					this.setState({ success: true, message: 'Product Created' });
				} else {
					this.setState({ error: true, message: 'Oppsss' });
				}
			} catch (err) {
				this.setState({ error: true, message: 'Oppsss' });
			}
		} else {
			this.setState({ error: true, message: 'Please field all necessary input' });
		}
	};

	formatDate(date) {
		var d = new Date(date),
			month = '' + (d.getMonth() + 1),
			day = '' + d.getDate(),
			year = d.getFullYear();

		if (month.length < 2) month = '0' + month;
		if (day.length < 2) day = '0' + day;

		return [ year, month, day ].join('-');
	}

	render() {
		return (
			<div>
				{this.state.error ? (
					<PopUp
						label="Error"
						message={this.state.message}
						onClose={() => this.setState({ error: false })}
						handleOk={() => this.setState({ error: false })}
					/>
				) : (
					''
				)}
				{this.state.success ? (
					<PopUp label="Success" message={this.state.message} onClose={this.goBack} handleOk={this.goBack} />
				) : (
					''
				)}
				{this.state.added ? (
					<PopUp
						label="Success"
						message={this.state.message}
						onClose={() => this.setState({ added: false })}
						handleOk={() => this.setState({ added: false })}
					/>
				) : (
					''
				)}
				{LoadingHOC(Product)({
					...this.state,
					create: true,
					setName: this.setStateInfo('name'),
					setPrice: this.setPrice,
					setThreshold: this.setThreshold,
					setSubDescription: this.setStateInfo('subdescription'),
					setDescription: this.setStateInfo('description'),
					setHarvestTime: this.setHarvestTime,
					setActive: this.setActive,
					onSave: this.onSave,
					onCancel: this.goBack,
					addImg: this.addImg
				})}
			</div>
		);
	}
}

export default withRouter(CreateProductContainer);
