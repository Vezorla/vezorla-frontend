import React, { Component } from 'react';
import Inventory from '../view/Inventory';

const URL = 'http://localhost:8080/api/admin/inventory/all';
const IMG_URL = 'http://localhost:8080/api/admin/img/get';
/**
 * @file Inventory Componenet 
 * @author MinhL4m
 * @version 1.0
 */

export default class InventoryContainer extends Component {
	constructor() {
		super();
		this.state = {
			list: [],
			stage: '',
			message: '',
			imgs: []
		};
	}

	fetchData = async () => {
		this.setState({ stage: 'loading' });
		try {
			const response = await fetch(URL);
			if (response.status === 200) {
				const data = await response.json();

				let tempImgs = [];
				for (let index in data.products) {

					const responseImg = await fetch(`${IMG_URL}/${data.products[index].imageMain}`, {
						method: 'GET',
						credentials: 'include',
						mode: 'cors'
					});
					const img = await responseImg.json();
					tempImgs[index] = img.picByte;
				}

				this.setState({ list: [ ...data.products ], stage: 'done', imgs: [ ...tempImgs ] });
			} else {
				this.setState({ stage: 'done' });
			}
		} catch (err) {
			console.log(err);
			this.setState({ stage: 'done' });
		}
	};

	componentDidMount() {
		this.fetchData();
	}

	render() {
		return <Inventory {...this.state} />;
		// return <div />;
	}
}
