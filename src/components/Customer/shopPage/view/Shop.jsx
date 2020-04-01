import React from 'react';
import { Grid, makeStyles } from '@material-ui/core';
import CardItem from './CardItem';

import loadingHOC from '../../../common/HOC/LoadingHOC';

/**
 * @file Shop View Componet
 * @author MinhL4m
 * @version 1.0
 */

/**
  * Component Style
  */
const useStyle = makeStyles((theme) => ({
	grid: {
		[theme.breakpoints.between('sm', 'xs')]: {
			width: '100%'
		},
		[theme.breakpoints.up('xs')]: {
			width: '80%',
			margin: '0 auto'
		}
	}
}));

/**
 * create multiple CardItem component from list
 * @param {array} list - list of product
 */
const CardList = ({ list, imgs }) => {
	const classes = useStyle();

	// create a list of cards
	const returnList = list.map((product, index) => {
		return <CardItem key={product.prodId} product={product} img={imgs[index]} />;
	});

	//return the list with grid wrapper
	return (
		<Grid className={classes.grid} container xs={12} spacing={3}>
			{returnList}
		</Grid>
	);
};

/**
 * 
 * @param {Object} - props of this functional component
 * @returns if props.stage === 'loading', return Loading Component. If props.stage === 'done', return CardList
 */
function Shop(props) {
	return loadingHOC(CardList)({ ...props, message: 'Something wrong!!!' });
}

export default Shop;
