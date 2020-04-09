import React from 'react';
import {Container, Typography} from '@material-ui/core';
import CardPriceContainer from '../logic/CardPriceContainer';
import Stepper from '../../../common/Stepper/Stepper';
import loadingHOC from '../../../common/HOC/LoadingHOC';
import globalStyles from "../../../../assets/styles/styles";

/**
 * @file Product View Component
 * @author MinhL4m
 * @version 1.0
 */

/**
 * @param {products} - product
 * @param {imgs} - list of images
 * @param {price} - price of the product
 * @param {value} - user select quantity
 * @param {max} - current quantity in storage of this product
 * @param {addCartHandler} - handler for adding to cart
 */
const ProductDetail = ({product, imgs, max, addCartHandler}) => {
  const classesGlobal = globalStyles();

  return (
    <Container className={classesGlobal.containerMain}>
      <Stepper imgs={imgs} default={true}/>
      <Typography
        variant="h6"
        align={"center"}
        gutterBottom
      >
        {product.name}
      </Typography>
      <CardPriceContainer
        price={product.price}
        max={max}
        addCartHandler={addCartHandler}
        id={product.prodId}/>
      <Typography
        align={"justify"}
        style={{marginTop: "1rem"}}
      >
        {product.description}
      </Typography>
    </Container>
  );
};

function Product(props) {
  const ProductComponent = loadingHOC(ProductDetail)({...props, message: 'something wrong'});
  return ProductComponent;
}

export default Product;
