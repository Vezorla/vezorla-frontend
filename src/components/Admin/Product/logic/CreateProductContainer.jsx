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

const DEL_URL = 'url';
const ADD_URL = 'url';
const SAVE_URL = 'url';

class CreateProductContainer extends Component {
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
			const response = await fetch(ADD_URL, {
				method: 'POST',
				headers: {
					// If doesn't work change into img/xyz
					'Content-Type': 'img/*'
				},
				mode: 'cors',
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
			const response = await fetch(DEL_URL, {
				method: 'DELETE',
				header: {
					'Content-Type': 'application-json'
				},
				credentials: 'include',
				mode: 'cors',
				body: JSON.stringify(this.state.index)
			});
		} catch (err) {
			this.setState({ error: true, message: 'image is not deleted' });
		}
	};

	onSave = async () => {
		try {
			const response = await fetch(SAVE_URL, {
				method: 'POST',
				header: {
					'Content-Type': 'application-json'
				},
				credentials: 'include',
				mode: 'cors',
				body: JSON.stringify({ ...this.state.info })
			});

			if (response.status === 200) {
				this.setState({ success: true, message: 'Product Created' });
			} else {
				this.setState({ error: true, message: 'Oppsss' });
			}
		} catch (err) {
			this.setState({ error: true, message: 'Oppsss' });
		}
	};

	render() {
		return (
			<div>
				{this.state.error ? (
					<PopUp
						label="Error"
						message={this.state.message}
						onClose={this.setError}
						handleOk={this.setError}
					/>
				) : (
					''
				)}
				{this.state.success ? (
					<PopUp label="Success" message={this.state.message} onClose={this.goBack} handleOk={this.goBack} />
				) : (
					''
				)}
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

export default withRouter(CreateProductContainer);
