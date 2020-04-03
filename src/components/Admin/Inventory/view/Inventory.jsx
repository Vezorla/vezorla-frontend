import React from 'react';
import { Button, Grid, CardMedia, Card, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import LoadingHOC from '../../../common/HOC/LoadingHOC';

/**
 * @file Inventory View Componenet 
 * @author MinhL4m
 * @version 1.0
 */

const CardComponent = ({ prodId, name, qty, price, img }) => {
	const URL = '/admin/inventory';
	return (
		<Grid item xs={12} sm={6} md={4}>
			<Link to={`${URL}/${prodId}`} style={{ textDecoration: 'none' }}>
				<Card
					key={name}
					justifyContent="center"
					disableUnderline={true}
					style={{ border: '1px solid black', marginTop: '3em', paddingBottom: '10px', color: '#0C3658' }}
				>
					<CardMedia
						component="img"
						alt={img}
						height="140"
						image={`data:image/jpeg;base64,${img}`}
						title="props.name"
						style={{
							width: '70%',
							margin: 'auto',
							marginTop: '2em',
							marginBottom: '2em',
							height: '40%',
							border: '3px solid black',
							borderRadius: '10px',
							boxShadow: '0px 3px 5px black'
						}}
					/>
					<Typography variant="h5" component="h4">
						Name: {name}
					</Typography>
					<Typography variant="h5" component="h4">
						Quantity: {qty}
					</Typography>
					<Typography variant="h5" component="h4">
						Price: ${price}
					</Typography>

					<div
						className="card--price"
						style={{
							paddingBottom: '1.5em',
							display: 'flex',
							justifyContent: 'center'
						}}
					>
						<Button
							size="large"
							variant="outlined"
							style={{
								marginLeft: 'auto',
								marginRight: 'auto',
								width: '100%',
								borderRadius: '0',
								borderLeft: 'none',
								borderRight: 'none',
								borderColor: '#000'
							}}
						>
							View
						</Button>
					</div>
				</Card>
			</Link>
		</Grid>
	);
};

const InventoryComponent = ({ list = [], imgs = [] }) => {
	console.log(list);
	return (
		<div>
			<Typography variant="h2" component="h2">
				Inventory
			</Typography>

			<div>
				<Link to="/admin/inventory/create">
					<Button variant="contained" size="large">
						Create Product
					</Button>
				</Link>
			</div>
			<Grid container xs={12} spacing={3}>
				{list.map((item, index) => <CardComponent {...item} img={imgs[index]} />)}
			</Grid>
		</div>
	);
};

const Inventory = (props) => {
	return LoadingHOC(InventoryComponent)(props);
};

export default Inventory;
