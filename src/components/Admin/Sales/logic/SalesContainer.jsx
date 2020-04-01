import React, { Component } from 'react';
import Sales from '../view/Sales';
import LoadingHOC from '../../../common/HOC/LoadingHOC';

const URL = 'http://localhost:8080';

export default class SalesContainer extends Component {
	constructor() {
		super();
		this.state = {
			list: [],
			stage: '',
			message: ''
		};
	}

	fetchData = async () => {
		this.setState({ stage: 'loading' });
		try {
			let response = await fetch(URL, {
				method: 'GET',
				mode: 'cors',
				credentials: 'include'
			});

			if (response.status === 200) {
				const data = await response.json();
				this.setState({ list: [ ...data ], stage: 'done' });
			} else {
				this.setState({ stage: 'error', message: 'something wrong' });
			}
		} catch (err) {
			this.setState({ stage: 'error', message: 'Something wrong' });
		}
	};

	render() {
		return LoadingHOC(Sales)(this.state);
	}
}
