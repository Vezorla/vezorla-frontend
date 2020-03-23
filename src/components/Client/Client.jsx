import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import ClientContainer from '../Client/AccountPage/logic/ClientContainer';

/**
 * @file Client Component
 * @author MinhL4m
 * @version 1.0
 */

export default function Client() {
	return (
		<Switch>
			<Route path="/client/account" component={ClientContainer} />
			<Redirect to="/login" />
		</Switch>
	);
}
