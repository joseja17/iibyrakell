import React, { Component } from 'react';
import './footer.css';
import Instagram from '../../assets/icons/instagram.svg';
import Facebook from '../../assets/icons/facebook.svg';


export default class Footer extends Component {
    constructor() {
        super();
        this.state = {
        }
    }

    render() {
        return (
            <div className="footer-wrapper">
             <h2>REACH OUT TO ME</h2>
             <p>iibyrakell@gmail.com</p>
             <p>801-822-7921</p>
             <div style={{display:'flex', flexDirection:'row', width:'60px', justifyContent:'space-between', marginTop:'10px'}}>
              <a href="https://www.instagram.com/indigoimagesbyrakell" target="blank_"><img alt="" src={Instagram} /></a>
              <a href="https://www.facebook.com/iibyrakell" target="blank_"><img alt="" style={{width:'20px', height:'20px'}} src={Facebook} /></a>
             </div>
            </div>
        )
    }
}