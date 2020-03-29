import React from 'react';
import EmailEnter from './EmailEnter';
import DoneForgotPass from './DoneForgotPass';

/**
 * @file Forgot Password view Componenet 
 * @author MinhL4m
 * @version 1.0
 */

export default function ForgotPass({ stage, value, onChange, onClick, helperText, error, setError }) {
	return (
		<div>
			{stage !== true ? (
				<EmailEnter
					value={value}
					onChange={onChange}
					onClick={onClick}
					helperText={helperText}
					error={error}
					setError={setError}
				/>
			) : (
				<DoneForgotPass />
			)}
		</div>
	);
}
