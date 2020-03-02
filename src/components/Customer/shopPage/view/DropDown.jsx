import React, { useMemo, useEffect } from 'react';
import { FormControl, InputLabel, MenuItem, Select } from '@material-ui/core';

/**
 * @file DropDown View Component
 * @author MinhL4m
 * @version 1.0 
 */

/**
 * Drop Down View Component
 * @param {string} label - label of this drop down
 * @param {string[]} selections - all possible selections
 * @param {string} value - value of the drop down
 * @param {function} onChange - function to change the value 
 * @param {string} className - class name of this drop down
 * @returns DropDown Component
 */
const DropDownComponent = ({ label, selections, value, onChange, className }) => {
	useEffect(() => {
		console.log('rerender');
	}, []);

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

/**
 * 
 * @param {Object} props - props of this functional component
 * @returns DropDown Component with useMemo effects 
 */
function DropDown(props) {
	return useMemo(() => <DropDownComponent {...props} />, [ props ]);
}

export default DropDown;
