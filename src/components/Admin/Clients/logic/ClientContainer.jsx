import React, { Component } from 'react';
import Client from '../view/Client';

/**
 * @file Client List  Componenet 
 * @author MinhL4m
 * @version 1.0
 */

const URL = 'http://localhost:8080/api/admin/clients';

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
			const response = await fetch(URL, {
				method: 'GET',
				credentials: 'include',
				mode: 'cors'
			});
			if (response.status === 200) {
				const data = await response.json();
				this.setState({
					list: [ ...data.clients ],
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
