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
  recipeDescription,
  recipePicLinks,
  recipeCategory,
  ingredientCategoryIconLink,
  ActionTitle,
  ActionText
}) {
  return (
    <li className="list-group-item">
      <div>
        <div>
          <div className="xs-8 sm-9">
            <h6>recipeName</h6>
            <h1>{recipeName}</h1>

            <h6>recipeDescription</h6>
            <h1>{recipeDescription}</h1>

            <h6>recipePicLinks</h6>
            <h1>{recipePicLinks}</h1>

            <h6>recipeCategory</h6>
            <h1>{recipeCategory}</h1>

            <h6>ingredientCategoryIconLink</h6>
            <h1>{ingredientCategoryIconLink}</h1>

            <h6>ActionTitle</h6>
            <h1>{ActionTitle}</h1>

            <h6>ActionText</h6>
            <h1>{ActionText}</h1>
          </div>
        </div>
      </div>
    </li>
  );
}

export function IngredientsListItem({
  ingredientName,
  ingredientIconLink,
  ingredientCategory,
  ingredientCategoryIconLink,
  totalUsedCount
}) {
  return (
    <li className="list-group-item">
      <div>
        <div>
          <div className="xs-8 sm-9">
            <p>ingredient name</p>
            <h3>{ingredientName}</h3>
            
            <p>ingredientIconLink</p>
            <h3>{ingredientIconLink}</h3>

            <p>ingredientCategory</p>
            <h3>{ingredientCategory}</h3>

            <p>ingredientCategoryIconLink</p>
            <h3>{ingredientCategoryIconLink}</h3>

            <p>totalUsedCount</p>
            <h3>{totalUsedCount}</h3>
          </div>
        </div>
      </div>
    </li>
  );
}
