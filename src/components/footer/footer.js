import React, { Component } from 'react';
import './footer.css';
import Instagram from '../../assets/icons/instagram.svg'


export default class Footer extends Component {
    constructor() {
        super();
        this.state = {
        }
    }

    render() {
        return (
            <div className="footer-wrapper">
              <a href="https://www.instagram.com/iibyrakell" target="blank_"><img alt="" src={Instagram} /></a>
            </div>
        )
    }
}