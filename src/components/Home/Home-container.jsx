import React, {Component} from "react";
import Home from "./Home-view";
import {withRouter} from "react-router";

class HomeContainer extends Component {
  render() {
    return (
      <Home/>
    );
  }
}

export default withRouter(HomeContainer);