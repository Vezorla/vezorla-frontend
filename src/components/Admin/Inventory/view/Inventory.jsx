import React from 'react';
import { Button, Grid, CardMedia, Card } from '@material-ui/core';
import { Link } from 'react-router-dom';
import LoadingHOC from '../../../common/HOC/LoadingHOC';

/**
 * @file Inventory View Componenet 
 * @author MinhL4m
 * @version 1.0
 */

const CardComponent = ({ prodId, imageMain, name, qty, price }) => {
	const URL = '/admin/inventory';
	return (
		<Grid item xs={12} sm={6} md={4}>
			<Link to={`${URL}/${prodId}`}>
				<Card
					key={name}
					justifyContent="center"
					disableUnderline={true}
					style={{ border: '1px solid black', marginTop: '3em', paddingBottom: '10px', color: '#0C3658' }}
				>
					<h1 style={{ textAlign: 'center' }}>{name}</h1>
					<CardMedia
						component="img"
						alt={imageMain}
						height="140"
						image={imageMain}
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
					<h2 style={{ textAlign: 'center' }}>{name}</h2>
					<p>{qty}</p>

					<div
						className="card--price"
						style={{
							paddingBottom: '1.5em',
							display: 'flex',
							justifyContent: 'center'
						}}
					>
						<p>${price}</p>
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

const InventoryComponent = ({ list = [] }) => {
	return (
		<div>
			<h1>Inventory</h1>
			<div>
				<Link to="/admin/inventory/create">
					<Button variant="contained" size="large">
						Create Product
					</Button>
				</Link>
			</div>
			<Grid container xs={12} spacing={3}>
				{list.map((item) => <CardComponent {...item} />)}
			</Grid>
		</div>
	);
};

const Inventory = (props) => {
	return LoadingHOC(InventoryComponent)(props);
};

export default InventoryComponent;
