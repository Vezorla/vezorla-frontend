import React from 'react';
import EmailEnter from './EmailEnter';
import DoneForgotPass from './DoneForgotPass';

export default function ForgotPass({ stage, value, onChange, onClick, helperText }) {
	return (
		<div>
			{stage !== true ? (
				<EmailEnter value={value} onChange={onChange} onClick={onClick} helperText={helperText} />
			) : (
				<DoneForgotPass />
			)}
		</div>
	);
}
