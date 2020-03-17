import React, { Component } from 'react';
import { AppBar, Tabs, SwipeableViews, Tab } from '@material-ui/core';
import AddRetailContainer from './AddRetailContainer';
import ClientContainer from './ClientContainer';
import PendingOrderContainer from './PendingOrderContainer';

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
			pendingOrder: 0
		};
	}

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
