import React, { Component } from "react";
import results from '../pages/results';

export default class Buildcontainer extends Component {
  state = {
    name: "",
    description: "",
    category: "",
    position: "",
    url: "",
  }
  
  postDataHandler = (e) =>{
    e.preventDefault();
    const Data = {
      name:this.state.name,
      description:this.state.description,
      category:this.state.category,
      position:this.state.position,
      url:this.state.url
    }

    results.post('/marks.json', Data)
    .then(response => {
      console.log(response);
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.postDataHandler}>
          <div>
            <input
              type="text"
              name="name"
              placeholder="Name of your favorite thing"
              value={this.state.name}
              onChange={(e)=>this.setState({name:e.target.value})}
            />

            <input
              type="text"
              name="url"
              placeholder="URL"
              value={this.state.url}
              onChange={(e)=>this.setState({url:e.target.value})}

            />
          </div>

          <div>
            <input
              type="text"
              name="position"
              placeholder="Position"
              value={this.state.position}
              onChange={(e)=>this.setState({position:e.target.value})}

            />

            <select
            name="category"
            value={this.state.category}
            onChange={(e)=>this.setState({category:e.target.value})}
            className="select-element"
            >
            <option value="Movies">Movies</option>
            <option value="Series">Series</option>
            <option value="Video Games">Video Games</option>
            <option value="Music">Music</option>
            <option value="Shop´s">Shop´s</option>
            </select>

          </div>

          <div>
            <input
              type="text"
              name="description"
              placeholder="Description"
              value={this.state.description}
              onChange={(e)=>this.setState({description:e.target.value})}

            />
          </div>

          <div>
            <button>Save</button>
          </div>
        </form>
      </div>
    );
  }
}