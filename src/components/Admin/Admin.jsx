import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import ClientPage from './Clients/logic/ClientPage';
import ClientInfoContainer from './ClientInfo/logic/ClientInfoContainer';
import SettingContainer from './Setting/logic/SettingContainer';

export default function Admin() {
	return (
		<Switch>
			<Route path="/admin/settings" exact strict component={SettingContainer} />
			<Route path="/admin/client" exact strict component={ClientPage} />
			<Route
				path="/admin/client/:clientid"
				exact
				strict
				render={({ match }) => <ClientInfoContainer clientId={match.params.productid} />}
			/>
			<Redirect path="/admin/403" />
		</Switch>
	);
}
