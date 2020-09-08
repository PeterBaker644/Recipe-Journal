import React from "react";
import DeleteBtn from "../RecipeBox/DeleteBtn";

function RecipeCard({ recipe, onClick, deleteRecipe, index }) {

    // console.log("Component says:", recipe)

    return (
        <div className="col my-2 font-book">
            <div data-index={index} className="card h-100 recipe-card" onClick={(e) => onClick(e)}>
                <div className="card-body pb-2">
                    <div>
                        <div className="d-flex font-fashion justify-content-between">
                            <h5 className="card-title mb-3">{recipe.recipeName}</h5>
                            <DeleteBtn onClick={(e) => deleteRecipe(e, recipe._id)} />
                        </div>
                        <p className="card-text text-muted">{recipe.recipeDescription}</p>
                        <p className="card-text">{recipe.instructions}</p>
                        {/* hr className="my-1" />< */}
                    </div>
                </div>
                <div className="card-footer d-flex justify-content-between
                align-items-center bg-white">
                    <span className="text-smaller font-book-italic text-black-50 text-truncate">
                        Tags: <span className="text-muted">{recipe.recipeTags.join(", ")}</span>
                    </span>
                    <span className="font-sans text-smaller category-badge">{recipe.recipeCategory.toUpperCase()}</span>
                </div>
            </div>
        </div>
    );
}

export default RecipeCard;

