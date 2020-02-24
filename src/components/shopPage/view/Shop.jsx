import React from 'react';
import { Grid, makeStyles } from '@material-ui/core';
import CardItem from './CardItem';

import loadingHOC from '../../common/HOC/LoadingHOC';

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

// Create CardList from list
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

function Shop(props) {
	const ShopComponent = loadingHOC(CardList)(props);
	return ShopComponent;
}

export default Shop;
