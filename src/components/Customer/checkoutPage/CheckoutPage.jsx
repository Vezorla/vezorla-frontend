import React, {Component} from 'react';
import {Container, Typography} from "@material-ui/core";
import Discount from './logic/Discount';
import ReviewContainer from './logic/ReviewContainer';
import ShippingInfo from './logic/ShippingInfoContainer';
import ProcessBar from '../../common/Stepper/ProcessBar';
import CartEmpty from "../cartPage/view/CartEmpty-view";
import globalStyles from "../../../assets/styles/styles";

/**
 * @file CheckPage Component
 * @author MinhL4m
 * @version 1.0
 */

export default class CheckoutPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stage: 0,
      cart: true
    };
    this.setStage = this.setStage.bind(this);
    this._switchCase = this._switchCase.bind(this);
  }

  steps = ['Shipping Information', 'Discount', 'Review & Pay'];

  setStage(newStage) {
    this.setState({
      stage: newStage
    });
  }

  fetchCheckCart = async () => {
    try {
      const response = await fetch('url');
      if (response.status === 200) {
        const data = await response.json();
        this.setState({cart: data});
      }
    } catch (err) {
    }
  };

  _switchCase(stageVal) {
    switch (stageVal) {
      case 1:
        return <Discount stage={this.state.stage} setStage={this.setStage}/>;
      case 2:
        return <ReviewContainer stage={this.state.stage} setStage={this.setStage}/>;
      default:
        return <ShippingInfo stage={this.state.stage} setStage={this.setStage} auth={this.props.auth}/>;
    }
  }

  render() {
    return (
      <Container disableGutters style={{marginTop: "0.3rem", marginBottom: "4rem"}}>
        {this.state.cart ? (
          <Container>
            <Typography
              variant="h4"
              align={"center"}
              gutterBottom
            >
              Checkout
            </Typography>
            {this._switchCase(this.state.stage)} <ProcessBar stage={this.state.stage} steps={this.steps}/>
          </Container>
        ) : (
          <CartEmpty/>
        )}
      </Container>
    );
  }
}
