import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

export default function Client() {
	return (
		<Switch>
			<Redirect to="/login" />
		</Switch>
	);
}
