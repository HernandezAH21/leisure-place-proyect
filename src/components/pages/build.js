import React, { Component } from 'react';

import BuildBar from "../navbars/build-navbar";
import Buildcontainer from "../contents/build-container";

export default class Buildprofile extends Component {
  constructor(props) {
      super(props)

      this.state = {
          
      }
  }

  render() {
      return (
          <div>
              <BuildBar/>
              <Buildcontainer/>
          </div>
      )
  }
}