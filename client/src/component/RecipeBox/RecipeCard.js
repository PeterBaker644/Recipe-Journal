import React from "react";
import DeleteBtn from "../RecipeBox/DeleteBtn";

function RecipeCard({ recipe, setStatus, deleteRecipe }) {

    console.log("Component says:", recipe)

    return (
        <div className="col my-2 font-book">
            <div className="card h-100 recipe-card" onClick={() => setStatus(true)}>
                <div className="card-body">
                    <div>
                        <div className="d-flex font-fashion justify-content-between">
                            <h5 className="card-title mb-3">{recipe.recipeName}</h5>
                            <DeleteBtn onClick={(e) => deleteRecipe(e, recipe._id)} />
                        </div>
                        <p className="card-text">{recipe.recipeDescription}</p>
                        <p className="card-text">{recipe.instructions}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RecipeCard;

