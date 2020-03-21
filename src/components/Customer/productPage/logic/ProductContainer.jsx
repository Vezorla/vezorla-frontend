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
					this.setState({ max: max });
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
					this.setState({ product: { ...product } });
					this.setImgs(product.imageOne, product.imageTwo, product.imageThree, product.imageMain);
					this.setState({ stage: 'done' });
				}
			} else if (responseQuantity.status > 400) {
				this.setState({ stage: 'error' });
			}
		} catch (err) {
			this.setState({ stage: 'error' });
		}
	};

	// fetch data on mount
	componentDidMount() {
		(async () => {
			this.setState({ stage: 'loading' });
			await this.fetchQuantity();
			this.fetchProductInfo();
		})();
	}

	render() {
		return <Product {...this.state} addCartHandler={this.props.addCartHandler} />;
	}
}
