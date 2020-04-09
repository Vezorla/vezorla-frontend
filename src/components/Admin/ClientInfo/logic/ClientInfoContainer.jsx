import React, {Component} from 'react';
import {withRouter} from 'react-router';
import ClientInfo from '../view/ClientInfo';

/**
 * @file Client Info Componenet
 * @author MinhL4m
 * @version 1.0
 */

const FETCH_URL = 'http://localhost:8080/api/admin/client';
const SAVE_URL = 'http://localhost:8080/api/client/account/update';
const RESET_URL = 'http://localhost:8080/api/auth/account/forgot-password';

class ClientInfoContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      info: {
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        address: '',
        city: '',
        province: '',
        postalCode: '',
        country: '',
        type: ''
      },
      stage: '',
      error: false,
      message: '',
      success: false,
      reseted: false,
      order: 0,
      value: 0
    };
    this.goBack = this.goBack.bind(this);
    this.setPopUp = this.setPopUp.bind(this);
    this.setStateValue = this.setStateValue.bind(this);
    this.setPhone = this.setPhone.bind(this);
    this.setPostalCode = this.setPostalCode.bind(this);
  }

  //----setter------
  setStateValue(field) {
    return (e) => {
      this.setState({info: {...this.state.info, [`${field}`]: e.target.value}});
    };
  }

  setPopUp(field) {
    return (e) => {
      this.setState({[`${field}`]: false});
    };
  }

  setPhone(newVal) {
    this.setState({
      info: {
        ...this.state.info,
        phoneNumber: newVal
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

  goBack() {
    this.props.history.push('/admin/clients');
  }

  onSave = async () => {
    try {
      const response = await fetch(`${SAVE_URL}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        credentials: 'include',
        body: JSON.stringify(this.state.info)
      });
      if (response.status === 200) {
        this.setState({success: true, message: 'Information updated'});
      } else if (response.status >= 400) {
        this.setState({error: true, message: 'Error has occured! Please try again later.'});
      }
    } catch (err) {
      this.setState({error: true, message: 'Error has occured! Please try again later.'});
    }
  };

  onReset = async () => {
    try {
      const response = await fetch(`${RESET_URL}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        credentials: 'include',
        mode: 'cors',
        body: JSON.stringify(this.state.info.email)
      });
      if (response.status === 200) {
        const data = await response.json();
        if (data === true) {
          this.setState({reseted: true, message: 'Password reset'});
        }
      }
    } catch (error) {
      this.setState({error: true, message: 'Error resetting password'});
    }
  };

  fetchData = async () => {
    try {
      const response = await fetch(`${FETCH_URL}/${this.props.email}`);
      if (response.status === 200) {
        const data = await response.json();
        this.setState({info: {...data}});
        this.setState({stage: 'done'});
      } else if (response.status >= 400) {
        this.setState({stage: 'error', message: 'Error has occured! Please try again later.'});
      }
    } catch (err) {
      this.setState({stage: 'error', message: 'Error has occured! Please try again later.'});
    }
  };

  componentDidMount() {
    this.setState({stage: 'loading'});
    this.fetchData();
  }

  render() {
    return (
      <ClientInfo
        {...this.state}
        setFirstname={this.setStateValue('firstName')}
        setLastname={this.setStateValue('lastName')}
        setPhone={this.setPhone}
        setAddress={this.setStateValue('address')}
        setCity={this.setStateValue('city')}
        setProvince={this.setStateValue('province')}
        setPostalCode={this.setPostalCode}
        setCountry={this.setStateValue('country')}
        onSave={this.onSave}
        onReset={this.onReset}
        setError={this.setPopUp('error')}
        setReset={this.setPopUp('reseted')}
        goBack={this.goBack}
      />
    );
  }
}

export default withRouter(ClientInfoContainer);
