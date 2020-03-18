import React, { Component } from 'react';

export default class CreateProductContainer extends Component {
	constructor() {
		super();
		this.state = {
			info: {
				cost: 0,
				price: 0,
				quatity: 0,
				warehouse: '',
				description: '',
				active: true
			},
			imgs: [],
			index: 0
		};
	}

	render() {
		return <div />;
	}
}
