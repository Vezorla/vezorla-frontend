import React, { Component } from 'react';
import LoadingHOC from '../../../common/HOC/LoadingHOC';
import OrderHistory from '../view/OrderHistory';
/**
 * @file Client Logic Component 
 * @author MinhL4m
 * @version 1.0
 */

export default class ClientContainer extends Component {
	constructor() {
		super();
		this.state = {
			invoice: {
				list: [],
				stage: ''
            },
            page:'',
            info:{
                
            }
		};
	}

	fetchData = async () => {
		this.setState({ stage: 'loading' });
		try {
			const response = await fetch('url');
			if (response.status === 200) {
				const data = await response.json();
				if (data !== null && data.length !== 0 && data !== undefined) {
					this.setState({ list: data });
					this.setState({ stage: 'done' });
				}
			} else if (response.state >= 400) {
				this.setState({ stage: 'error' });
			}
		} catch (err) {
			this.setState({ stage: 'error' });
		}
	};

	render() {
		return LoadingHOC(OrderHistory)(this.state);
	}
}