import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from "./pages/home";
import Profile from "./pages/profile";
import World from "./pages/world";
import Googlelogin from "./pages/login";

import Icons from "./contents/icons";


export default class App extends Component {
  constructor(props) {
    super(props);

    Icons();

  }
  render() {
    return (
      <div className='container'>
        <Router>
          <div>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/profile" component={Profile} />
              <Route path="/world" component={World} />
              <Route path="/login" component={Googlelogin} />

            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}
