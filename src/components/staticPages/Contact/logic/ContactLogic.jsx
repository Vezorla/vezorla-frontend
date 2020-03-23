import React, { Component } from 'react'
import Contact from '../view/Contact'

export default class ContactLogic extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            email: '',
            message: ''
        }

        this.setMessage = this.setMessage.bind(this);
        this.setEmail = this.setEmail.bind(this);
        this.setName = this.setName.bind(this);
        this.submitMessage = this.submitMessage.bind(this);
    };
    
    setMessage = (e) => {
        this.setState({message: e.target.value});
    };

    setName = (e) => {
        this.setState({name: e.target.value});
    };

    setEmail = (emailVal) => {
        this.setState({email: emailVal});
    }

    submitMessage = async() => {
        const response = await fetch('url', {
            method: 'POST',
            headers: {
                Content: 'application/json',
                Accept: 'application/json'
            },
            body: JSON.stringify(this.state),
            credentials: 'include'
        });

        if (response.status === 401) {
            this.setState({error: 'Invalid e-mail address'});
        } else if (response.status === 200) {
            //Navigate to success page
        }
    }

    render() {

        // console.log(this.setEmail)

        return (
            <div>
                <Contact
                    {...this.state}
                    setMessage={this.setMessage}
                    setName={this.setName}
                    setEmail={this.setEmail}
                    submitMessage={this.submitMessage}
                />
            </div>
        )
    }
}
