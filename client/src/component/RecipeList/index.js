import React from "react";

// Exporting both RecipeList and RecipeListItem from this file

// RecipeList renders a bootstrap list item
export function UlList({ children }) {
  return (
    <ul >
      {children}
    </ul>
  );
}



export function NestedTagsList({
  recipeTags
}) {
  return (
    <li className="list-group-item">
      <div>
        <div>
          <div className="xs-8 sm-9">
            <h3>{recipeTags}</h3>
          </div>
        </div>
      </div>
    </li>
  );
}

export function NestedIngredientsList({
  ingredientName,
  quantity,
  units

}) {
  return (
    <li className="list-group-item">
      <div>
        <div>
          <div className="xs-8 sm-9">
            <p>ingredient name</p>
            <h3>{ingredientName}</h3>
            <p>quantity</p>
            <h3>{quantity}</h3>
            <p>units</p>
            <h3>{units}</h3>
          </div>
        </div>
      </div>
    </li>
  );
}

// RecipeListItem renders a bootstrap list item containing data from the recipe api call
export function RecipeListItem({
  recipeName,
  cookingAction,
  recipeCategory,
  recipeDescription
}) {
  return (
    <li className="list-group-item">
      <div>
        <div>
          <div className="xs-8 sm-9">
            <h1>{recipeName}</h1>
            <h6>cookingAction</h6>
            <h6>{cookingAction}</h6>
            <h6>recipeCategory</h6>
            <h3>{recipeCategory}</h3>
            <h6>recipeDescription</h6>
            <p>{recipeDescription}</p>
          </div>
        </div>
      </div>
    </li>
  );
}

export function IngredientsListItem({
  ingredientName,
  userUsedCount,
  ingredientsCategory
}) {
  return (
    <li className="list-group-item">
      <div>
        <div>
          <div className="xs-8 sm-9">
            <p>ingredient name</p>
            <h3>{ingredientName}</h3>
            <p>userUsedCount</p>
            <h3>{userUsedCount}</h3>
            <p>ingredientsCategory</p>
            <h3>{ingredientsCategory}</h3>
          </div>
        </div>
      </div>
    </li>
  );
}
