import React, { useState } from "../../../node_modules/react";
import API from "../../utils/API";
import { UlList, RecipeListItem, IngredientsListItem, NestedIngredientsList, NestedTagsList, } from "../../component/RecipeList/index";

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
                    return (<div>
                        <RecipeListItem
                            key={recipe._id}
                            recipeName={recipe.recipeName}
                            recipeDescription={recipe.recipeDescription}
                            recipeCategory={recipe.recipeCategory}
                            cookingAction={recipe.cookingActions[0].action}
                        />
                        <h2>recipeTags UL list</h2>
                        <UlList>
                            {recipe.recipeTags.map(tags => {
                                return (
                                    <NestedTagsList
                                        key={tags._id}
                                        recipeTags={tags}
                                    />

                                );
                            })}

                        </UlList>
                        <h2>ingredients UL list</h2>
                        <UlList>
                            {recipe.ingredients.map(ingredients => {
                                return (
                                    <NestedIngredientsList
                                        key={ingredients._id}
                                        ingredientName={ingredients.ingredientName}
                                        quantity={ingredients.quantity}
                                        units={ingredients.units}
                                    />

                                );
                            })}

                        </UlList>
                    </div>
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
                            ingredientName={ingredient.ingredientName}
                            userUsedCount={ingredient.userUsedCount}
                            ingredientsCategory={ingredient.ingredientsCategory}

                        />
                    );
                })}
            </UlList>
        </div>
    );
}
export default Genepagetest;