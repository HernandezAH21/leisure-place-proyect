import React, { Component } from "react";
import results from '../pages/results';
import DropzoneComponent from "react-dropzone-component";


export default class Buildcontainer extends Component {
  constructor(props) {
    super(props);

    this.componentConfig = this.componentConfig.bind(this);
    this.djsConfig = this.djsConfig.bind(this);
    this.handleThumbDrop = this.handleThumbDrop.bind(this);
    this.handleBannerDrop = this.handleBannerDrop.bind(this);
  }  
  state = {
    name: "",
    description: "",
    category: "",
    position: "",
    url: "",
    img: "",
    twoimg: ""
  }

  handleThumbDrop() {
    return {
      addedfile: file => this.setState({ thumb_image: file })
    };
  }

  handleBannerDrop() {
    return {
      addedfile: file => this.setState({ banner_image: file })
    };
  }


  componentConfig() {
    return {
      iconFiletypes: [".jpg", ".png"],
      showFiletypeIcon: true,
      postUrl: "https://httpbin.org/post"
    };
  }

  djsConfig() {
    return {
      addRemoveLinks: true,
      maxFiles: 1
    };
  }


  postDataHandler = (e) =>{
    e.preventDefault();
    const Data = {
      name:this.state.name,
      description:this.state.description,
      category:this.state.category,
      position:this.state.position,
      url:this.state.url,
      img:this.state.img,
      twoimg:this.state.twoimg
    }

    results.post('/marks.json', Data)
    .then(response => {
      console.log(response);
    })
  }

  render() {
    return (
      <div className="portfolio-form-wrapper">
        <form onSubmit={this.postDataHandler}>
          <div className="one-column">
            <input
              type="text"
              name="name"
              placeholder="Name of your Favorite Thing"
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

          <div className="two-column">
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

          <div className="three-column">
            <input
              type="text"
              name="description"
              placeholder="Description"
              value={this.state.description}
              onChange={(e)=>this.setState({description:e.target.value})}

            />
          </div>

          <div className="image-uploaders">
          {this.state.thumb_image_url && this.state.editMode ? (
            <div className="portfolio-manager-image-wrapper">
              <img src={this.state.thumb_image_url} />

              <div className="image-removal-link">
                <a onClick={() => this.deleteImage("thumb_image")}>
                  Remove file
                </a>
              </div>
            </div>
          ) : (
            <DropzoneComponent
              ref={this.thumbRef}
              config={this.componentConfig()}
              djsConfig={this.djsConfig()}
              eventHandlers={this.handleThumbDrop()}
              value={this.state.img}
              onChange={(e)=>this.setState({img:e.target.value})}
            >
              <div className="dz-message"><p>IMAGE WHATEVER YOU LIKE</p></div>
            </DropzoneComponent>
          )}

          {this.state.banner_image_url && this.state.editMode ? (
            <div className="portfolio-manager-image-wrapper">
              <img src={this.state.banner_image_url} />

              <div className="image-removal-link">
                <a onClick={() => this.deleteImage("banner_image")}>
                  Remove file
                </a>
              </div>
            </div>
          ) : (
            <DropzoneComponent
              ref={this.bannerRef}
              config={this.componentConfig()}
              djsConfig={this.djsConfig()}
              eventHandlers={this.handleBannerDrop()}
              value={this.state.twoimg}
              onChange={(e)=>this.setState({twoimg:e.target.value})}
            >
              <div className="dz-message"><p>BANNER</p></div>
            </DropzoneComponent>
          )}

        </div>

          <div>
            <button type="submit">Save</button>
          </div>
        </form>
      </div>
    );
  }
}