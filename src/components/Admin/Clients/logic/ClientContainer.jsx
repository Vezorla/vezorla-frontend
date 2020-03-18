import React, { Component } from 'react';
import Client from '../view/Client';

export default class ClientContainer extends Component {
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
			const response = await fetch('url');
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
				<Client {...this.state} />
			</div>
		);
	}
}
