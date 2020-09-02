import React, { useState } from "../../../node_modules/react";
import API from "../../utils/API";
import { UlList, RecipeListItem, IngredientsListItem } from "../../component/RecipeList/index";

function Genepagetest() {

    const [recipes, setRecipes] = useState([]);
    const [ingredients, setIngredients] = useState([]);

    const recipeSubmit = event => {
        event.preventDefault();
        API.getRecipes()
            .then(res => setRecipes(res.data))
            .catch(err => console.log(err));
    };

    const ingredientsSubmit = event => {
        event.preventDefault();
        API.getIngredients()
        .then(res => setIngredients(res.data))
        .catch(err => console.log(err));
    };

    return (
        <div>
            <h1>Genes testing page</h1>
            <button onClick={recipeSubmit} className="btn btn-primary">
                {" "}RecipeList{" "}
            </button>
            <UlList>
                {recipes.map(recipe => {
                    return (
                        <RecipeListItem
                            key={recipe._id}
                            recipeName={recipe.recipeName}
                            cookingAction={recipe.cookingActions[0].action}
                        />
                    );
                })}
            </UlList>

            <button onClick={ingredientsSubmit} className="btn btn-primary">
                {" "}Ingredients List{" "}
            </button>
            <UlList>
                {ingredients.map(ingredient => {
                    return (
                        <IngredientsListItem
                            key={ingredient._id}
                            name={ingredient.name}
                            quantity={ingredient.quantity}
                            units={ingredient.units}
                        />
                    );
                })}
            </UlList>
        </div>
    );
}
export default Genepagetest;