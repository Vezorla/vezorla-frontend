import React, {Component} from "react";
import SubscriptionMailing from "./SubscriptionMailing-view";

// TODO: API call to add email to subscription mailing list
const SUBSCRIPTION_URL = "http://localhost:8080/api/customer/subscribe";

export default class SubscriptionMailingContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      message: ""
    };
    this.setEmail = this.setEmail.bind(this);
    this.handleSubscribe = this.handleSubscribe.bind(this);
  }

  setEmail = (value) => {
    this.setState({email: value})
  };

  handleSubscribe = async () => {
    if (this.state.email !== "") {
      try {
        const response = await fetch(SUBSCRIPTION_URL, {
          method: "POST",
          headers: {
            Accept: "application/json",
            Content: "application/json"
          },
          body: JSON.stringify(this.state.email)
        });
        if (response.status === 200) {
          const data = await response.json();
          if (data === true) {
            // TODO: Show success on subscribing to mailing list
          }
        }
      } catch (e) {
        this.setState({error: "Subscription failed. Try again please."})
      }
    }
  };

  render() {
    return (
      <SubscriptionMailing
        {...this.state}
        setEmail={this.setEmail}
        handleSubscribe={this.handleSubscribe}
      />
    );
  }
}