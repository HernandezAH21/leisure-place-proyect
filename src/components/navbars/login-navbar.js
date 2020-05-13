import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';


import Logo from '../../../static/assets/images/logo2.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default class LoginBar extends Component {
    constructor() {
      super();
    } 
    
    render() {
        return (
            <div className="navigation-wrapper">
                <div className="left-side">
                    <div className="nava-link-wrapper">
                        <NavLink exact to="/" className="logo" activeClassName="nava-link-active">
                            <img src={Logo} />
                        </NavLink>
                    </div>
                </div>
            </div>     
        );
    }
};