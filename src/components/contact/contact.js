import React, { Component } from 'react';
import '../contact/contact.css';
import axios from 'axios';

export default class Contact extends Component {
    constructor() {
        super();
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            message: '',
            readyToSubmit: false,
            formError: false,
        }
    }

    validatePhone(usersNumber) {
        var a = /^(1\s|1|)?((\(\d{3}\))|\d{3})(\-|\s)?(\d{3})(\-|\s)?(\d{4})$/.test(usersNumber);
        return a;
    }

    validateEmail(usersEmail) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(usersEmail).toLowerCase());
    }

    handleChange(item, val) {
        this.setState({ [item]: val }, this.formValidate);
    }

    formValidate() {
        let { firstName, lastName, email, phone } = this.state;
        if (firstName.length >= 1 && lastName.length >= 1 && email.length >= 5 && phone.length >= 7 ) {
            this.setState({ readyToSubmit: true, formError: false });
        } else {
            this.setState({ readyToSubmit: false });
        }
    }

    handleSubmit(e) {
        e.preventDefault(e);
        let { firstName, lastName, email, phone, message } = this.state;

        firstName = e.target.fname.value
        lastName = e.target.lname.value
        phone = e.target.phone.value
        email = e.target.email.value

        if (firstName && lastName && this.validateEmail(email) === true && this.validatePhone(phone) === true) {
            let body = {
                firstName: firstName,
                lastName: lastName,
                email: email,
                phone: phone,
                message: message
            }
            // console.log(body)
            axios.post('/api/contact-me', body).then(response => {
                this.setState({
                    firstName: '',
                    lastName: '',
                    email: '',
                    phone: '',
                    message: ''
                })

            })
        } else {
            this.setState({ formError: true });
        }

    }

    render() {
        let { firstName, lastName, email, phone, message } = this.state;
        
        return (
            <div className="contact-wrapper">
                    <div>
                    <p>Contact Indigo Images By Rakell</p>
                    </div>

                    <form action="submit" onSubmit={(e) => this.handleSubmit(e)}>

                        <div style={{flexDirection:'row', display:'flex'}}>
                        <p>First Name:</p>
                        <input value={firstName} type="text" name="fname" onChange={(e) => this.handleChange('firstName', e.target.value)} required />
                        </div>

                        <div style={{flexDirection:'row', display:'flex'}}>
                        <p>Last Name:</p>
                        <input value={lastName} type="text" name="lname" onChange={(e) => this.handleChange('lastName', e.target.value)} required />
                        </div>

                        <div style={{flexDirection:'row', display:'flex'}}>
                        <p>Phone:</p>
                        <input value={phone} type="text" name="phone" onChange={(e) => this.handleChange('phone', e.target.value)} required />
                        </div>

                        <div style={{flexDirection:'row', display:'flex'}}>
                        <p>Email:</p>
                        <input value={email} type="text" name="email" onChange={(e) => this.handleChange('email', e.target.value)} required />
                        </div>

                        <div style={{flexDirection:'row', display:'flex'}}>
                        <p>Message:</p>
                        <input value={message} type="text" name="message" onChange={(e) => this.handleChange('message', e.target.value)} required />
                        </div>

                        <button type="submit">Submit</button>

                    </form>
            </div>
        )    
    }
}