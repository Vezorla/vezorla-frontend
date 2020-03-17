import React, { Component } from 'react';
import { AppBar, Tabs, Tab } from '@material-ui/core';
import AddRetailContainer from './AddRetailContainer';
import ClientContainer from './ClientContainer';
import PendingOrderContainer from './PendingOrderContainer';
import SwipeableViews from 'react-swipeable-views';

function a11yProps(index) {
	return {
		id: `full-width-tab-${index}`,
		'aria-controls': `full-width-tabpanel-${index}`
	};
}

export default class ClientPage extends Component {
	constructor() {
		super();
		this.state = {
			pendingOrder: 0,
			value: 0
		};
	}

	setValue = (newVal) => {
		this.setState({ value: newVal });
	};

	handleChange = (event, newValue) => {
		this.setValue(newValue);
	};

	handleChangeIndex = (index) => {
		this.setValue(index);
	};

	render() {
		return (
			<div>
				<AppBar position="static" color="default">
					<Tabs
						value={this.state.value}
						onChange={this.handleChange}
						indicatorColor="primary"
						textColor="primary"
						variant="fullWidth"
						aria-label="full width tabs example"
					>
						<Tab label="Client" {...a11yProps(0)} />
						<Tab label="Add Retail" {...a11yProps(1)} />
						<Tab label={`Pending Order (${this.state.pendingOrder})`} {...a11yProps(2)} />
					</Tabs>
				</AppBar>
				<SwipeableViews index={this.state.value} onChangeIndex={this.handleChangeIndex}>
					<ClientContainer />
					<AddRetailContainer />
					<PendingOrderContainer />
				</SwipeableViews>
			</div>
		);
	}
}
