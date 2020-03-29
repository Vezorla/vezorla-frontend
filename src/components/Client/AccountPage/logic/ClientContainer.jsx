import React, { Component } from 'react';
import InfoContainer from './InfoContainer';
import OrderHistoryContainer from './OrderHistoryContainer';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import PopUp from '../../../common/PopUp/PopUp';

/**
 * @file Client Logic Component
 * @author MinhL4m
 * @version 1.0
 */

function a11yProps(index) {
	return {
		id: `full-width-tab-${index}`,
		'aria-controls': `full-width-tabpanel-${index}`
	};
}

export default class ClientContainer extends Component {
	constructor() {
		super();
		this.state = {
			value: 0,
			error: false,
			message: '', 
			success: false,
		};
	}

	setValue = (newVal) => {
		this.setState({ value: newVal });
	};
	setError = () => {
		this.setState({ error: !this.state.error });
	};
	setSuccess = () => {
		this.setState({success : !this.state.success})
	}

	setMessage = (newVal) => {
		this.setState({ message: newVal });
	};

	handleChange = (event, newVal) => {
		this.setValue(newVal);
	};

	handleChangeIndex = (newVal) => {
		this.setValue(newVal);
	};
	render() {
		return (
			<div>
				{this.state.error ? (
					<PopUp message={this.state.message} onClose={this.setError} handleOk={this.setError} />
				) : (
					''
				)}
				{this.state.success ? (
					<PopUp message={this.state.message} label='Success' onClose={this.setSuccess} handleOk={this.setSuccess} />
				) : (
					''
				)}
				<AppBar position="static" color="default">
					<Tabs
						value={this.state.value}
						onChange={this.handleChange}
						indicatorColor="primary"
						textColor="primary"
						variant="fullWidth"
						aria-label="full width tabs example"
					>
						<Tab label="Information" {...a11yProps(0)} />
						<Tab label="Order History" {...a11yProps(1)} />
					</Tabs>
				</AppBar>
				<SwipeableViews index={this.state.value} onChangeIndex={this.handleChangeIndex}>
					<InfoContainer setError={this.setError} setMessage={this.setMessage} setSuccess={this.setSuccess} />
					<OrderHistoryContainer />
				</SwipeableViews>
			</div>
		);
	}
}
