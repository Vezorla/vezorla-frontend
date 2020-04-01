import React from 'react';
import { Card, Button, CardMedia, Grid, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';

/**
 * @file CardItem View Component
 * @author MinhL4m
 * @version 1.0 
 */

/**
 * creat CardItem view pass on props passed in
 * @param {Object} props - props of this functional component
 * @returns CardItem View
 */
function CardItem({ product, xs = 12, sm = 6, md = 4, img = '' }) {
	const { prodId, name, harvestTime, price } = product;
	const url = '/customer/product/' + prodId;

	return (
		<Grid item xs={xs} sm={sm} md={md}>
			<Link to={url}>
				<Card
					key={prodId}
					justifyContent="center"
					disableUnderline={true}
					style={{ border: '1px solid black', marginTop: '3em', paddingBottom: '10px', color: '#0C3658' }}
				>
					<CardMedia
						component="img"
						alt={name}
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
						{name}
					</Typography>
					<Typography variant="h5" component="h4">
						Harvest Time:{harvestTime}
					</Typography>
					<Typography variant="h5" component="h4">
						${price}
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
}
export default CardItem;
