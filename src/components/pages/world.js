import React, { Component } from 'react';

import WorldBar from "../navbars/world-navbar";

export default class World extends Component {
  constructor(props) {
      super(props)

      this.state = {
          
      }
  }

  render() {
      return (
          <div>
              <WorldBar/>
          </div>
      )
  }
}