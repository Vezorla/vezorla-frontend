import React, { Component } from 'react';
import Product from '../view/Product';

export default class ProductContainer extends Component {
	//constructor
	constructor(props) {
		super(props);
		this.state = {
			product: '',
			max: '1',
			stage: '',
			imgs: []
		};
		this.setProduct = this.setProduct.bind(this);
		this.setMax = this.setMax.bind(this);
		this.setStage = this.setStage.bind(this);
		this.setImgs = this.setImgs.bind(this);
	}

	//setter for state
	setProduct(productVal) {
		this.setState({ product: productVal });
	}

	setMax(maxVal) {
		this.setState({ max: maxVal });
	}

	setStage(stageVal) {
		this.setState({ stage: stageVal });
	}

	setImgs(imageMain, imageOne, imageTwo, imageThree) {
		let images = [];
		if (imageOne != null) {
			images.push(imageOne);
		}
		if (imageTwo != null) {
			images.push(imageTwo);
		}
		if (imageThree != null) {
			images.push(imageThree);
		}
		if (imageMain != null) {
			images.push(imageMain);
		}

		this.setState({ imgs: images });
	}

	//fetch quantity and product information
	fetchData = async () => {
		this.setStage('loading');
		const jsonQuantity = await fetch(
			`http://localhost:8080/api/customer/inventory/product/quantity/${this.props.prodId}`
		);
		if (jsonQuantity.ok) {
            const max = await jsonQuantity.json();
            this.setMax(max);
		}
		const data = await fetch(`http://localhost:8080/api/customer/inventory/product/${this.props.prodId}`, {
			method: 'GET',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json'
			}
		})
			.then((res) => {
				return res.json();
			})
			.catch((err) => {
				this.setStage('error');
				return null;
			});
		if (data !== null) {
			this.setProduct(data);
			this.setImgs(data.imageOne, data.imageTwo, data.imageThree, data.imageMain);
			this.setStage('done');
		}
	};

	// fetch data again when the component mount
	componentDidMount() {
        this.fetchData();
	}

	render() {
		return <Product {...this.state} addCartHandler={this.props.addCartHandler}/>;
	}
}
