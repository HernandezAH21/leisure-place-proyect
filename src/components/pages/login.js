import React, { Component } from 'react';
import firebase from 'firebase';
import { NavLink } from 'react-router-dom';
import Typist from 'react-typist';

import Loginbar from "../navbars/login-navbar";
import Logosquare from '../../../static/assets/images/simplelogo.jpg';

export default class Googlelogin extends Component {
  constructor() {
    super();
    this.state = {
      user: null
    };

    this.handleAuth = this.handleAuth.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
    // this.renderLoginButton = this.renderLoginButton.bind(this);
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
        <div>
          <img src={this.state.user.photoURL} alt={this.state.user.displayName} />
          <Typist> <p>Welcome {this.state.user.displayName} now the next step is edit your own 
            leisure place, just click the next button to start...</p>
            <NavLink exact to="/profile" className="logo" activeClassName="nava-link-active">
              <button> Click Me! </button>
            </NavLink>
            <button onClick={this.handleLogout}>Sign Off</button>
            <Typist.Delay ms={500} />
            <br/>
          </Typist>
        </div>
      );
    } else {
      //Si el usario no esta logueado
      return (
        <div>
          <h1>Start you Place</h1>
          <button onClick={this.handleAuth}>Sign Here!</button>
        </div>
      );
    }
  }

  render() {
        return (
          <div className="login-square">
            <Loginbar/>
            <img src={Logosquare}/>
            <div className='google-login'>
                {this.Loginsuccess()}
            </div>
          </div>
        );
    }
}
