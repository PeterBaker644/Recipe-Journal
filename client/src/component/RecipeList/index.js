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
  ingredientPictureLink,
  recipeCategory,
  ingredientCategoryIconLink,
  cookingActionTitle,
  cookingActionText
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

            <h6>ingredientPictureLink</h6>
            <h1>{ingredientPictureLink}</h1>

            <h6>recipeCategory</h6>
            <h1>{recipeCategory}</h1>

            <h6>ingredientCategoryIconLink</h6>
            <h1>{ingredientCategoryIconLink}</h1>

            <h6>cookingActionTitle</h6>
            <h1>{cookingActionTitle}</h1>

            <h6>cookingActionText</h6>
            <h1>{cookingActionText}</h1>
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
