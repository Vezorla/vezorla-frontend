import React from 'react';
import { Redirect } from 'react-router-dom';

/**
 * @file HOC authetication logic
 * @author MinhL4m
 * @version 1.0
 */

const returnVal = (WrapperComponent, auth, props) => {
	if (auth !== 'customer') {
		return <Redirect to="/404" />;
	} else {
		setTimeout(() => {}, 5000);
		return <WrapperComponent {...props} />;
	}
};

const CustomerAuthHOC = (WrapperComponent, auth) => (props) => returnVal(WrapperComponent, auth, props);

export default CustomerAuthHOC;
