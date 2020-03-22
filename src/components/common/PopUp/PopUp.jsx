import React, { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Typography, Button } from '@material-ui/core';

/**
 * @file Error Component
 * @author MinhL4m
 * @version 1.0
 */

function PopUp({ message, label = 'Error', handleOk, handleCancel = null, children = '', onClose }) {
	const [ open, setOpen ] = useState(true);

	const handleClose = () => {
		setOpen(false);
		onClose();
	};

	const handleCancelClose = () => {
		setOpen(false);
		handleCancel();
	};

	const handleOkClose = () => {
		setOpen(false);
		handleOk();
	};

	return (
		<div>
			<Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
				<DialogTitle id="customized-dialog-title" onClose={handleClose}>
					{label}
				</DialogTitle>
				<DialogContent dividers>
					{children}
					<Typography gutterBottom variant="h5">
						{message}
					</Typography>
				</DialogContent>
				<DialogActions>
					{handleCancel !== null ? (
						<Button autoFocus onClick={handleCancelClose} color="primary">
							Cancel
						</Button>
					) : (
						''
					)}
					<Button autoFocus onClick={handleOkClose} color="primary">
						OK
					</Button>
				</DialogActions>
			</Dialog>
		</div>
	);
}
export default PopUp;
