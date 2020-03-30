import React, {Component} from "react";
import BestSellers from "./BestSellers-view";

// TODO: API call for best seller products
const PRODUCTS_URL = "http://localhost:8080/api/customer/inventory/products/all";

export default class BestSellersContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      stage: ''
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData = async () => {
    this.setState({stage: "loading"});
    try {
      const response = await fetch(PRODUCTS_URL);
      if (response.status === 200) {
        const data = await response.json();
        if (data !== null) {
          this.setState({list: data});
          this.setState({stage: "done"});
        }
      } else if (response.status >= 400) {
        this.setState({stage: "error"});
      }
    } catch (error) {
      this.setState({stage: "error"});
    }
  };

  render() {
    return (
      <BestSellers list={this.state.list} stage={this.state.stage}/>
    );
  }
}