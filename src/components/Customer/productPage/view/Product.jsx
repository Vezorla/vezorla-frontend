import React from 'react';
import CardPriceContainer from '../logic/CardPriceContainer';
import Stepper from '../../../common/Stepper/Stepper';
import loadingHOC from '../../../common/HOC/LoadingHOC';

/**
 * @file Product View Component
 * @author MinhL4m
 * @version 1.0
 */

/**
  * 
  * @param {products} - product
  * @param {imgs} - list of images 
  * @param {price} - price of the product
  * @param {value} - user select quantity 
  * @param {max} - current quantity in storage of this product
  * @param {addCartHandler} - handler for adding to cart 
  */
const ProductDetail = ({ product, imgs, price, max, addCartHandler }) => {
	return (
		<div>
			<h1>{product.name}</h1>
			<Stepper imgs={imgs} default={true} />
			<CardPriceContainer price={product.price} max={max} addCartHandler={addCartHandler} id={product.prodId} />

			<section style={{ marginLeft: '8%', marginRight: '8%', color: '#0C3658' }}>
				<h1 style={{ fontSize: '2em', letterSpacing: '0.09em', textTransform: 'uppercase' }}>Description</h1>
				<span style={{ fontSize: '1.3em', letterSpacing: '0.07em' }}>{product.description}</span>
			</section>
		</div>
	);
};

function Product(props) {
	const ProductComponent = loadingHOC(ProductDetail)({ ...props, message: 'something wrong' });
	return ProductComponent;
}

export default Product;
