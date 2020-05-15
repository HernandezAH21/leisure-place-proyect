import React, { Component } from 'react';
import Typist from 'react-typist';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export default class Homecontainer extends Component {
  constructor(props) {
    super(props)
  }

  render() {
        return (
            <div className="page-container">
                <div className="information-text">
                    <div className="first-text">
                        <Typist className="text-wrapper">
                            Welcome to "A Leisure Place"
                        <Typist.Delay ms={100} />
                        <br />
                        <Typist.Delay ms={100} />
                            build your own site, your own space with                       
                        <br />
                        <Typist.Delay ms={100} />
                            all the things you like
                        <br />
                        <Typist.Delay ms={100} />
                            songs or playlists,
                        <br />
                        <Typist.Delay ms={100} />
                            online video games,
                        <br />
                        <Typist.Delay ms={100} />
                            episode of your series or movies,
                        <br />
                        <Typist.Delay ms={100} />
                            whatever you need,
                        <br />
                        <Typist.Delay ms={100} />
                            fast and everything in one place ...
                        <br />
                        <Typist.Delay ms={100} />
                            Click here to build your own leisure place with you Google Account...
                        <NavLink exact to="/login" className="logo" activeClassName="nava-link-active">
                            <button> HERE! </button>
                        </NavLink> 
                    </Typist>
                    </div>
                </div>
            </div>
        );
    }
}
