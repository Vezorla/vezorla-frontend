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
const CardList = ({ list }) => {
	const classes = useStyle();

	//create a cartlist
	const returnList = list.map((product) => {
		return <CardItem key={product.prodId} product={product} />;
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
	return loadingHOC(CardList)({ ...props, message: 'something wrong it not you! it is us' });
}

export default Shop;
