import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField';

var emailValid = true
var phoneValid = true
var postalCodeValid = true

export default class ShippingInfo extends Component {

    constructor(props){
        super(props)
        this.state ={
            firstname: '',
            lastname: '',
            email: '',
            phone: '',
            address: '',
            city: '',
            postalCode: '',
            pickup: false,
        }
        this.emailHandler = this.emailHandler.bind(this)
        // this.phoneHandler = this.phoneHandler.bind(this)
        // this.addressHandler = this.addressHandler.bind(this)
    }

    componentDidMount(){
        // TODO check account if user have account then auto fill the fill
    }

    emailHandler = (e) =>{
        const regrex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        emailValid = regrex.test(e.target.value.toLowerCase())
        this.setState({email : e.target.value})
    }

    phone

    render() {
        return (
            <div>
                <h1>Shipping Information</h1>
                <TextField autoFocus label="First Name" value={this.state.firstname} onChange={e => this.setState({firstname: e.target.value})}/>
                <TextField label="Last Name" value={this.state.lastname} onChange={e => this.setState({lastname: e.target.value})}/>
                <TextField required 
                    error={!emailValid} 
                    label="Email"
                    helperText={emailValid?"":"Invalid Email"}
                    value={this.state.email}
                    onChange={this.emailHandler}
                />
                <TextField required label="Phone"/>
                <TextField required label="Shipping Address"/>
                <TextField required label="City"/>
                <TextField required label="Postal Code"/>
            </div>
        )
    }
}
