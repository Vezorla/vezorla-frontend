import React, {Component} from "react";
import Banner from "./Banner-view";

const BANNER_TEXT_URL = "http://localhost:8080/api/customer/banner";

export default class BannerContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ''
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData = async () => {
    const response = await fetch(BANNER_TEXT_URL);
    if (response.status === 200) {
      const data = await response.json();
      this.setState({text: data.text});
    }
  };

  render() {
    return (
      <Banner text={this.state.text}/>
    );
  }
}