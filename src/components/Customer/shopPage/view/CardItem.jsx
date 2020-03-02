import React from 'react';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';

//props: product obj
function CardItem(props) {
	const { prodId, name, subdescription, harvestTime, imageMain, oldPrice, price, active } = props.product;
	const url = '/product/' + prodId;

	return (
		<Grid item xs={12} sm={6} md={4}>
			<Link to={url}>
				<Card
					key={prodId}
					justifyContent="center"
					disableUnderline={true}
					style={{ border: '1px solid black', marginTop: '3em', paddingBottom: '10px', color: '#0C3658' }}
				>
					<h1 style={{ textAlign: 'center' }}>{name}</h1>
					<CardMedia
						component="img"
						alt={name}
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
					<h2 style={{ textAlign: 'center' }}>{subdescription}</h2>
					<p>{harvestTime}</p>

					<div
						className="card--price"
						style={{
							paddingBottom: '1.5em',
							display: 'flex',
							justifyContent: 'center'
						}}
					>
						<p>{oldPrice}</p>
						<p>{price}</p>
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
