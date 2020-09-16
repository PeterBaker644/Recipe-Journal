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
  tags
}) {
  return (
    <li className="list-group-item">
      <div>
        <div>
          <div className="xs-8 sm-9">
            <h3>{tags}</h3>
          </div>
        </div>
      </div>
    </li>
  );
}

export function NestedIngredientsList({
  name,
  quantity,
  units

}) {
  return (
    <li className="list-group-item">
      <div>
        <div>
          <div className="xs-8 sm-9">
            <p>ingredient name</p>
            <h3>{name}</h3>
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
  name,
  description,
  imageUrls,
  category,
  ingredientCategoryIconLink,
  title,
  text
}) {
  return (
    <li className="list-group-item">
      <div>
        <div>
          <div className="xs-8 sm-9">
            <h6>name</h6>
            <h1>{name}</h1>

            <h6>description</h6>
            <h1>{description}</h1>

            <h6>imageUrls</h6>
            <h1>{imageUrls}</h1>

            <h6>category</h6>
            <h1>{category}</h1>

            <h6>ingredientCategoryIconLink</h6>
            <h1>{ingredientCategoryIconLink}</h1>

            <h6>title</h6>
            <h1>{title}</h1>

            <h6>text</h6>
            <h1>{text}</h1>
          </div>
        </div>
      </div>
    </li>
  );
}

export function IngredientsListItem({
  name,
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
            <h3>{name}</h3>
            
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
