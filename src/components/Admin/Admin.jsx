import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

export default function Admin() {
	return (
		<Switch>
			<Redirect to="/login" />
		</Switch>
	);
}
