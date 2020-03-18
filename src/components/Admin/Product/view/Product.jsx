import React from 'react';
import {
	Button,
	FormControl,
	TextField,
	InputLabel,
	Input,
	InputAdornment,
	FormControlLabel,
	Switch
} from '@material-ui/core';
import Stepper from '../../../common/Stepper/Stepper';

export default function CreateProduct({
	product,
	imgs,
	addImg,
	delImg,
	setActive,
	setCost,
	setPrice,
	setQuantity,
	setWarehouse,
	setDescription,
	saveProduct,
	cancelProduct
}) {
	const onClick = (e) => {
		e.preventDefault();
		const input = document.querySelector('.addImg');
		input.click();
	};
	return (
		<div>
			<div>{/* <h1>{product.name}</h1> */}</div>
			<div>
				<Stepper imgs={imgs} setActive={setActive} />
				<Button variant="contained" onClick={onClick} size="large">
					Add Image
				</Button>
				<Button variant="contained" onClick={delImg} size="large">
					Delete Image
				</Button>
				<input className="addImg" type="file" onChange={addImg} style={{ visibility: 'hidden' }} />
			</div>
			<div>
				<FormControl>
					<InputLabel htmlFor="standard-adornment-amount-1">Product Cost</InputLabel>
					<Input
						id="standard-adornment-amount-1"
						value={product.cost}
						onChange={setCost}
						startAdornment={<InputAdornment position="start">$</InputAdornment>}
						type="number"
					/>
				</FormControl>
				<FormControl>
					<InputLabel htmlFor="standard-adornment-amount-2">Sale Price</InputLabel>
					<Input
						id="standard-adornment-amount-2"
						value={product.price}
						onChange={setPrice}
						startAdornment={<InputAdornment position="start">$</InputAdornment>}
						type="number"
					/>
				</FormControl>
				<TextField
					id="standard-basic"
					label="Quantity"
					type="number"
					value={product.quantity}
					placeholder="Enter Quantity"
					inputProps={{
						min: 1
					}}
					InputLabelProps={{
						shrink: true
					}}
					onChange={setQuantity}
				/>
				<TextField label="Warehouse" value={product.warehouse} onChange={setWarehouse} />
			</div>
			<div>
				<TextField
					label="Description"
					multiline
					rows="10"
					value={product.description}
					onChange={setDescription}
				/>
			</div>
			<div>
				<FormControlLabel
					value="active"
					control={<Switch color="primary" />}
					label="Set Product Active"
					labelPlacement="top"
					onChange={setActive}
				/>
			</div>
			<div>
				<Button variant="contained" color="primary" onClick={saveProduct}>
					Save
				</Button>
				<Button variant="contained" color="primary" onClick={cancelProduct}>
					Cancel
				</Button>
			</div>
		</div>
	);
}
