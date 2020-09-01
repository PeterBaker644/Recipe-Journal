import React from "react";

// Exporting both RecipeList and RecipeListItem from this file

// RecipeList renders a bootstrap list item
export function UlList({ children }) {
  return (
    <ul className="list-group">    
    {children}
    </ul>
  ); 
}

// RecipeListItem renders a bootstrap list item containing data from the recipe api call
export function RecipeListItem({
  recipeName,
  cookingAction
}) 
{
  return (
    <li className="list-group-item">
      <div>
        <div>
          <div className="xs-8 sm-9">
            <h3>recipe name</h3>
            <h6>{recipeName}</h6>
            <h3>cookingAction</h3>
            <h6>{cookingAction}</h6>
          </div>
        </div>
      </div>
    </li>
  );
}

export function IngredientsListItem({
  name,
  quantity,
  units
}) 
{
  return (
    <li className="list-group-item">
      <div>
        <div>
          <div className="xs-8 sm-9">
            <h3>ingredient name</h3>
            <h6>{name}</h6>
            <h3>quantity</h3>
            <h6>{quantity}</h6>
            <h3>units</h3>
            <h6>{units}</h6>
          </div>
        </div>
      </div>
    </li>
  );
}
