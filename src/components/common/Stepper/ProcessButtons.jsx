import React from 'react';
import { Button } from '@material-ui/core';

/**
 * @file Process Buttons Component
 * @author MinhL4m
 * @version 1.0
 */

function ProcessButtons(props) {
	return (
		<div>
			<div>
				<Button disabled={props.stage === 0} onClick={props.handleBack}>
					Back
				</Button>

				<Button variant="contained" color="primary" onClick={props.handleNext} disabled={!props.complete}>
					{props.hasNext ? 'Next' : 'Submit'}
				</Button>
			</div>
		</div>
	);
}
export default ProcessButtons;
