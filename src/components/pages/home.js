import React, { Component } from 'react';

import Homecontainer from "../contents/home-container";
import Homebar from "../navbars/home-navbar";

export default class Home extends Component {
  constructor(props) {
      super(props)

      this.state = {
          
      }
  }

  render() {
      return (
          <div>
              <Homebar/>
              <Homecontainer/>
          </div>
      )
  }
}