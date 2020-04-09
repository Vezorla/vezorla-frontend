import React, {Component} from 'react';
import ForgotPass from '../view/ForgotPass';
import {Container} from "@material-ui/core";

/**
 * @file Forgot Password logic Component
 * @author MinhL4m
 * @version 1.0
 */

const URL = 'http://localhost:8080/api/auth/account/forgot-password';

export default class ForgotPassContainer extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      success: false,
      error: false
    };
    this.onChange = this.onChange.bind(this);
    this.onClick = this.onClick.bind(this);
    this.setError = this.setError.bind(this);
  }

  setError() {
    this.setState({error: false});
  }

  onChange(newEmail) {
    this.setState({email: newEmail});
  }

  onClick = async () => {
    if (this.state.email !== "") {
      try {
        const response = await fetch(URL, {
          method: 'PUT',
          headers: {
            Accept: "application/json",
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(this.state.email)
        });

        if (response.status === 200) {
          const data = await response.json();
          if (data === true) {
            this.setState({success: true});
          } else if (data === false) {
            this.setState({error: true})
          }
        } else if (response.status === 406) {
          this.setState({error: true, email: ''});
        } else {
          this.setState({error: true, email: ''});
        }
      } catch (err) {
        this.setState({error: true, email: ''});
      }
    }
  };

  render() {
    return (
      <ForgotPass
        value={this.state.email}
        helperText="invalid email"
        onChange={this.onChange}
        onClick={this.onClick}
        success={this.state.success}
        error={this.state.error}
        setError={this.setError}
      />
    );
  }
}
