import React, {Component} from "react";
import {withRouter} from "react-router-dom";
import DiscountPage from "./DiscountPage-view";

const URL = "";

class DiscountPageContainer extends Component {
  render() {
    return (
      <DiscountPage/>
    )
  }
}

export default withRouter(DiscountPageContainer);