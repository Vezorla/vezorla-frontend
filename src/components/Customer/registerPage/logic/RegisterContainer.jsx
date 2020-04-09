import React, {Component} from 'react';
import {Link, withRouter} from 'react-router-dom';
import {Button, Container, makeStyles, Typography} from '@material-ui/core';
import Register from '../view/Register';
import PopUp from '../../../common/PopUp/PopUp';

/**
 * @file Register Logic Component
 * @author MinhL4m
 * @version 1.0
 */

var match = true;
const URL = 'http://localhost:8080/api/client/create-account';

const containerMainStyle = {
  height: "90vh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-around",
  textAlign: "center"
};
const containerButtonStyle = {
  display: "flex",
  flexDirection: "column"
};
const buttonStyle = {
  margin: "1rem 0"
};

/**
 * Register Logic class component
 */
class RegisterContainer extends Component {
  constructor() {
    super();
    this.state = {
      info: {
        email: '',
        password: '',
        rePassword: ''
      },
      error: false,
      success: false,
      message: ''
    };
    this.setEmail = this.setEmail.bind(this);
    this.setPassword = this.setPassword.bind(this);
    this.setRePassword = this.setRePassword.bind(this);
    this.setError = this.setError.bind(this);
    this.setSuccess = this.setSuccess.bind(this);
  }

  //----Setters-------
  setError() {
    this.setState({error: false});
  }

  setEmail = (emailVal) => {
    this.setState({info: {...this.state.info, email: emailVal}});
  };

  setPassword = (e) => {
    if (this.state.rePassword !== '') {
      match = e.target.value === this.state.info.rePassword;
    }
    this.setState({info: {...this.state.info, password: e.target.value}});
  };

  setRePassword = (e) => {
    match = this.state.info.password === e.target.value;
    this.setState({info: {...this.state.info, rePassword: e.target.value}});
  };

  setSuccess = () => {
    this.props.history.push('/login');
  };

  /**
   * Handler for submitting the registration form
   */
  onClick = async () => {
    //only 2 password match, email valid, and password is not empty then this request is send
    if (
      match === true &&
      this.state.password !== '' &&
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        this.state.info.email
      )
    ) {
      try {
        const response = await fetch(URL, {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            Content: 'application/json'
          },
          body: JSON.stringify({
            ...this.state.info
          }),
          credentials: 'include',
          mode: 'cors'
        });

        if (response.status === 200) {
          const data = await response.json();
          if (data === true) {
            this.setState({success: true});
          } else {
            this.setState({error: true});
            this.setState({message: 'Something wrong'});
          }
        } else {
          this.setState({error: true});
          this.setState({message: 'Email already exist'});
        }
      } catch (err) {
        this.setState({error: true});
      }
    }
  };

  /**
   * @returns Register component that Register Logic wrap around Register View
   */
  render() {
    return (
      <Container
        maxWidth={"sm"}
        style={containerMainStyle}>
        <Container disableGutters>
          {this.state.error ? (
            <PopUp
              message={this.state.message}
              handleOk={this.setError}
              onClose={this.setError}/>
          ) : (
            ''
          )}
          {this.state.success ? (
            <PopUp
              label="Success"
              message={this.state.message}
              handleOk={this.setSuccess}
              onClose={this.setSuccess}
            />
          ) : (
            ''
          )}
          <Register
            rePassword={this.state.rePassword}
            email={this.state.email}
            setEmail={this.setEmail}
            setPassword={this.setPassword}
            setRePassword={this.setRePassword}
            match={match}
            onClick={this.onClick}
          />
          <Button
            variant="contained"
            color="primary"
            onClick={this.onClick}
            size={"large"}
            style={buttonStyle}
            fullWidth
          >
            Create Account
          </Button>
        </Container>
        <Container disableGutters className={containerButtonStyle}>
          <Button
            variant={"contained"}
            color={"secondary"}
            component={Link}
            to="/login"
            style={buttonStyle}
            size="large"
            fullWidth
          >
            Sign in
          </Button>
        </Container>
      </Container>
    );
  }
}

export default withRouter(RegisterContainer);
