import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField'
import ProcessButtons from '../common/Stepper/ProcessButtons'

var emailValid = true
var postalCodeValid = true

class ShippingInfo extends Component {

    constructor(props) {
        super(props)
        this.state = {
            info: {
                firstname: '',
                lastname: '',
                email: '',
                phone: '',
                address: '',
                city: '',
                postalCode: '',
                pickup: false,
            },
            phoneNumber: '',
            postalCode: '',
            complete: false
        }
        this.setPhone = this.setPhone.bind(this)
        this.emailHandler = this.emailHandler.bind(this)
        this.phoneHandler = this.phoneHandler.bind(this)
        this.postalCodeHandler = this.postalCodeHandler.bind(this)
        this.handleNext = this.handleNext.bind(this)
    }


    //----setter------
    setPhone(phoneVal) {
        this.setState({ phone: phoneVal });
    }

    componentDidMount() {
        // TODO check account if user have account then auto fill the fill
    }

    //----Input Handler-----
    emailHandler = (e) => {
        const regrex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        const target = e.target
        emailValid = regrex.test(e.target.value.toLowerCase()) || (e.target.value === '')
        this.setState(prevState => ({
            info: {
                ...prevState.info,
                email: target.value
            }
        }))
    }

    phoneHandler = (e) => {
        const inputVal = e.target.value.replace(/\D/g, '').match(/(\d{0,3})(\d{0,3})(\d{0,4})/);
        this.setState(prevState => ({
            info: {
                ...prevState.info,
                phone: inputVal[0]
            }
        }))
        this.setState({ phoneNumber: !inputVal[2] ? inputVal[1] : '(' + inputVal[1] + ') ' + inputVal[2] + (inputVal[3] ? '-' + inputVal[3] : '') });
    }

    postalCodeHandler = (e) => {
        const inputVal = e.target.value.replace(/\s/g, '').match(/([a-zA-Z0-9]{0,3})([a-zA-Z0-9]{0,3})/);
        const regrex = /[A-Z]{1}\d{1}[A-Z]{1}\d{1}[A-Z]{1}\d{1}/g

        this.setState(prevState => ({
            info: {
                ...prevState.info,
                postalCode: inputVal[0]
            }
        }))
        this.setState({ postalCode: !inputVal[2] ? inputVal[1].toUpperCase() : inputVal[1].toUpperCase() + ' ' + inputVal[2].toUpperCase() })


        if (!regrex.test(inputVal[0]) && inputVal[0].length === 6) {
            postalCodeValid = false;
        } else {
            postalCodeValid = true;
        }
    }


    //----next button handler---
    handleNext = async () => {

        // if(this.checkComplete()){
        // let data = ''
        // const jsonData = await fetch('url', {
        //     method: 'PUT',
        //     header: {
        //         'accept':'application/json',
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify(this.state.info)
        // })

        // if(jsonData.ok){
        //     data = await jsonData.json();
        // }

        // if(data){
        console.log(this.state)
        this.props.setStage(this.props.stage + 1)
        // }
        // }else{
        // change the input
        // }

    }

    //---check all the require field is filled
    checkComplete = () => {
        const email = this.state.info.email;
        const address = this.state.info.address;
        const city = this.state.info.city;
        const postalCode = this.state.info.postalCode;

        if (email !== " " && address !== '' && city !== '' && postalCode.length === 6 && emailValid && postalCodeValid) {
            return true
        } else {
            return false
        }
    }

    render() {
        return (
            <div>
                <h1>Shipping Information</h1>
                <TextField autoFocus label="First Name"
                    value={this.state.info.firstname}
                    onChange={e => {
                        const target = e.target
                        this.setState(prevState => ({
                            info: {
                                ...prevState.info,
                                firstname: target.value
                            }
                        }))
                    }}
                />

                <TextField label="Last Name"
                    value={this.state.info.lastname}
                    onChange={e => {
                        const target = e.target
                        this.setState(prevState => ({
                            info: {
                                ...prevState.info,
                                lastname: target.value
                            }
                        }))
                    }}
                />

                <TextField required
                    label="Email"
                    error={!emailValid}
                    helperText={emailValid ? "" : "Invalid Email"}
                    value={this.state.info.email}
                    onChange={this.emailHandler}
                />

                <TextField
                    label="Phone"
                    value={this.state.phoneNumber}
                    onChange={this.phoneHandler}
                />

                <TextField required label="Shipping Address"
                    value={this.state.info.address}
                    onChange={e => {
                        const target = e.target
                        this.setState(prevState => ({
                            info: {
                                ...prevState.info,
                                address: target.value
                            }
                        }))
                    }}
                />

                <TextField required label="City"
                    value={this.state.info.city}
                    onChange={e => {
                        const target = e.target
                        this.setState(prevState => ({
                            info: {
                                ...prevState.info,
                                city: target.value
                            }
                        }))
                    }}
                />

                <TextField required
                    label="Postal Code"
                    error={!postalCodeValid}
                    helperText={postalCodeValid ? "" : "Invalid Postal Code"}
                    value={this.state.postalCode}
                    onChange={this.postalCodeHandler}
                />

                <ProcessButtons
                    stage={this.props.stage}
                    handleBack={null}
                    handleNext={this.handleNext}
                    hasNext={true}
                    complete={true}
                />
            </div>
        )
    }
}


export default ShippingInfo;