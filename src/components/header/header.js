import React, { Component } from 'react';
import './header.css';
import { Link } from 'react-router-dom';


export default class Header extends Component {
    constructor() {
        super();
        this.state = {
            showMenu: false,
            animate: false
        }
        this.setWrapperRef = this.setWrapperRef.bind(this);
    }

    handleMenu() {
        this.setState({ showMenu: !this.state.showMenu, animate: true })
    }

    hideDropDown(menu) {
        this.setState({ [menu]: false })
    }

    setWrapperRef(node) {
        this.wrapperRef = node;
    }

    handleMenu() {
        this.setState({ showMenu: !this.state.showMenu, animate: true })
    }

    render() {
        const { showMenu } = this.state
        return (
            <div className="header-wrapper">
                <div className="header-content">

                    <div className="left-header">
                        <p>Indigo Images</p>
                    </div>

                    {window.innerWidth > 800 ?
                        <div className="right-header-desktop">
                           <p>About Me</p>
                           <p>Portfolio</p>
                           <p>Pricing</p>
                           <p>Contact</p>
                        </div>
                        :

                        <div className="right-header" ref={this.setWrapperRef}>
                            <div className="menu-icon-header" onClick={() => this.handleMenu()}>
                                <div className={showMenu ? "line-header l1-active-header" : "l1-header line-header"}></div>
                                <div className={showMenu ? "line-header l2-active-header" : "l2-header line-header"}></div>
                                <div className={showMenu ? "line-header l3-active-header" : "l3-header line-header"}></div>
                            </div>

                            <div
                                className={showMenu ? "mobile-menu-content-header" : "hide-header"}
                                onClick={() => this.hideDropDown('showMenu')}
                            >
                                {/* <Link to="/about"> */}
                                <p>About Me</p>
                                {/* </Link> */}
                                <hr className="hr-header" />
                                {/* <Link to="/pricing"> */}
                                <p>Pricing</p>
                                {/* </Link> */}
                                <hr className="hr-header" />
                                {/* <Link to="/contact"> */}
                                <p>Contact</p>
                                {/* </Link> */}
                                <hr className="hr-header" />
                                {/* <Link to="/portfolio"> */}
                                <p>Portfolio</p>
                                {/* </Link> */}
                                <hr className="hr-header" />

                            </div>
                        </div>
                    }



                </div>
            </div>
        )
    }
}