import React from 'react';
import LoadingHOC from '../../../common/HOC/LoadingHOC';
import { Link } from 'react-router-dom';
import { Card, Button, Typography } from '@material-ui/core';

/**
 * @file Client List View Componenet 
 * @author MinhL4m
 * @version 1.0
 */

const ClientCard = ({ firstName = 'Missing', lastName = 'Missing', email, phoneNum = 'Missing' }) => {
	return (
		<Link to={`/admin/clients/${email}`} style={{ textDecoration: 'none' }}>
			<Card
				key={email}
				justifyContent="center"
				disableUnderline={true}
				style={{ border: '1px solid black', marginTop: '3em', paddingBottom: '10px', color: '#0C3658' }}
			>
				<div
					className="card--price"
					style={{
						paddingBottom: '1.5em',
						display: 'flex',
						justifyContent: 'center',
						flexDirection: 'column'
					}}
				>
					<Typography variant="h5" component="h3">
						First Name: {firstName}
					</Typography>
					<Typography variant="h5" component="h3">
						Last Name: {lastName}
					</Typography>
					<Typography variant="h5" component="h3">
						Email: {email}
					</Typography>
					<Typography variant="h5" component="h3">
						Phone: {phoneNum}
					</Typography>

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
	);
};

function ClientComponent({ list = [] }) {
	return <div>{list.map((client) => <ClientCard {...client} />)}</div>;
}

const Client = (props) => {
	return LoadingHOC(ClientComponent)({ ...props, message: 'something went wrong with loading client list' });
};
export default Client;
