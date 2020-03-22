import React from 'react';
import { Redirect } from 'react-router-dom';

/**
 * @file HOC authetication logic
 * @author MinhL4m
 * @version 1.0
 */

const returnVal = (WrapperComponent, auth, props) => {
	if (auth !== 'client') {
		return <Redirect to="/404" />;
	} else {
		return <WrapperComponent {...props} />;
	}
};

const ClientAuthHOC = (WrapperComponent, auth) => {
	return (props) => {
		if(props.done){
			return returnVal(WrapperComponent, auth, props);
		}else{
			//TODO: add spinner or something
			return <h1>Loading</h1>
		}
		
	};
};

export default ClientAuthHOC;
