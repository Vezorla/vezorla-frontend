import React, {Component} from "react";
import SubscriptionMailing from "./SubscriptionMailing-view";

// TODO: API call to add email to subscription mailing list
const SUBSCRIPTION_URL = "";

export default class SubscriptionMailingContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      message: ""
    };
    this.setEmail = this.setEmail.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  setEmail = (input) => {
    this.setState({email: input})
  };

  handleClick = async () => {
    try {
      const response = await fetch(SUBSCRIPTION_URL, {
        method: "POST",
        headers: {
          Accept: "application/json",
          Content: "application/json"
        },
        body: JSON.stringify({email: this.state.email})
      });
      // TODO: manage response statuses
    } catch (e) {
      this.setState({error: "Subscription failed. Try again please."})
    }
  };

  render() {
    return (
      <SubscriptionMailing
        {...this.state}
        setEmail={this.setEmail}
        handleClick={this.handleClick}
      />
    );
  }
}