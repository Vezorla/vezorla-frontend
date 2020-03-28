import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import TextField from '@material-ui/core/TextField';
import '../style.css';

/**
 * @file LineItem View Component
 * @author MinhL4m
 * @version 1.0
 */

export default function LineItem({ prodID, price, imageMain, name, quantity, onChange, onDelete }) {
	return (
		<div className="lineItem">
			<div className="lineItem--img">
				<img className="productImg" src={imageMain} alt="Product" />
			</div>
			<div clasName="lineItem--name">
				<p>{name}</p>
			</div>
			<div className="lineItem--quantity">
				<TextField
					id="standard-number"
					label="Quantity"
					type="number"
					value={quantity}
					InputLabelProps={{
						shrink: true
					}}
					onChange={(e) => onChange(prodID, e.target.value)}
					inputProps={{
						min: 1
					}}
					helperText={quantity < 1 ? 'Invalid quantity' : ' '}
					error={quantity < 1 ? true : false}
				/>
			</div>
			<div className="lineItem--price">
				<p>${(quantity * price).toFixed(2)}</p>
			</div>
			<div className="lineItem--delete">
				<IconButton edge="end" aria-label="delete">
					<DeleteIcon onClick={() => onDelete(prodID)} />
				</IconButton>
			</div>
		</div>
	);
}
