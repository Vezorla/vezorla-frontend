import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

/**
 * @file Client Component
 * @author MinhL4m
 * @version 1.0
 */


export default function Client() {
	return (
		<Switch>
			<Redirect to="/login" />
		</Switch>
	);
}
