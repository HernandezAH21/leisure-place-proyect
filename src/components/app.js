import React, { Component } from 'react';
// import axios from "axios";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from "./pages/home";
import Profile from "./pages/profile";
import World from "./pages/world";
import Googlelogin from "./pages/login";
import Buildprofile from "./pages/build";
import FooterBar from "./contents/footer";

import Icons from "./contents/icons";


export default class App extends Component {
  constructor(props) {
    super(props);

    Icons();

    // this.getProfileItems = this.getProfileItems.bind(this);
  }
  // getProfileItems() {
  //   axios
  //     .get("gs://leisure-api.appspot.com")
  //     .then(response => {
  //       console.log(response);
  //     })
  //     .catch(error => {
  //       console.log(error);
  //     });
  // }

  render() {
    // this.getProfileItems();
    return (
      <div className='container'>
        <Router>
          <div>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/profile" component={Profile} />
              <Route path="/world" component={World} />
              <Route path="/login" component={Googlelogin} />
              <Route path="/build" component={Buildprofile}/>
            </Switch>
          </div>
        </Router>
        <FooterBar/>
      </div>
    );
  }
}
