import React, { Component } from 'react';
import firebase from 'firebase';
import { NavLink } from 'react-router-dom';
import Typist from 'react-typist';

import Logosquare from '../../../static/assets/images/simplelogo.jpg';

export default class Googlelogin extends Component {
  constructor() {
    super();
    this.state = {
      user: null
    };

    this.handleAuth = this.handleAuth.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
    this.Loginsuccess = this.Loginsuccess.bind(this);

  }

  componentWillMount () {
    firebase.auth().onAuthStateChanged(user => {
      this.setState({ user });
    });
  }

  handleAuth () {
    const provider = new firebase.auth.GoogleAuthProvider();

    firebase.auth().signInWithPopup(provider)
    .then(result => console.log(`${result.user.email} ha iniciado sesion`))
    .catch(error => console.log(`Error ${error.code}: ${error.message}`));
  }

  handleLogout () {
    firebase.auth().signOut()
    .then(result => console.log(`${result.user.email} ha salido`))
    .catch(error => console.log(`Error ${error.code}: ${error.message}`));

  }

  Loginsuccess () {
    // Si el usuario esta logueado
    if(this.state.user) {
      return(
        <div className="signin-wrapper">
          <img src={this.state.user.photoURL} alt={this.state.user.displayName} />
            <Typist> 
            <p>Welcome {this.state.user.displayName} 
            <Typist.Delay ms={500} />
            <br/>
             now the next step is 
            <Typist.Delay ms={500} />
            <br/>
            edit your own leisure place, 
            <Typist.Delay ms={500} />
            <br/>
            just click the next button to start...</p>
            <NavLink exact to="/profile" className="logo" activeClassName="nava-link-active">
              <button> Click Me! </button>
            </NavLink>
            <button onClick={this.handleLogout}>Sign Off</button>
          </Typist>
        </div>
      );
    } else {
        return (
        <div className="login-wrapper">
          <img src={Logosquare}/>
          <p>Start you Place</p>
          <button onClick={this.handleAuth}>Sign Here!</button>
        </div>
      );
    }
  }

  render() {
        return (
          <div className="login-square">
                {this.Loginsuccess()}
          </div>
        );
    }
}
