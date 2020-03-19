import React, { Component } from 'react';
import PopUp from '../../../common/PopUp/PopUp';
import Product from '../view/Product';
import LoadingHOC from '../../../common/HOC/LoadingHOC';

export default class UpdateProductContainer extends Component {
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
	}

	setIndex = (value) => this.setState({ index: value });

	setStageInfo(field) {
		return (e) => {
			this.setState({ info: { ...this.state.info, [`${field}`]: e.target.value } });
		};
	}

	goBack = () => {
		this.props.history.push('/admin/inventory');
	};

	setError = () => {
		this.setState({ error: !this.state.error });
	};

	// ---------------Re-deceide how to send img------------------
	addImg = async (e) => {
		const file = e.target.files[0];
		try {
			const response = await fetch('url', {
				method: 'POST',
				header: {
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
				headers: {
					'Content-Type': 'application-json'
				},
				credentials: 'include',
				body: JSON.stringify(this.state.index)
			});
		} catch (err) {
			this.setState({ error: true, message: 'image is not deleted' });
		}
	};

	fetchData = async () => {
		this.setState({ stage: 'loading' });
		try {
			const response = await fetch('url');
			if (response.status === 200) {
				const data = await response.json();
				this.addImgs(data);
				this.setState({ info: { ...data }, stage: 'done' });
			}
		} catch (err) {
			this.setState({ stage: 'error' });
		}
	};

	onSave = async () => {
		try {
			const response = await fetch('url', {
				method: 'POST',
				header: {
					'Content-Type': 'application/json'
				},
				credentials: 'include',
				body: JSON.stringify({ ...this.state.info })
			});
			if (response.status === 200) {
				this.setState({ success: true, message: 'Product Updated' });
			} else {
				this.setState({ error: true, message: 'Something Wrong' });
			}
		} catch (err) {
			this.setState({ error: true, message: 'Something Wrong' });
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
					onCancel: this.goBack,
					setIndex: this.setIndex
				})}
			</div>
		);
	}
}
