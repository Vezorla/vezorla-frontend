import React, { Component } from 'react';
import PendingOrder from '../view/PendingOrder';

const URL = 'url';

export default class PendingOrderContainer extends Component {
	constructor() {
		super();
		this.state = {
			list: [],
			stage: ''
		};
	}

	fetchData = async () => {
		this.setState({ stage: 'loading' });
		try {
			const response = await fetch(URL);
			if (response.status === 200) {
				const data = await response.json();
				this.setState({
					list: data,
					stage: 'done'
				});
			} else {
			}
		} catch (err) {
			this.setState({ stage: 'error' });
		}
	};

	componentDidMount() {
		this.fetchData();
	}

	render() {
		return (
			<div>
				<PendingOrder {...this.state} />
			</div>
		);
	}
}
