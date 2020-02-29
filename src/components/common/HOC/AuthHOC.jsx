import React from 'react';
import { Redirect } from 'react-router-dom';

const returnVal = (WrapperComponent, auth, props) => {
	if (auth !== 'client' || auth !== 'admin') {
		return <Redirect to="/404" />;
	} else {
		return <WrapperComponent {...props} />;
	}
};

const AuthHOC = (WrapperComponent, auth) => (props) => returnVal(WrapperComponent, auth, props);

export default AuthHOC;
