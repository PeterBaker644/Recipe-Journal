import React, { useState } from "react";
import API from "../../utils/API";

import { RecipeList, RecipeListItem } from "../RecipeList";

function genepagetest() {

    const [recipes, setRecipes] = useState([]);

    const handleFormSubmit = event => {
        // When the form is submitted, prevent its default behavior, get recipes update the recipes state
        event.preventDefault();
        API.getRecipes()
            .then(res => setRecipes(res.data))
            .catch(err => console.log(err));
    };
    return (


        <div>
            <h1>Genes testing page</h1>
            {/* <h1>{data}</h1> */}
            <button onClick={handleFormSubmit} className="btn btn-primary">
                {" "}
        populate{" "}
            </button>

            <RecipeList>
                {recipes.map(recipe => {
                    return (
                        <RecipeListItem
                            key={recipe.title}
                            title={recipe.recipeName}
                        // ingredients={recipe.ingredients}
                        />
                    );
                })}
            </RecipeList>
        </div>


    );
}

export default genepagetest;