import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import {Checkbox, Container, FormControlLabel, Typography} from '@material-ui/core';
import ProcessButtons from '../../../common/Stepper/ProcessButtons';
import InputGroupRequired from '../../../common/Inputs/NecessaryInput/InputGroupRequired';
import PopUp from '../../../common/PopUp/PopUp';

/**
 * @file Shipping Component
 * @author MinhL4m
 * @version 1.0
 */

const GET_URL = 'http://localhost:8080/api/customer/info';
const POST_URL = 'http://localhost:8080/api/customer/cart/checkout/shipping';
const CHECK_URL = 'url';

class ShippingInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      info: {
        firstName: '',
        lastName: '',
        email: '',
        phoneNum: '',
        address: '',
        city: '',
        postalCode: '',
        province: '',
        country: '',
        pickup: false
      },
      error: false,
      message: '',
      disabledEmail: false,
      filled: true
    };
    this.setStateInfo = this.setStateInfo.bind(this);
    this.handleNext = this.handleNext.bind(this);
    this.setPhoneNumber = this.setPhoneNumber.bind(this);
    this.setPostalCode = this.setPostalCode.bind(this);
    this.setEmail = this.setEmail.bind(this);
    this.setError = this.setError.bind(this);
    this.setPickup = this.setPickup.bind(this);
  }

  setStateInfo(field) {
    return (e) => {
      this.setState({
        info: {
          ...this.state.info,
          [`${field}`]: e.target.value
        }
      });
    };
  }

  setError() {
    this.setState({error: false});
  }

  setPhoneNumber(newVal) {
    this.setState({
      info: {
        ...this.state.info,
        phoneNum: newVal
      }
    });
  }

  setPostalCode(newVal) {
    this.setState({
      info: {
        ...this.state.info,
        postalCode: newVal
      }
    });
  }

  setEmail(newVal) {
    this.setState({
      info: {
        ...this.state.info,
        email: newVal
      }
    });
  }

  setPickup() {
    this.setState({
      info: {
        ...this.state.info,
        pickup: !this.state.info.pickup,
        address: '',
        city: '',
        province: '',
        country: ''
      }
    });
  }

  componentDidMount() {
    this.fetchData();
  }

  // get customer info on load
  fetchData = async () => {
    try {
      const responseCheck = await fetch(CHECK_URL, {
        method: 'GET',
        credentials: 'include',
        mode: 'cors'
      });

      if (responseCheck.status === 200) {
        try {
          const response = await fetch(GET_URL, {
            method: 'GET',
            credentials: 'include',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json'
            }
          });

          if (response.status === 200) {
            const data = await response.json();
            if (data.email !== '') {
              this.setState({
                disabledEmail: this.props.auth === 'client',
                info: {
                  firstName: data.firstName || '',
                  lastName: data.lastName || '',
                  email: data.email || '',
                  phoneNum: data.phoneNum || '',
                  address: data.address || '',
                  city: data.city || '',
                  postalCode: data.postalCode || '',
                  province: data.province || '',
                  country: data.country || '',
                  pickup: false
                }
              });
            }
          }
        } catch (err) {
        }
      } else if (responseCheck.status >= 400) {
        this.props.history.push('/');
      }
    } catch (err) {
      this.props.history.push('/');
    }
  };

  //----next button handler---
  handleNext = async () => {
    if (
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        this.state.info.email
      ) &&
      /[A-Z]{1}\d{1}[A-Z]{1}\d{1}[A-Z]{1}\d{1}/g.test(this.state.info.postalCode) &&
      this.state.info.lastName !== '' &&
      this.state.info.firstName !== '' &&
      this.state.info.phoneNum !== ''
    ) {
      try {
        const response = await fetch(POST_URL, {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({...this.state.info}),
          credentials: 'include'
        });

        if (response.status === 200) {
          this.props.setStage(this.props.stage + 1);
        } else if (response.status === 401 || response.status === 500) {
          this.props.history.push('/home');
        } else if (response.status === 406) {
          this.setState({error: true, message: 'Missing fields! Please check again'});
        } else {
          this.setState({error: true, message: 'Error has occured! Please try again later.'});
        }
      } catch (err) {
        this.setState({error: true, message: 'Error has occured! Please try again later.'});
      }
    } else {
      this.setState({filled: false});
    }
  };

  render() {
    return (
      <Container disableGutters>
        {this.state.error ? (
          <PopUp message={this.state.message} handleOk={this.setError} onClose={this.setError}/>
        ) : (
          ''
        )}
        <Container disableGutters>
          <InputGroupRequired
            info={this.state.info}
            setAddress={this.setStateInfo('address')}
            setCity={this.setStateInfo('city')}
            setCountry={this.setStateInfo('country')}
            setEmail={this.setEmail}
            setFirstname={this.setStateInfo('firstName')}
            setLastname={this.setStateInfo('lastName')}
            setPhone={this.setPhoneNumber}
            setPostalCode={this.setPostalCode}
            setProvince={this.setStateInfo('province')}
            disabled={this.state.info.pickup}
            disabledEmail={this.state.disabledEmail}
            required={true}
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={this.state.info.pickup}
                onChange={this.setPickup}
                value="pickup"
                color={"primary"}
              />
            }
            label="Pickup at warehouse (FREE)"
          />
          {!this.state.filled ?
            <Typography
              align={"center"}
              color={"error"}
            >
              All fields marked (*) are required
            </Typography>
            : ''
          }
          <ProcessButtons
            stage={this.props.stage}
            handleBack={null}
            handleNext={this.handleNext}
            hasNext={true}
            complete={true}
          />
        </Container>
      </Container>
    );
  }
}

export default withRouter(ShippingInfo);
