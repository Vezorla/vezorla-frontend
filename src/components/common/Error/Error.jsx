import React, { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Typography, Button } from '@material-ui/core';

/**
 * @file Error Component
 * @author MinhL4m
 * @version 1.0
 */

function Error({ message, onClick }) {
	const [ open, setOpen ] = useState(true);
	const handleClose = () => {
		setOpen(false);
		if(onClick !== null || onClick !== undefined ){
			onClick();
		}
	};

	return (
		<div>
			<Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
				<DialogTitle id="customized-dialog-title" onClose={handleClose}>
					Error
				</DialogTitle>
				<DialogContent dividers>
					<Typography gutterBottom variant="h5">
						{message}
					</Typography>
				</DialogContent>
				<DialogActions>
					<Button autoFocus onClick={handleClose} color="primary">
						OK
					</Button>
				</DialogActions>
			</Dialog>
		</div>
	);
}
export default Error;
