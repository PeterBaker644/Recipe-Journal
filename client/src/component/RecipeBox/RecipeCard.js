import React, { useEffect, useState } from "react";
import Modal from "../Modal/Modal";
import API from "../../utils/API";
import '../Modal/Modal.css';
import DeleteBtn from "../RecipeBox/DeleteBtn";

function RecipeCard() {
    const [status, setStatus] = useState(false);
    // Setting component intial state
    const [recipes, setRecipes] = useState([]);

    // Load all recipes and store with setRecipes
    useEffect(() => {
        loadRecipes()
    }, [])

    // Loads recipes and set them to recipes
    function loadRecipes() {
        API.getAllRecipes()
            .then(res => {
                setRecipes(res.data);
                console.log(res.data);
            })
            .catch(err => console.log(err));
    };

    function deleteRecipe(event, id) {
        event.stopPropagation()
        API.deleteRecipe(id)
            .then(res => loadRecipes())
            .catch(err => console.log(err));
    }

    return (
        <>
            {/* Example Card... needs data to be added from DB */}
            {recipes.length ? (
                <div>
                    {recipes.map(recipe => {
                        return (
                            <div className="card" onClick={() => setStatus(true)}>
                                <div className="card-body">
                                    <div key={recipe._id}>
                                        <h5 className="card-title">{recipe.recipeName}</h5>
                                        {/* The following don't do anything...
                                        <p className="card-text">{recipe.ingredientName}</p>
                                        <p className="card-text">{recipe.instructions}</p>*/}
                                        <DeleteBtn onClick={(e) => deleteRecipe(e, recipe._id)} />
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            ) : (
                <h3>No Recipes to Display</h3>
            )}

            {/* This will have more descriptive recipe content */}
            {status && (<Modal closeModal={() => setStatus(false)}>
                <p>This is where the modal content will go...</p>
            </Modal>)}
        </>
    );
}

export default RecipeCard;