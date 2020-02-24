import React, { useState } from 'react';
import {Dialog, DialogTitle, DialogContent, DialogActions, Typography, Button} from '@material-ui/core'

function Error() {
    const [open, setOpen] = useState(true)
    const handleClose = () => {
        setOpen(false)
    }

	return (
		<div>
			<Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
				<DialogTitle id="customized-dialog-title" onClose={handleClose}>
					Error
				</DialogTitle>
				<DialogContent dividers>
					<Typography gutterBottom variant="h5">
						Something went wrong!!! It now you, it us. Please visit later. Thank you for your patient.
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