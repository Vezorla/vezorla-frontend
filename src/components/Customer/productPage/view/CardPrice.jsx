import React from 'react';
import { Card, CardContent, TextField, CardActions, Button } from '@material-ui/core';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

/**
 * @file CardPrice View Component
 * @author MinhL4m
 * @version 1.0
 */

/**
 * Card Price View Component
 * @param {price} - price of the product
 * @param {value} - user select quantity
 * @param {onChange} - handler for changing quantity
 * @param {onClick} - handler for add to cart
 */
const CardPriceComponent = ({ price, value, max, onChange, onClick }) => {
	return (
		<Card
			style={{
				border: '1px solid black',
				color: '#0C3658',
				width: '65%',
				marginLeft: 'auto',
				marginRight: 'auto',
				marginTop: '5vh',
				marginBottom: '5vh',
				textAlign: 'center'
			}}
		>
			<CardContent>
				<form className="someclass" noValidate autoComplete="off">
					<h1>${price}</h1>
					<TextField
						id="standard-basic"
						label="Quantity"
						helperText={value > max || value < 0 ? max === 0 ? 'Out of stock' : 'Invalid quantity' : ' '}
						type="number"
						value={max === 0 ? 0 : value}
						placeholder="Enter Quantity"
						error={value > max || value < 1 ? true : false}
						inputProps={{
							max: max,
							min: 1
						}}
						InputLabelProps={{
							shrink: true
						}}
						onChange={onChange}
					/>
					<CardActions>
						<Button
							size="medium"
							endIcon={<ShoppingCartIcon />}
							onClick={onClick} //this addCartHanle need to be pass from App so it can trigger with header
							style={{
								backgroundColor: '#D0C50A',
								color: '#0C3658',
								padding: '.75em',
								boxShadow: '0 5px 5px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)',
								margin: 'auto',
								maxWidth: '65%'
							}}
							disabled={value > max || value < 1 ? true : false}
						>
							Add to Cart
						</Button>
					</CardActions>
				</form>
			</CardContent>
		</Card>
	);
};

function CardPrice(props) {
	return <CardPriceComponent {...props} />;
}

export default CardPrice;
