import React, {Component} from "react";
import {withRouter} from "react-router";
import PurchaseOrder from "./PurchaseOrder-view";

class PurchaseOrderContainer extends Component {
  render() {
    return (
      <PurchaseOrder/>
    );
  }
}

export default withRouter(PurchaseOrderContainer);