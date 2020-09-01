import React, { Component } from "react";
import axios from 'axios';
import './create.css';

class CreateRecipes extends Component {

  constructor(props) {
    super(props);

    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeTags = this.onChangeTags.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      name: "",
      description: "",
      tags: ""
    };
  }

  componentDidMount() {
  //When we start, do we want to call a function??? 

    // axios.get('http://localhost:5000/users/')
    // .then(res => {
    //   if (res.data.length > 0){
    //     this.setState({
    //       users: res.data.map(user => user.username),
    //       username: res.data[0].username
    //     })
    //   }
    // })
  }

  onChangeName(e) {
    this.setState({
      name: e.target.value,
    });
  }

  onChangeDescription(e) {
    this.setState({
      description: e.target.value,
    });
  }

  onChangeTags(e) {
    this.setState({
      tags: e.target.value,
    });
  }

  onSubmit(e) {
    e.preventDefault();

    const recipe = {
      name: this.state.username,
      description: this.state.description,
      tags: this.state.tags,
    };
    console.log(recipe);

    axios.post('http://localhost:5000/create/', recipe)// HOW EXACTLY DO WE WANT TO SET ROUTE?  
    .then(res => console.log(res.data));  //OR HOW DO WE TO OTHER PAGES AND SEND AS ONE ENTRY TO BACKEND

    window.location = "/";
  }

  render() {
    return (

      <div className="sectionContainer">
        <h1 className="recipeTitle">Create recipe</h1>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Name:</label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.name}
              onChange={this.onChangeName}
            />
          </div>
          <div className="form-group">
            <label>Description:</label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.description}
              onChange={this.onChangeDescription}
            />
          </div>
          <div className="form-group">
            <label>Category:</label>
            <select
              ref="userInput"
              required
              className="form-control"
              value={this.state.name}
              onChange={this.onChangeName}
            >
              {/* {this.state.users.map(function (user) {
                // return (
                //   <option key={user} value={user}>
                //     {user}
                //   </option>
                // );
              })} */}
            </select>
          </div>
          <div className="form-group">
            <label>Tags:</label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.tags}
              onChange={this.onChangeTags}
            />
          </div>
          <div className="form-group">
            <input
              type="submit"
              value="Let's Go!"
              className="btn btn-primary"
            />
          </div>
        </form>
      </div>
    );
  }
}

export default CreateRecipes;