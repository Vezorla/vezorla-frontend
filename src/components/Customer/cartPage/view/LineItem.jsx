import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import { TextField, IconButton, Typography } from '@material-ui/core';
import '../style.css';

/**
 * @file LineItem View Component
 * @author MinhL4m
 * @version 1.0
 */

class LineItem extends React.PureComponent {
	render() {
		return (
			<div className="lineItem">
				<div className="lineItem--img">
					<img className="productImg" src={`data:image/jpeg;base64,${this.props.img}`} alt="Product" />
				</div>
				<div className="lineItem--name">
					<Typography variant="h6" component="h4">
						{this.props.name}
					</Typography>
				</div>
				<div className="lineItem--quantity">
					<TextField
						id="standard-number"
						label="Quantity"
						type="number"
						value={this.props.quantity}
						InputLabelProps={{
							shrink: true
						}}
						onChange={(e) => this.props.onChange(this.props.prodID, e.target.value)}
						inputProps={{
							min: 1,
							max: this.props.max
						}}
						helperText={this.props.quantity < 1 ? 'Invalid quantity' : ' '}
						error={this.props.quantity < 1 ? true : false}
					/>
				</div>
				<div className="lineItem--price">
					<Typography variant="h6" component="h4">
						${(this.props.quantity * this.props.price).toFixed(2)}
					</Typography>
				</div>
				<div className="lineItem--delete">
					<IconButton edge="end" aria-label="delete" onClick={() => this.props.onDelete(this.props.prodID)}>
						<DeleteIcon />
					</IconButton>
				</div>
			</div>
		);
	}
}

export default LineItem;
