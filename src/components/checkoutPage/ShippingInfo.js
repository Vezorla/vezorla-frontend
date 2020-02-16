import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField';


var emailValid = true
var postalCodeValid = true

export default class ShippingInfo extends Component {

    constructor(props){
        super(props)
        this.state ={
            info:{
                firstname: '',
                lastname: '',
                email: '',
                phone: '',
                address: '',
                city: '',
                postalCode: '',
                pickup: false,
            },
           phoneNumber : '',
           postalCode : '',
        }
        this.setPhone = this.setPhone.bind(this)
        this.emailHandler = this.emailHandler.bind(this)
        this.phoneHandler = this.phoneHandler.bind(this)
        this.postalCodeHandler = this.postalCodeHandler.bind(this)
    }


    //----setter------
    setPhone(phoneVal){
        this.setState({phone: phoneVal});
    }

    componentDidMount(){
        // TODO check account if user have account then auto fill the fill
    }

    //----Input Handler-----
    emailHandler = (e) => {
        const regrex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        emailValid = regrex.test(e.target.value.toLowerCase()) || (e.target.value === '')
        console.log(emailValid)
        this.setState({email : e.target.value})
    }

    phoneHandler = (e) => {
        const inputVal = e.target.value.replace(/\D/g, '').match(/(\d{0,3})(\d{0,3})(\d{0,4})/);
        this.setState({info:{phone: inputVal[0]}})
        this.setState({phoneNumber: !inputVal[2] ? inputVal[1] : '(' + inputVal[1] + ') ' + inputVal[2] + (inputVal[3] ? '-' + inputVal[3] : '')});
    }

    postalCodeHandler = (e) => {
        const inputVal = e.target.value.replace(/\s/g,'').match(/([a-zA-Z0-9]{0,3})([a-zA-Z0-9]{0,3})/);
        const regrex = /[A-Z]{1}\d{1}[A-Z]{1}\d{1}[A-Z]{1}\d{1}/g

        this.setState({info:{postalCode: inputVal[0]}})
        this.setState({postalCode: !inputVal[2]? inputVal[1].toUpperCase() : inputVal[1].toUpperCase() + ' ' + inputVal[2].toUpperCase()})
        
        
        if(!regrex.test(inputVal[0]) && inputVal[0].length === 6){
            postalCodeValid = false;
        }else{
            postalCodeValid =true;
        }
    }

    render() {
        return (
            <div>
                <h1>Shipping Information</h1>
                <TextField autoFocus label="First Name" value={this.state.firstname} onChange={e => this.setState({firstname: e.target.value})}/>
                <TextField label="Last Name" value={this.state.lastname} onChange={e => this.setState({lastname: e.target.value})}/>
                <TextField required 
                    label="Email"
                    error={!emailValid} 
                    helperText={emailValid?"":"Invalid Email"}
                    value={this.state.email}
                    onChange={this.emailHandler}
                />
                <TextField 
                    label="Phone" 
                    value={this.state.phoneNumber} 
                    onChange={this.phoneHandler}
                />        
                <TextField required label="Shipping Address"/>
                <TextField required label="City"/>
                <TextField required 
                    label="Postal Code"
                    error={!postalCodeValid}
                    helperText={postalCodeValid?"":"Invalid Postal Code"} 
                    value={this.state.postalCode} 
                    onChange={this.postalCodeHandler}/>
            </div>
        )
    }
}
