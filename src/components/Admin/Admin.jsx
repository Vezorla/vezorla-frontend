import React from 'react';
import { Switch, Route, Redirect, useHistory } from 'react-router-dom';
import ClientPage from './Clients/logic/ClientPage';
import ClientInfoContainer from './ClientInfo/logic/ClientInfoContainer';
import SettingContainer from './Setting/logic/SettingContainer';
import CreateProductContainer from './Product/logic/CreateProductContainer';
import UpdateProductContainer from './Product/logic/UpdateProductContainer';
import SalesContainer from './Sales/logic/SalesContainer';
import InventoryContainer from './Inventory/logic/InventoryContainer';

export default function Admin() {

	return (
		<Switch>
			<Route path="/admin/settings" exact strict component={SettingContainer} />
			<Route path="/admin/client" exact strict component={ClientPage} />
			<Route path="/admin/inventory" exact strict component={InventoryContainer} />
			<Route
				path="/admin/inventory/create"
				exact
				strict
				render={() => <CreateProductContainer />}
			/>
			<Route
				path="/admin/client/:clientid"
				exact
				strict
				render={({ match }) => <ClientInfoContainer clientId={match.params.clientId} />}
			/>
			<Route
				path="/admin/inventory/:prodId"
				exact
				strict
				render={({ match }) => <UpdateProductContainer prodId={match.params.prodId} />}
			/>
			<Route path="/admin/sales" exact strict component={SalesContainer} />
			<Redirect path="/admin/403" />
		</Switch>
	);
}
