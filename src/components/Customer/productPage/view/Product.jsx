import React from 'react';
import CardPriceContainer from '../logic/CardPriceContainer';
import Stepper from '../../../common/Stepper/Stepper';
import loadingHOC from '../../../common/HOC/LoadingHOC';

/**
 * @file Product View Component
 * @author MinhL4m
 * @version 1.0
 */

const ProductDetail = ({ product, imgs, quantity, price, value, max, addCartHandler }) => {
	return (
		<div>
			<h1>{product.name}</h1>
			<Stepper imgs={imgs} />
			<CardPriceContainer
				price={price}
				value={value}
				quantity={quantity}
				max={max}
				addCartHandler={addCartHandler}
				id={product.prodId}
			/>

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
