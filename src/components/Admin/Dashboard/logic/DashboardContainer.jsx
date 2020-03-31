import React, { Component } from 'react';
import WeekSale from '../view/WeekSale';
import OtherInfo from '../view/OtherInfo';
import LoadingHOC from '../../../common/HOC/LoadingHOC';
import {withRouter} from "react-router-dom";

/**
 * @file Dashboard Componenet 
 * @author MinhL4m
 * @version 1.0
 */

const URL = 'url';

const Dashboard = ({ props }) => {
	return (
		<div>
			<WeekSale {...props} />
			<OtherInfo {...props} />
		</div>
	);
};

class DashboardContainer extends Component {
	constructor() {
		super();
		this.state = {
			orderNum: '',
			orderVal: '',
			productSold: '',
			percentCompare: '',
			newClient: '',
			highSell: '',
			lowSell: '',
			lowStock: '',
			pendingOrder: '',
			stage: ''
		};
	}
	fetchInfo = async () => {
		this.setState({ stage: 'loading' });
		try {
			const response = await fetch(URL);
			if (response === 200) {
				const data = await response.json();
				if (data !== null) {
					this.setState({ info: { ...data } });
					this.setState({ stage: 'done' });
				} else {
					this.setState({ stage: 'error' });
				}
			}
		} catch (err) {
			this.setState({ stage: 'error' });
		}
	};

	render() {
		return LoadingHOC(Dashboard)(this.state);
	}
}

export default withRouter(DashboardContainer);