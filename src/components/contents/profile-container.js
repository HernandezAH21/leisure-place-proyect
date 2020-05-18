import React, { Component } from "react";

import BuilderItem from "../builders/builder-item";

export default class Profilecontainer extends Component {
  constructor() {
    super();

    this.state = {
      pageTitle: "Welcome to my portfolio",
      isLoading: false,
      data: []
    };

    this.handleFilter = this.handleFilter.bind(this);
  }

  handleFilter(filter) {
    this.setState({
      data: this.state.data.filter(item => {
        return item.category === filter;
      })
    });
  }

  portfolioItems() {
    return this.state.data.map(item => {
      return <BuilderItem key={item.id} item={item} />;
    });
  }
  render() {
    if (this.state.isLoading) {
      return <div>Loading...</div>;
    }

    return (
      <div className="portfolio-items-wrapper">
          <button className="btn" onClick={() => this.handleFilter("CLEAR_FILTERS")}>All</button>
          <button className="btn" onClick={() => this.handleFilter("Movies")}>Movies</button>
          <button className="btn" onClick={() => this.handleFilter("Series")}> Series</button>
          <button className="btn1" onClick={() => this.handleFilter("Video Games")}>Video Games</button>
          <button className="btn" onClick={() => this.handleFilter("Music")}>Music</button>
          <button className="btn" onClick={() => this.handleFilter("Shop´s")}>Shop´s</button>
        {this.portfolioItems()}
      </div>
    );
  }
}