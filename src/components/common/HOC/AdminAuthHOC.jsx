import React from 'react';
import { Redirect } from 'react-router-dom';

/**
 * @file HOC authetication logic
 * @author MinhL4m
 * @version 1.0
 */


const returnVal = (WrapperComponent, auth, props) => {
	if ( auth !== 'admin') {
		return <Redirect to="/404" />;
	} else {
		return <WrapperComponent {...props} />;
	}
};

const AdminAuthHOC = (WrapperComponent, auth) => (props) => returnVal(WrapperComponent, auth, props);

export default AdminAuthHOC;