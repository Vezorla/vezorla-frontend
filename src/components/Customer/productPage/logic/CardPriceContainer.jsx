import React, { Component } from 'react';
import CardPrice from '../view/CardPrice'

export default class CardPriceContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			max: props.max,
			value: '1'
        };
        this.onChange = this.onChange.bind(this)
        this.oneClick = this.onClick.bind(this)
        this.getNewQuantity = this.getNewQuantity.bind(this)
    }
    
    onChange = (e) => {
        this.setState({value: e.target.value})
    }

	onClick = async () => {
		let data = '';
		
		data = await fetch(`http://localhost:8080/api/customer/cart/add/${this.props.id}`, {
			method: 'PUT',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			credentials: 'include',
			body: JSON.stringify(this.state.value)
		})
			.then((res) => {
				return res.json();
			})
			.catch((err) => {
				return null;
            });
            
		if (data !== null && data === true) {
			this.props.addCartHandler(data);
		}
    };
  
     //when add to cart, get new quntity
    getNewQuantity = async () =>{
        let jsonData = await fetch('url');
        let data = await jsonData.json();
        if(data !== null){
            this.setState({max: data});
        }     
    }

	render() {
		return <CardPrice {...this.props} value={this.state.value} onClick={this.onClick} onChange={this.onChange}/>;
	}
}
