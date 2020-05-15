import React, { Component } from 'react';
import ProfileBar from "../navbars/profile-navbar";
import Profilecontainer from "../contents/profile-container";

export default class Profile extends Component {
  constructor(props) {
      super(props)

      this.state = {
          
      }
  }

  render() {
      return (
          <div>
              <ProfileBar/>
              <Profilecontainer/>
          </div>
      )
  }
}