import React from 'react';
import { Button } from '@material-ui/core';
import PopUp from '../../../common/PopUp/PopUp';

/**
 * @file Payment Component
 * @author MinhL4m
 * @version 1.0
 */

const URL = 'http://localhost:8080/customer/cart/payment';

export default function Payment() {
	const [ error, setError ] = React.useState(false);
	const [ message, setMessage ] = React.useState('');

	const onClick = async () => {
		const response = await fetch(URL, {
			method: 'POST', // POST, PUT, DELETE, etc.
			headers: {
				// the content type header value is usually auto-set
				// depending on the request body
				'Content-Type': 'text/plain;charset=UTF-8'
			},
			body: undefined, // string, FormData, Blob, BufferSource, or URLSearchParams

			// or an url from the current origin
			referrerPolicy: 'no-referrer-when-downgrade', // no-referrer, origin, same-origin...
			mode: 'cors', // same-origin, no-cors
			credentials: 'include', // omit, include

			redirect: 'follow'
		});

		window.open(response.url)
	};

	return (
		<div>
			{error ? <PopUp message={message} onClose={setError(false)} handleOk={setError(false)} /> : ''}
			<Button variant="contained" onClick={onClick}>
				Pay by paypal
			</Button>
		</div>
	);
}
