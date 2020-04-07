import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Button, Container, Divider, Typography} from '@material-ui/core';
import PopUp from '../../../common/PopUp/PopUp';
import Cart from '../view/Cart';
import CartEmpty from "../view/CartEmpty-view";

/**
 * @file Cart Logic Component
 * @author MinhL4m
 * @version 1.0
 */

const DEL_URL = 'http://localhost:8080/api/customer/cart/remove';
const UPDATE_URL = 'http://localhost:8080/api/customer/cart/update';
const INSTOCK_URL = 'http://localhost:8080/api/customer/cart/view';
const OUTSTOCK_URL = 'http://localhost:8080/api/customer/cart/view/out_of_stock';
const IMG_URL = 'http://localhost:8080/api/admin/img/get';

const containerPriceStyle = {
  marginBottom: "4rem",
};
const containerButtonsStyle = {
  display: "flex",
  justifyContent: "space-evenly",
  margin: "1rem 0"
};

class CartContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inStockList: [],
      outStockList: [],
      quantity: [],
      img: [],
      stage: '',
      error: false,
      message: '',
      done: false
    };

    this.onChange = this.onChange.bind(this);
    this.onDelete = this.onDelete.bind(this);
  }

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
            message: 'Seem like you reach the maximum stock of this product'
          });
        }
      }
    } catch (err) {
      this.setState({error: true, message: 'Something wrong, we cannot change this item right now'});
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
          this.setState({inStockList: newList});
        }
      } else if (response.status >= 400) {
        this.setState({error: true, message: 'Something wrong, we cannot delete this item right now'});
      }
    } catch (err) {
      this.setState({error: true, message: 'Something wrong, we cannot delete this item right now'});
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
          let tempImgs = [];
          for (let temp of data) {
            tempImgs.push(temp.imageMain);
          }
          this.setState({inStockList: data});
          for (let index in tempImgs) {
            const response = await fetch(`${IMG_URL}/${tempImgs[index]}`, {
              method: 'GET',
              credentials: 'include',
              mode: 'cors'
            });
            const data = await response.json();
            tempImgs[index] = data.picByte;
          }

          this.setState({stage: 'done', done: 'done', imgs: [...tempImgs]});
        }
      } else if (response.status > 400) {
        this.setState({stage: 'error'});
        this.setState({inStockList: []});
        return null;
      }
    } catch (err) {
      this.setState({stage: 'error'});
      this.setState({inStockList: []});
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
          this.setState({outStockList: data});
        }
      } else if (response.status > 400) {
        this.setState({outStockList: []});
        return null;
      }
    } catch (err) {
      this.setState({outStockList: []});
      return null;
    }
  };

  fetchData = async () => {
    this.setState({stage: 'loading'});
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
      return lineItem;
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
      <Container disableGutters>
        {this.state.error ? (
          <PopUp
            message={this.state.message}
            onClose={() => {
              this.setState({...this.state, error: false});
            }}
            handleOk={() => {
              this.setState({...this.state, error: false});
            }}
          />
        ) : (
          ''
        )}
        {this.state.inStockList.length > 0 || this.state.outStockList.length > 0 ? (
          <Container disableGutters>
            <Cart
              key="cart"
              {...this.state}
              onDelete={this.onDelete}
              onChange={this.onChange}
              quantity={this.state.quantity}
            />
            {this.state.inStockList.length > 0 ? (
              <Container key="price" style={containerPriceStyle}>
                <Container disableGutters>
                  <Typography>
                    Subtotal ${this.calAll()}
                  </Typography>
                  <Typography gutterBottom>
                    Tax ${this.tax}
                  </Typography>
                  <Typography>
                    TOTAL <b>${this.total}</b>
                  </Typography>
                </Container>
                <Container style={containerButtonsStyle}>
                  <Button
                    variant="contained"
                    color="primary"
                    component={Link}
                    to="/customer/checkout"
                    fullWidth
                  >
                    Checkout
                  </Button>
                </Container>
              </Container>
            ) : (
              ''
            )}
          </Container>
        ) : (
          <CartEmpty/>
        )}
      </Container>
    ) : (
      ''
    );
  }
}

export default CartContainer;
