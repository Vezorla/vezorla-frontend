import React from 'react';
import {
	Button,
	FormControl,
	TextField,
	InputLabel,
	Input,
	InputAdornment,
	FormControlLabel,
	Switch,
	Typography
} from '@material-ui/core';
import Stepper from '../../../common/Stepper/Stepper';

import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';

/**
 * @file  View Product Componenet 
 * @author MinhL4m
 * @version 1.0
 */

export default function Product({
	info,
	imgs,
	imageName,
	addImg,
	setName,
	setPrice,
	setThreshold,
	setHarvestTime,
	setDescription,
	setSubDescription,
	setActive,
	onSave,
	onCancel,
	create
}) {
	const onClick = (e) => {
		e.preventDefault();
		const input = document.querySelector('.addImg');
		input.click();
	};
	return (
		<div>
			{create ? (
				<Typography variant="h2" component="h2">
					Create Product
				</Typography>
			) : (
				<Typography variant="h2" component="h2">
					Update Product
				</Typography>
			)}

			<div>
				{create ? (
					<Typography variant="h6" component="h6">
						Add one image only. If you want to add more, please use Update Product feature.
					</Typography>
				) : (
					<Stepper imgs={imgs} default={true} />
				)}
				<Button variant="contained" onClick={onClick} size="large">
					Add Image
				</Button>
				<Typography variant="subtitle1">
					{imageName !== undefined && imageName !== '' ? `Image ${imageName} is added` : ''}
				</Typography>
				<input className="addImg" type="file" onChange={addImg} style={{ visibility: 'hidden' }} />
			</div>
			<div>
				<TextField label="Name*" value={info.name} placeholder="Enter Name" onChange={setName} />
				<FormControl>
					<InputLabel htmlFor="standard-adornment-amount-2">Sale Price*</InputLabel>
					<Input
						id="standard-adornment-amount-2"
						value={info.price}
						onChange={setPrice}
						startAdornment={<InputAdornment position="start">$</InputAdornment>}
						type="number"
						inputProps={{
							min: 1
						}}
					/>
				</FormControl>
				<TextField
					id="standard-basic"
					label="Threshold*"
					type="number"
					value={info.threshold}
					placeholder="Enter Threshold"
					inputProps={{
						min: 0
					}}
					InputLabelProps={{
						shrink: true
					}}
					onChange={setThreshold}
				/>
				<MuiPickersUtilsProvider utils={DateFnsUtils}>
					<KeyboardDatePicker
						margin="normal"
						id="date-picker-dialog"
						label="Harvest Time"
						format="MM/dd/yyyy"
						value={info.harvestTime}
						onChange={setHarvestTime}
						KeyboardButtonProps={{
							'aria-label': 'change date'
						}}
					/>
				</MuiPickersUtilsProvider>
			</div>
			<div>
				<TextField label="Description" multiline rows="10" value={info.description} onChange={setDescription} />
			</div>
			<div>
				<TextField
					label="SubDescription"
					multiline
					rows="10"
					value={info.subdescription}
					onChange={setSubDescription}
				/>
			</div>
			<div>
				<FormControlLabel
					checked={info.active}
					control={<Switch color="primary" />}
					label="Set Product Active"
					labelPlacement="top"
					onChange={setActive}
				/>
			</div>
			<div>
				<Button variant="contained" color="primary" onClick={onSave}>
					Save
				</Button>
				<Button variant="contained" color="primary" onClick={onCancel}>
					Cancel
				</Button>
			</div>
		</div>
	);
}
