import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import ClientContainer from '../Client/AccountPage/logic/ClientContainer';
import ViewInvoiceContainer from './ViewInvoicePage/logic/ViewInvoiceContainer';

/**
 * @file Client Component
 * @author MinhL4m
 * @version 1.0
 */

export default function Client() {
	return (
		<Switch>
			<Route path="/client/account" component={ClientContainer} />
			<Route
				path="/client/invoice/:invoiceNum"
				exact
				strict
				render={({ match }) => <ViewInvoiceContainer invoiceNum={match.params.invoiceNum} />}
			/>
			<Redirect to="/login" />
		</Switch>
	);
}
