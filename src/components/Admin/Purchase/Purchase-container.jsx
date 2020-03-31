import React, {Component} from "react";
import {withRouter} from "react-router-dom";
import Purchase from "./Purchase-view";

class PurchaseContainer extends Component {
  render() {
    return (
      <Purchase/>
    );
  }
}

export default withRouter(PurchaseContainer);