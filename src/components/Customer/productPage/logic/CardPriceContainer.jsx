import React, {Component} from 'react';
import CardPrice from '../view/CardPrice';

/**
 * @file CardPrice Logic Component
 * @author MinhL4m
 * @version 1.0
 */

const PUT_URL = 'http://localhost:8080/api/customer/cart/add';

/**
 * Card Price Logic Class Component
 */
export default class CardPriceContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      max: props.max,
      value: '1'
    };
    this.onChange = this.onChange.bind(this);
    this.onClick = this.onClick.bind(this);
    this.getNewQuantity = this.getNewQuantity.bind(this);
  }

  onChange = (e) => {
    if (e.target.value !== '') {
      this.setState({value: e.target.value});
    }
  };

  onClick = async () => {
    try {
      const response = await fetch(`${PUT_URL}/${this.props.id}`, {
        method: 'PUT',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        credentials: 'include',
        mode: 'cors',
        body: JSON.stringify(this.state.value)
      });
      if (response.status === 200) {
        const confirmation = await response.json();
        if (confirmation.added !== null && confirmation.added === true) {
          this.props.addCartHandler();
          // TODO: show snackbar with "Added to cart"
        }
      } else if (response.status > 400) {
        // TODO: show snackbar with error
      }
    } catch (err) {
		// TODO: show snackbar with error
    }
  };

  getNewQuantity = async () => {
  	// TODO: URL to get new quantity
    let jsonData = await fetch('url');
    let data = await jsonData.json();
    if (data !== null) {
      this.setState({max: data});
    }
  };

  render() {
    return <CardPrice {...this.props} value={this.state.value} onClick={this.onClick} onChange={this.onChange}/>;
  }
}
