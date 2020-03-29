import React, { Component } from 'react';
import Cart from '../view/Cart';
import PopUp from '../../../common/PopUp/PopUp';
import { Link } from 'react-router-dom';
import { Button, TextField } from '@material-ui/core';

/**
 * @file Cart Logic Component
 * @author MinhL4m
 * @version 1.0
 */

const DEL_URL = 'http://localhost:8080/api/customer/cart/remove';
const UPDATE_URL = 'http://localhost:8080/api/customer/cart/update';
const INSTOCK_URL = 'http://localhost:8080/api/customer/cart/view';
const OUTSTOCK_URL = 'http://localhost:8080/api/customer/cart/view/out_of_stock';

class CartContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			inStockList: [],
			outStockList: [],
			quantity: [],
			stage: '',
			error: false,
			message: '',
			done: false
		};

		this.onChange = this.onChange.bind(this);
		this.onDelete = this.onDelete.bind(this);
	}

	timeOutVar = [];
	tax = 0;
	total = 0;

	//---function active when user change value of line item
	onChange = async (prodId, newVal) => {
		try {
			let response = await fetch(`${UPDATE_URL}/${prodId}/${newVal}`, {
				method: 'PUT',
				headers: {
					Accept: 'application/json',
					'Content-Type': 'application/json'
				},
				mode: 'cors',
				credentials: 'include'
			});

			if (response.status === 200) {
				let data = await response.json();

				if (data === true) {
					this.props.changeCartHandler();
					this.setState({
						inStockList: [
							...this.state.inStockList.map((lineItem) => {
								if (lineItem.prodID === prodId) {
									lineItem.quantity = newVal;
								}
								return lineItem;
							})
						]
					});
				} else {
					this.setState({
						...this.state,
						error: true,
						message: 'Ooops, seem like you reach the maximum stock of this product'
					});
				}
			}
		} catch (err) {
			this.setState({ error: true, message: 'something wrong, we cannot change this item right now' });
		}
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
					this.props.changeCartHandler();
					let newList = this.state.inStockList.filter((lineItem) => lineItem.prodID !== prodId);
					this.setState({ inStockList: newList });
				}
			} else if (response.status >= 400) {
				this.setState({ error: true, message: 'something wrong, we cannot delete this item right now' });
			}
		} catch (err) {
			this.setState({ error: true, message: 'something wrong, we cannot delete this item right now' });
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
					this.setState({ stage: 'done', done: 'done' });
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

	componentDidMount() {
		this.fetchData();
	}

	calAll = () => {
		let subTotal = 0;
		this.state.inStockList.map((lineItem) => {
			subTotal += lineItem.price * lineItem.quantity;
		});
		if (subTotal !== 0) {
			subTotal = subTotal.toFixed(2);
			this.tax = Number(subTotal) * 5 / 100;
			this.tax = Number(this.tax).toFixed(2);
			this.total = Number(subTotal) + Number(this.tax);
			this.total = this.total.toFixed(2);
		}

		return subTotal;
	};

	render() {
		return this.state.done ? (
			<div>
				{this.state.error ? (
					<PopUp
						message={this.state.message}
						onClose={() => {
							this.setState({ ...this.state, error: false });
						}}
						handleOk={() => {
							this.setState({ ...this.state, error: false });
						}}
					/>
				) : (
					''
				)}
				{this.state.inStockList.length > 0 || this.state.outStockList.length > 0 ? (
					<div>
						<Cart
							key="cart"
							{...this.state}
							onDelete={this.onDelete}
							onChange={this.onChange}
							quantity={this.state.quantity}
						/>
						{this.state.inStockList.length > 0 ? (
							<div key="price">
								<div>
									<p>Subtotal: ${this.calAll()}</p>
									<p>Tax: ${this.tax}</p>
									<p>Total: ${this.total}</p>
								</div>
								<Link to="/customer/checkout">
									<Button variant="contained">Checkout</Button>
								</Link>
							</div>
						) : (
							''
						)}
					</div>
				) : (
					<p>Add something</p>
				)}
			</div>
		) : (
			''
		);
	}
}
export default CartContainer;
