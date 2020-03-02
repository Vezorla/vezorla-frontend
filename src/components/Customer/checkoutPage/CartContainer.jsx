import React, { Component } from 'react';
import Cart from '../cartPage/view/Cart';
import ProcessButtons from '../../common/Stepper/ProcessButtons';

/**
 * @file Cart Component
 * @author MinhL4m
 * @version 1.0
 */

export default class CartContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			list: [],
			discount: 0
		};
		this.setList = this.setList.bind(this);
		this.setDiscount = this.setDiscount.bind(this);
		this.onChange = this.onChange.bind(this);
		this.onDelete = this.onDelete.bind(this);
	}

	timeOutVar = [];

	//---Setter for state-----
	setList = (listVal) => {
		this.setState({ list: listVal });
	};

	setDiscount = (discountVal) => {
		this.setState({ discount: discountVal });
	};

	onChange = (prodId, newVal) => {
		this.timeOutVar.forEach((timeout) => clearTimeout(timeout));
		let tempList = this.state.list.map((lineItem) => {
			if (lineItem.prodId === prodId) {
				lineItem.quantity = newVal;
			}
			return lineItem;
		});

		this.setList(tempList);
		this.timeOutVar.push(
			setTimeout(() => {
				console.log('a');
				//put data.
			}, 5000)
		);
	};

	//-----function delete product----
	onDelete = async (prodId) => {
		try {
			let response = await fetch(`http://url/${prodId}`, {
				method: 'DELETE',
				headers: {
					Accept: 'application/json',
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(prodId)
			});

			if (response.status === 200) {
				let data = await response.json();
				if (data === true) {
					let newList = this.state.list.filter((lineItem) => lineItem.prodId !== prodId);

					this.setList(newList);
				}
			} else if (response.status > 400) {
				this.setStage('error');
			}
		} catch (err) {
			this.setStage('error');
		}
	};

	fetchData = async () => {
		this.setStage('loading');

		try {
			const response = await fetch(`http://localhost:8080/api/customer/cart/view`, {
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
					this.setList(data);
					this.setStage('done');
				}
			} else if (response.status > 400) {
				this.setStage('error');
				this.setList('');
				return null;
			}
		} catch (err) {
			this.setStage('error');
			this.setList('');
			return null;
		}
	};

	//Many type of discount
	fetchDiscount = async () => {
		const data = await fetch(`http://localhost:8080/api/customer/cart/view`, {
			method: 'GET',
			credentials: 'include',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json'
			}
		})
			.then((res) => {
				return res.json();
			})
			.catch((err) => {
				this.setDiscount(0);
				return null;
			});
	};

	componentDidMount() {
		this.fetchData();
	}

	calAll = () => {
		let subTotal = 0;
		this.state.list.map((lineItem) => {
			console.log(subTotal);
			subTotal += lineItem.price * lineItem.quantity;
		});
		this.tax = subTotal * 5 / 100;
		this.total = subTotal + this.tax - subTotal * this.state.discount;
		return subTotal;
	};

	handleBack = () => {
		this.props.setStage(this.props.stage - 1);
	};

	handleNext = () => {
		this.props.setStage(this.props.stage + 1);
	};

	render() {
		return (
			<div>
				<Cart {...this.state} onDelete={this.onDelete} onChange={this.onChange} />
				<div>
					<p>Subtotal: {this.calAll()}</p>
					<p>Tax: {this.tax}</p>
					<p>Discount: {this.state.discount}</p>
					<p>Total: {this.total}</p>
				</div>
				<ProcessButtons
					handleBack={this.handleBack}
					handleNext={this.handleNext}
					complete={true}
					hasNext={true}
				/>
			</div>
		);
	}
}
