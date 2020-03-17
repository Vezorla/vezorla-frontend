import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import ClientPage from './Clients/logic/ClientPage';

export default function Admin() {
	return (
		<Switch>
			<Route to="/admin/client" component={ClientPage} />
			<Redirect to="/login" />
		</Switch>
	);
}
