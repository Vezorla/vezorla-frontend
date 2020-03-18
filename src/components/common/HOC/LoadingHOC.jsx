import React from 'react';
import { CircularProgress } from '@material-ui/core';
import PopUp from '../PopUp/PopUp';

/**
 * @file HOC loading logic
 * @author MinhL4m
 * @version 1.0
 */

const returnVal = (props, WrappedComponent) => {
	let returnVal;
	if (props.stage === 'loading') {
		returnVal = <CircularProgress />;
	} else if (props.stage === 'error') {
		returnVal = <PopUp message={props.message} onClick={null} />;
	} else {
		returnVal = <WrappedComponent {...props} />;
	}

	return returnVal;
};

const loadingHOC = (WrappedComponent) => (props) => returnVal(props, WrappedComponent);

export default loadingHOC;
