import React, {Component} from "react";
import SubscriptionMailing from "./SubscriptionMailing-view";
import {Container, Snackbar} from "@material-ui/core";

const SUBSCRIPTION_URL = "http://localhost:8080/api/customer/subscribe";

export default class SubscriptionMailingContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      message: "",
      success: false,
      error: false,
      openSnackbar: false
    };
    this.setEmail = this.setEmail.bind(this);
    this.handleSubscribe = this.handleSubscribe.bind(this);
  }

  setEmail = (value) => {
    this.setState({email: value})
  };

  setMessage = (value) => {
    this.setState({message: value})
  };

  setSuccess = () => {
    this.setState({success: !this.state.success})
  };

  setError = () => {
    this.setState({error: !this.state.error})
  };

  setOpenSnackbar = () => {
    this.setState({openSnackbar: !this.state.openSnackbar})
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
            this.setMessage("Subscribed to the mailing list");
            this.setSuccess();
            this.setOpenSnackbar();
          }
        } // TODO: response for already subscribed email
      } catch (e) {
        this.setMessage("Subscription failed");
        this.setError();
      }
    }
  };

  render() {
    return (
      <Container disableGutters maxWidth={"false"}>
        {this.state.success ? (
          <Snackbar
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
            open={this.state.openSnackbar}
            autoHideDuration={5000}
            message={this.state.message}
            onClose={this.setOpenSnackbar}
          />
        ) : ("")
        }
        <SubscriptionMailing
          {...this.state}
          setEmail={this.setEmail}
          handleSubscribe={this.handleSubscribe}
        />
      </Container>
    );
  }
}