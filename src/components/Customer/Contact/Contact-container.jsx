import React, {Component} from 'react'
import Contact from './Contact-view'
import {Container, Snackbar} from "@material-ui/core";

const CONTACT_URL = "http://localhost:8080/api/customer/contact-us";

export default class ContactContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      message: '',
      success: false,
      error: false,
      responseMessage: "",
      openSnackbar: false
    };
    this.setName = this.setName.bind(this);
    this.setEmail = this.setEmail.bind(this);
    this.setMessage = this.setMessage.bind(this);
    this.handleSend = this.handleSend.bind(this);
  };

  setName = (e) => {
    this.setState({name: e.target.value});
  };

  setEmail = (value) => {
    this.setState({email: value});
  };

  setMessage = (e) => {
    this.setState({message: e.target.value});
  };

  setSuccess = () => {
    this.setState({success: !this.state.success})
  };

  setError = () => {
    this.setState({error: !this.state.error})
  };

  setResponseMessage = (value) => {
    this.setState({responseMessage: value})
  };

  setOpenSnackbar = () => {
    this.setState({openSnackbar: !this.state.openSnackbar})
  };

  handleSnackbarClose = () => {
    this.setOpenSnackbar();
    if (this.state.success)
      this.setSuccess();
    else if (this.state.error)
      this.setError();
  };

  handleSend = async () => {
    if (this.state.email !== "" && this.state.message !== "") {
      try {
        const response = await fetch(CONTACT_URL, {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            Content: 'application/json'
          },
          body: JSON.stringify(
            {
              name: this.state.name,
              senderEmail: this.state.email,
              message: this.state.message
            }
          )
        });

        if (response.status === 200) {
          const data = await response.json();
          if (data === true) {
            this.setResponseMessage("Message sent");
            this.setSuccess();
            this.setOpenSnackbar();
          }
        } else if (response.status === 406) {
          this.setResponseMessage("Invalid email");
          this.setError();
          this.setOpenSnackbar();
        }
      } catch (e) {
        this.setResponseMessage("Message failed to send");
        this.setError();
        this.setOpenSnackbar();
      }
    }
  };

  render() {
    return (
      <Container disableGutters maxWidth="false">
        {this.state.success ? (
          <Snackbar
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
            open={this.state.openSnackbar}
            autoHideDuration={5000}
            message={this.state.responseMessage}
            onClose={this.handleSnackbarClose}
          />
        ) : ("")
        }
        {this.state.error ? (
          <Snackbar
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left"
            }}
            open={this.state.openSnackbar}
            autoHideDuration={5000}
            message={this.state.responseMessage}
            onClose={this.handleSnackbarClose}
          />
        ) : ("")
        }
        <Contact
          {...this.state}
          setMessage={this.setMessage}
          setName={this.setName}
          setEmail={this.setEmail}
          handleSend={this.handleSend}
        />
      </Container>
    )
  }
}
