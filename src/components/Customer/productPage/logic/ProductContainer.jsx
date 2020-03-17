import React, { Component } from 'react';
import Product from '../view/Product';
import LoadingHOC from '../../../common/HOC/LoadingHOC';

/**
 * @file Product Logic Component
 * @author MinhL4m
 * @version 1.0
 */

/**
  * Product Logic Class Component
  */
export default class ProductContainer extends Component {
	//constructor
	constructor(props) {
		super(props);
		this.state = {
			product: {
				prodId: '',
				name: '',
				description: '',
				subdescription: '',
				harvestTime: '',
				threshhold: '',
				price: '',
				oldPrice: '',
				active: ''
			},
			max: '1',
			stage: '',
			imgs: []
		};
		this.setProduct = this.setProduct.bind(this);
		this.setMax = this.setMax.bind(this);
		this.setStage = this.setStage.bind(this);
	}

	//----Setters----
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

	//--- get max quantity for this product----
	fetchQuantity = async () => {
		try {
			const responseQuantity = await fetch(
				`http://localhost:8080/api/customer/inventory/product/quantity/${this.props.prodId}`
			);
			if (responseQuantity.status === 200) {
				const max = await responseQuantity.json();
				if (max !== 0 || max !== null) {
					this.setMax(max);
				}
			}
		} catch (err) {}
	};

	//----get product information----
	fetchProductInfo = async () => {
		try {
			const responseQuantity = await fetch(
				`http://localhost:8080/api/customer/inventory/product/${this.props.prodId}`
			);
			if (responseQuantity.status === 200) {
				const product = await responseQuantity.json();
				if (product !== null) {
					this.setProduct({ ...product });
					this.setImgs(product.imageOne, product.imageTwo, product.imageThree, product.imageMain);
					this.setStage('done');
				}
			} else if (responseQuantity.status > 400) {
				this.setStage('error');
			}
		} catch (err) {
			this.setStage('error');
		}
	};

	// fetch data on mount
	componentDidMount() {
		(async () => {
			this.setStage('loading');
			await this.fetchQuantity();
			this.fetchProductInfo();
		})();
	}

	render() {
		return <Product {...this.state} addCartHandler={this.props.addCartHandler} />;
	}
}
