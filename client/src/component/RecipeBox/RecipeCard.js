import React from "react";
import DeleteBtn from "../RecipeBox/DeleteBtn";

function RecipeCard({ recipe, onClick, deleteRecipe, categorySearch, index }) {

    // console.log("Component says:", recipe)

    return (
        <div className="col my-2 font-book">
            <div data-index={index} className="card h-100 recipe-card" onClick={(e) => onClick(e)}>
                <div className="card-body pb-2">
                    <div>
                        <div className="d-flex font-fashion justify-content-between">
                            <h5 className="card-title mb-3">{recipe.name}</h5>
                            <DeleteBtn onClick={(e) => deleteRecipe(e, recipe._id)} />
                        </div>
                        <p className="card-text recipe-text">{recipe.description}</p>
                        <p className="card-text">{recipe.instructions}</p>
                        {/* hr className="my-1" />< */}
                    </div>
                </div>
                <div className="card-footer d-flex justify-content-between
                align-items-center">
                    <span className="text-smaller font-book-italic text-truncate">
                        Tags: <span className="recipe-text">{recipe.tags.join(", ")}</span>
                    </span>
                    <button 
                        type="button" 
                        className="font-sans text-smaller category-badge"
                        onClick={(e) => categorySearch(e)}
                    >
                        {recipe.category.toUpperCase()}
                    </button>
                </div>
            </div>
        </div>
    );
}

export default RecipeCard;

