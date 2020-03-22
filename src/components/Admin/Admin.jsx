import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import ClientPage from './Clients/logic/ClientPage';
import ClientInfoContainer from './ClientInfo/logic/ClientInfoContainer'

export default function Admin() {
	return (
		<Switch>
			<Route to="/admin/client" component={ClientPage} />
			<Route to="/admin/client/:clientid" render={({ match }) => (
					<ClientInfoContainer clientId={match.params.productid} />
				)} />
			<Redirect to="/login" />
		</Switch>
	);
}
