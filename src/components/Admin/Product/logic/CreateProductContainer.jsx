import React, { Component } from 'react';
import Product from '../view/Product';
import PopUp from '../../../common/PopUp/PopUp';
import LoadingHOC from '../../../common/HOC/LoadingHOC';

export default class CreateProductContainer extends Component {
	constructor() {
		super();
		this.state = {
			info: {
				cost: 0,
				price: 0,
				quatity: 0,
				warehouse: '',
				description: '',
				active: true
			},
			imgs: [],
			index: 0,
			stage: '',
			error: false,
			success: false,
			message: ''
		};
		this.setIndex = this.setIndex.bind(this);
		this.setStageInfo = this.setStageInfo.bind(this);
		this.addImg = this.addImg.bind(this);
		this.delImg = this.delImg.bind(this);
	}

	setIndex = (value) => this.setState({ index: value });

	setStageInfo(field) {
		return (e) => {
			this.setState({ info: { ...this.state.info, [`${field}`]: e.target.value } });
		};
	}

	setError = () => {
		this.setState({ error: !this.state.error });
	};

	goBack = () => {
		this.props.history.push('/admin/inventory');
	};

	// ---------------Re-deceide how to send img------------------
	addImg = async (e) => {
		const file = e.target.files[0];
		try {
			const response = await fetch('url', {
				method: 'POST',
				headers: {
					// If doesn't work change into img/xyz
					'Content-Type': 'img/*'
				},
				credentials: 'include',
				body: file
			});

			if (response.status === 200) {
				this.fetchData();
			}
		} catch (err) {}
	};

	delImg = async (e) => {
		try {
			const response = await fetch('url', {
				method: 'DELETE',
				header: {
					'Content-Type': 'application-json'
				},
				credentials: 'include',
				body: JSON.stringify(this.state.index)
			});
		} catch (err) {
			this.setState({ error: true, message: 'image is not deleted' });
		}
	};

	render() {
		return (
			<div>
				{this.state.error ? <PopUp label="Error" message={this.state.message} onClick={this.setError} /> : ''}
				{this.state.success ? <PopUp label="Success" message={this.state.message} onClick={this.goBack} /> : ''}
				{LoadingHOC(Product)({
					...this.state,
					addImg: this.addImg,
					delImg: this.delImg,
					setCost: this.setStageInfo('cost'),
					setPrice: this.setStageInfo('price'),
					setQuantity: this.setStageInfo('price'),
					setWarehouse: this.setStageInfo('warehouse'),
					setDescription: this.this.setStageInfo('description'),
					onSave: this.onSave,
					onCancel: this.goBack
				})}
			</div>
		);
	}
}
