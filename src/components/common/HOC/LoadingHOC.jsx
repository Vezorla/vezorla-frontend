import React from 'react';
import { CircularProgress } from '@material-ui/core';
import Error from '../Error/Error';

const returnVal = (props, WrappedComponent) => {
	let returnVal;
	if (props.stage === 'loading') {
		returnVal = <CircularProgress />;
	} else if (props.stage === 'error') {
		returnVal = <Error />;
	} else {
		returnVal = <WrappedComponent {...props} />;
	}

	return returnVal;
};

const loadingHOC = (WrappedComponent) => (props) => returnVal(props, WrappedComponent);

export default loadingHOC;
