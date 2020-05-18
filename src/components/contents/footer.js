import React, { Component } from 'react';

export default class FooterBar extends Component {
    constructor() {
      super();
    } 
    
    render() {
        return (
            <div className="footer-wrapper">

                    <div className="text-wrapper">
                        Share this page with all your friends in any social network that you want.
                    </div>
                    <div className="social-link-wrapper">
                        <a href="https://es-la.facebook.com/">
                            <i className="fab fa-facebook-f fa-2x"></i>
                        </a>
 
                        <a href="https://www.instagram.com">
                            <i className="fab fa-instagram fa-2x"></i>
                        </a>

                        <a href="https://twitter.com">
                            <i className="fab fa-twitter fa-2x"></i>
                        </a>
                    </div>

                    <div className="copyright-wrapper">
                        &copy; 2020 Alan Hernandez &#124; Bottega University &#124; All rights reserved
                    </div>
            </div>     
        );
    }
};
