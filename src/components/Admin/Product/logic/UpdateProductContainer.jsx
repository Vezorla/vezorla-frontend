import React, { Component } from 'react';
import PopUp from '../../../common/';

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

	onCancel = () => {
		this.props.history.push('/admin/inventory');
	};

	onSave;

	render() {
		return <div />;
	}
}
