import React, { Component } from 'react';
import Cart from '../view/Cart';


class CartContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			list: '',
			stage: ''
		};

		this.setList = this.setList.bind(this);
		this.onChange = this.onChange.bind(this);
		this.onDelete = this.onDelete.bind(this);
	}

	timeOutVar = [];
	tax = 0;
	total = 0;

	//---Setter for state-----
	setList = (listVal) => {
		this.setState({ list: listVal });
	};

	setStage = (stageVal) => {
		this.setState({ stage: stageVal });
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
	onDelete = /*async*/ (prodId) => {
		// let jsonData = await fetch(`http://url/${prodId}`, {
		//     method: 'DELETE',
		//     headers:{
		//         'Accept':'application/json',
		//         'Content-Type': 'application/json',
		//     },
		//     body: JSON.stringify(prodId)
		// })

		// if(jsonData.ok){
		//     let data = await jsonData.json();
		//     if(data === true){

		let newList = this.state.list.filter((lineItem) => lineItem.prodId !== prodId);

		this.setList(newList);
		//     }
		// }
	};

	fetchData = async () => {
		this.setStage('loading');

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
				this.setStage('error');
				this.setList('');
				return null;
			});
		if (data !== null && data.status !== 500) {
			this.setList(data);
			this.setStage('done');
		}
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
		this.total = subTotal + this.tax;
		return subTotal;
	};

	render() {
		return (
			<div>
				{this.state.list !== '' ? (
					<div>
						<Cart {...this.state} onDelete={this.onDelete} onChange={this.onChange} />
						<div>
							<p>Subtotal: {this.calAll()}</p>
							<p>Tax: {this.tax}</p>
							<p>Total: {this.total}</p>
						</div>
					</div>
				) : (
					<p>add something you piece of shit</p>
				)}
			</div>
		);
	}
}
export default CartContainer;
