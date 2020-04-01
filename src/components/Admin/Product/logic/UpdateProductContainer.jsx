import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import PopUp from '../../../common/PopUp/PopUp';
import Product from '../view/Product';
import LoadingHOC from '../../../common/HOC/LoadingHOC';

/**
 * @file Update Product Componenet 
 * @author MinhL4m
 * @version 1.0
 */

const FETCH_URL = 'http://localhost:8080/api/admin/inventory/product';
const ADD_URL = 'http://localhost:8080/api/admin/img/upload';
const DEL_URL = 'http://localhost:8080/api/admin';
const SAVE_URL = 'http://localhost:8080/api/admin/inventory/update ';

class UpdateProductContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			info: {
				prodId: '',
				name: '',
				price: 1,
				description: '',
				subdescription: '',
				harvestTime: new Date(),
				threshold: 0,
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
		this.setStateInfo = this.setStateInfo.bind(this);
		this.addImg = this.addImg.bind(this);
		this.delImg = this.delImg.bind(this);
		this.setHarvestTime = this.setHarvestTime.bind(this);
		this.setActive = this.setActive.bind(this);
		this.formatDate = this.formatDate.bind(this);
		this.setPrice = this.setPrice.bind(this);
		this.setThreshold = this.setThreshold.bind(this);
		this.goBack = this.goBack.bind(this);
	}

	setIndex = (value) => this.setState({ index: value });

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

	setError = () => {
		this.setState({ error: !this.state.error });
	};

	goBack = () => {
		this.props.history.push('/admin/inventory');
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

	componentDidMount() {
		this.fetchData();
		(async () => {
			const resposne1 = await fetch('http://localhost:8080/api/admin/img/get/4');
			const response2 = await resposne1.json();
			console.log(response2);

			this.setState({ imgs: [ `data:image/jpeg;base64,${response2.picByte}` ] });
		})();
	}

	// ---------------Re-deceide how to send img------------------
	addImg = async (e) => {
		const file = e.target.files[0];
		const formData = new FormData();

		formData.append('imgFile', file);
		try {
			const response = await fetch(ADD_URL, {
				method: 'POST',
				// headers: {
				// 	// If doesn't work change into img/xyz
				// 	'Content-Type':'multipart/form-data'
				// },
				credentials: 'include',
				mode: 'cors',
				body: formData
			});

			if (response.status === 200) {
				// this.fetchData();
			}
		} catch (err) {}
	};

	delImg = async (e) => {
		try {
			await fetch(DEL_URL, {
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
			const response = await fetch(`${FETCH_URL}/${this.props.prodId}`);
			if (response.status === 200) {
				const data = await response.json();
				// this.addImgs(data);
				this.setState({
					info: {
						prodId: this.props.prodId,
						name: data[0].name,
						price: data[0].price,
						description: data[0].description || '',
						subdescription: data[0].subdescription || '',
						harvestTime:
							new Date(new Date(`${data[0].harvestTime}`).valueOf() + 1000 * 3600 * 24) || new Date(),
						threshold: data[0].threshold || 0,
						active: data.active || true
					},
					stage: 'done'
				});
			} else if (response.status >= 400) {
				this.setState({ stage: 'error', message: 'something wrong' });
			}
		} catch (err) {
			this.setState({ stage: 'error', message: 'something wrong' });
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
					method: 'PUT',
					headers: {
						'Content-Type': 'application/json'
					},
					credentials: 'include',
					mode: 'cors',
					body: JSON.stringify({
						prodId: this.props.prodId,
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
					this.setState({ success: true, message: 'Product Updated' });
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

	render() {
		return (
			<div>
				<div className="test" />
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
					setName: this.setStateInfo('name'),
					setPrice: this.setPrice,
					setThreshold: this.setThreshold,
					setSubDescription: this.setStateInfo('subdescription'),
					setDescription: this.setStateInfo('description'),
					setHarvestTime: this.setHarvestTime,
					setIndex: this.setIndex,
					setActive: this.setActive,
					onSave: this.onSave,
					onCancel: this.goBack
				})}
			</div>
		);
	}
}

export default withRouter(UpdateProductContainer);
