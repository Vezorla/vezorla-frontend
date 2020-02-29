import React, { useMemo, useEffect } from 'react';
import { FormControl, InputLabel, MenuItem, Select } from '@material-ui/core';

const DropDownComponent = ({ label, selections, value, onChange, className }) => {
	useEffect(()=>{
		console.log('rerender')
	},[])
	
	return (
		<div className={className !== null ? className : ''}>
			<FormControl>
				<InputLabel id="filter--label">{label}</InputLabel>
				<Select labelId="demo-simple-select-label" id="demo-simple-select" value={value} onChange={onChange}>
					{selections.map((selection) => (
						<MenuItem key={selection.value} value={selection.value}>
							{selection.label}
						</MenuItem>
					))}
				</Select>
			</FormControl>
		</div>
	);
};

function DropDown(props) {
	return useMemo(() => <DropDownComponent {...props} />, [ props ]);
}

export default DropDown;
