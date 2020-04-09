import React from 'react';
import {Container, Grid, Typography} from '@material-ui/core';
import loadingHOC from '../../../common/HOC/LoadingHOC';
import CardItem from './CardItem';
import globalStyles from "../../../../assets/styles/styles";

/**
 * @file Shop View Componet
 * @author MinhL4m
 * @version 1.0
 */

/**
 * create multiple CardItem component from list
 * @param {array} list - list of product
 */
const CardList = ({list, imgs}) => {
  const styleGlobal = globalStyles();

  // create a list of cards
  const returnList = list.map((product, index) => {
    return <CardItem key={product.prodId} product={product} img={imgs[index]}/>;
  });

  //return the list with grid wrapper
  return (
    <Container maxWidth={false} className={styleGlobal.containerMain}>
      <Typography
        variant="h4"
        align="center"
        gutterBottom
      >
        Shop
      </Typography>
      <Grid container spacing={2}>
        {returnList}
      </Grid>
    </Container>
  );
};

/**
 *
 * @param {Object} - props of this functional component
 * @returns if props.stage === 'loading', return Loading Component. If props.stage === 'done', return CardList
 */
function Shop(props) {
  return loadingHOC(CardList)({...props, message: 'Something wrong!!!'});
}

export default Shop;
