import React, { Component } from "react";
import axios from 'axios';
import './create.css';


//hard code array of categories until we have collection
//we may need to add more items...?
let categories = ['appetizer', 'soup', 'salad', 'entree', 'side', 'dessert'];

class CreateRecipes extends Component {

  constructor(props) {
    super(props);

    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeCategories = this.onChangeCategories.bind(this);
    this.onChangeTags = this.onChangeTags.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      name: "",
      description: "",
      categories: "",
      tags: ""
    };
  }


  componentDidMount() {
  //When we start, need API call to category collection...
    // axios.get('http://localhost:5000/categories/')
    // .then(res => {
    //   if (res.data.length > 0){
    //     this.setState({
    //       categories: res.data.map(category => category.categories),
    //       categories: res.data[0].categories
    //     })
    //   }
    // })
  }

  onChangeName(e) {
    this.setState({
      name: e.target.value,
    });
    console.log("Name:", this.state.name);
  }

  onChangeDescription(e) {
    this.setState({
      description: e.target.value,
    });
    console.log("Description:", this.state.description);
  }

  onChangeCategories(e) {
    this.setState({
      categories: e.target.value,
    });
    console.log("Category:", this.state.categories);
  }

  onChangeTags(e) {
    this.setState({
      tags: e.target.value,
    });
    console.log("Tags:", this.state.tags);
  }

  onSubmit(e) {
    e.preventDefault();

    const recipe = {
      name: this.state.name,
      description: this.state.description,
      categories: this.state.categories,
      tags: this.state.tags,
    };
    console.log("This is the recipe:", recipe);

    axios.post('http://localhost:5000/create/', recipe)// HOW DO WE SEND ARRAY TO NEXT INGREDIENTS PAGE, TO ADD STEPS?
    .then(res => console.log(res.data));               //So we just send one final API call to backend 

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
              value={this.state.categories}
              onChange={this.onChangeCategories}
            >
              {categories.map(function (category) {
                return (
                  <option key={category} value={category}>
                    {category}
                  </option>
                );
              })}
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