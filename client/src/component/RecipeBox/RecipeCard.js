import React from "react";
import DeleteBtn from "../RecipeBox/DeleteBtn";

function RecipeCard({ recipe, onClick, deleteRecipe, categorySearch, index }) {

    // console.log("Component says:", recipe)

    const isUrl = (string) => {
        try {
            let expression = /[-a-zA-Z0-9@:%_+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_+.~#?&//=]*)?/
            return string.match(expression);
        } catch {
            return null;
        }
    }

    return (
        <div className="col my-2 font-book">
            <div data-index={index} className="card h-100 recipe-card" onClick={(e) => onClick(e)}>
                <div className="card-body pb-2 d-flex flex-column">
                    <div className="font-fashion d-flex justify-content-between align-items-center">
                    <h5 className="card-title">{recipe.name}</h5>
                    <DeleteBtn onClick={(e) => deleteRecipe(e, recipe._id)} />
                    </div>
                    <span className="divider-color my-2"></span>
                    <div className="flex-fill d-flex flex-column justify-content-center">
                        {isUrl(recipe.imageUrls[0]) ? 
                            <img className="img-fluid card-img img-thumbnail my-2" alt="Recipe Thumbnail" src={recipe.imageUrls[0]}/>
                            :
                            <div className="recipe-text text-center py-3">
                                
                                {recipe.description}
                                
                            </div>}
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

