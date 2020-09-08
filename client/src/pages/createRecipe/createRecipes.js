import React, { useState, useEffect } from "react";
import {Link, useHistory} from 'react-router-dom';
import API from "../../utils/API";
import axios from 'axios';
import './create.css';


//hard code array of categories until we have collection
//we may need to add more items...?
//let categories = ['appetizer', 'soup', 'salad', 'entree', 'side', 'dessert'];
let categories= ['appetizer', 'soup', 'salad', 'entree', 'side', 'dessert'];

function CreateRecipes () {

  const history = useHistory();
  
  const [createRecipe, setCreateRecipe] =useState({
    name: "",
    description: "",
    category:"",
    tags: "",
  });


  const {name, description, tags, category} = createRecipe;
   
  //do we need to get categories or tags?
  useEffect(()=> {
    
    // API.getAllRecipes()
    //     .then(res => console.log("This is the response", res.data))
    //     .catch(err => console.log(err));

    // might be useful: https://www.carlrippon.com/drop-down-data-binding-with-react-hooks/

  },[]); 

  const onChange =(e)=> {
    setCreateRecipe({
      ...createRecipe, [e.target.name]: e.target.value
    });
    console.log("Create recipe is:", createRecipe);
  }

  
  const onSubmit = (e)=>  {
    e.preventDefault();

    const recipe = {...createRecipe}; 

    console.log("This is the recipe:", recipe);

    if (recipe) {
      history.push({
        pathname : '/screen',
        state: {recipe}
        });
    }
  }

  return (
      <div className="sectionContainer">
        <h1 className="recipeTitle">Create recipe</h1>
        <form onSubmit={e => onSubmit(e)}>
          <div className="form-group">
            <label>Name:</label>
            <input
              type="text"
              required
              className="form-control"
              name="name"
              value={name}
              onChange={e=> onChange(e)}
            />
          </div>
          <div className="form-group">
            <label>Description:</label>
            <input
              type="text"
              required
              className="form-control"
              name="description"
              value={description}
              onChange={e => onChange(e)}
            />
          </div>
          <div className="form-group">
            <label>Category:</label>
            <select
              // ref="userInput"  not valid for functional component
              required
              className="form-control"
              name="category"
              value={category} //avalue of select was a string  array
              //new property of category
              //dispaly what categoryso user can see it
              //where are info coming from API
              onChange={e => onChange(e)}
            >
              {categories.map(category => {
                return(
                <option value={category}>{category}</option>
                )
                })}
            </select>
          </div>
          <div className="form-group">
            <label>Tags:</label>
            <input
              type="text"
              required
              className="form-control"
              name="tags"
              value={tags}
              onChange={e=> onChange(e)}
            />
          </div>
          <div className="form-group">
             <input
              type="submit"
              value="recipe"
              className="btn btn-primary"
            />
          </div>
        </form>
      </div>
  );  
}

export default CreateRecipes;