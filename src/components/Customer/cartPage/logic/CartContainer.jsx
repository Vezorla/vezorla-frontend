import React, { Component } from 'react';
import Cart from '../view/Cart';

/**
 * @file Cart Logic Component
 * @author MinhL4m
 * @version 1.0
 */

const DEL_URL = 'url';
const UPDATE_URL = 'url';
const INSTOCK_URL = 'url';
const OUTSTOCK_URL = 'url';

class CartContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			inStockList: [],
			outStockList: [],
			stage: ''
		};

		this.onChange = this.onChange.bind(this);
		this.onDelete = this.onDelete.bind(this);
	}

	timeOutVar = [];
	tax = 0;
	total = 0;

	//---function active when user change value of line item
	onChange = (prodId, newVal) => {
		this.timeOutVar.forEach((timeout) => clearTimeout(timeout));
		let tempList = this.state.list.map((lineItem) => {
			if (lineItem.prodId === prodId) {
				lineItem.quantity = newVal;
			}
			return lineItem;
		});

		this.setState({ list: tempList });
		this.timeOutVar.push(
			setTimeout(() => {
				this.putData();
			}, 5000)
		);
	};

	//-----function delete product----
	onDelete = async (prodId) => {
		try {
			let response = await fetch(`${DEL_URL}/${prodId}`, {
				method: 'DELETE',
				headers: {
					Accept: 'application/json',
					'Content-Type': 'application/json'
				},
				mode: 'cors',
				credentials: 'include',
				body: JSON.stringify(prodId)
			});

			if (response.status === 200) {
				let data = await response.json();
				if (data === true) {
					let newList = this.state.list.filter((lineItem) => lineItem.prodId !== prodId);

					this.setState({ list: newList });
				}
			} else if (response.status > 400) {
				this.setState({ stage: 'error' });
			}
		} catch (err) {
			this.setState({ stage: 'error' });
		}
	};

	//--- function fetch line item-------
	fetchInStockData = async () => {
		try {
			const response = await fetch(INSTOCK_URL, {
				method: 'GET',
				credentials: 'include',
				headers: {
					Accept: 'application/json',
					'Content-Type': 'application/json'
				}
			});

			if (response.status === 200) {
				const data = await response.json();
				if (data !== null) {
					this.setState({ inStockList: data });
					this.setState({ stage: 'done' });
				}
			} else if (response.status > 400) {
				this.setState({ stage: 'error' });
				this.setState({ inStockList: [] });
				return null;
			}
		} catch (err) {
			this.setState({ stage: 'error' });
			this.setState({ inStockList: [] });
			return null;
		}
	};

	fetchOutStockData = async () => {
		try {
			const response = await fetch(OUTSTOCK_URL, {
				method: 'GET',
				credentials: 'include',
				headers: {
					Accept: 'application/json',
					'Content-Type': 'application/json'
				}
			});

			if (response.status === 200) {
				const data = await response.json();
				if (data !== null) {
					this.setState({ outStockList: data });
				}
			} else if (response.status > 400) {
				this.setState({ outStockList: [] });
				return null;
			}
		} catch (err) {
			this.setState({ outStockList: [] });
			return null;
		}
	};

	fetchData = async () => {
		this.setState({ stage: 'loading' });
		await this.fetchOutStockData();
		await this.fetchInStockData();
	};

	// ---put data when user change quantity of line item
	putData = async () => {
		try {
			const response = await fetch(UPDATE_URL, {
				method: 'PUT',
				credentials: 'include',
				headers: {
					Accept: 'application/json',
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(this.state.list)
			});
		} catch (err) {}
	};

	componentDidMount() {
		this.fetchData();
	}

	calAll = () => {
		let subTotal = 0;
		this.state.list.map((lineItem) => {
			subTotal += lineItem.price * lineItem.quantity;
		});
		if (subTotal !== 0) {
			this.tax = subTotal * 5 / 100;
			this.total = subTotal + this.tax;
		}

		return subTotal;
	};

	render() {
		return (
			<div>
				{this.state.list.length > 0 ? (
					<div>
						<Cart {...this.state} onDelete={this.onDelete} onChange={this.onChange} />
						<div>
							<p>Subtotal: {this.calAll()}</p>
							<p>Tax: {this.tax}</p>
							<p>Total: {this.total}</p>
						</div>
					</div>
				) : (
					<p>Add something</p>
				)}
			</div>
		);
	}
}
export default CartContainer;
