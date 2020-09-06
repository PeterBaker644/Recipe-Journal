import React, { useEffect, useState } from "react";
import Modal from "./Modal";
import API from "../../utils/API";
import './RecipeBox.css';

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

    return (
        <>
            {/* Example Card... needs data to be added from DB */}
            <div className="card" onClick={() => setStatus(true)}>
                <div className="card-body">
                    {recipes.length ? (
                        <div>
                            {recipes.map(recipe => {
                                return (
                                    <div key={recipe._id}>
                                        <h5 className="card-title">{recipe.recipeName}</h5>
                                        <p className="card-text">{recipe.ingredients}</p>
                                        <p className="card-text">{recipe.instructions}</p>
                                    </div>
                                );
                            })}
                        </div>
                    ) : (
                            <h3>No Recipes to Display</h3>
                        )}
                </div>
            </div>

            {/* This will have more descriptive recipe content */}
            {status && (<Modal closeModal={() => setStatus(false)}>
                <p>This is where the modal content will go...</p>
            </Modal>)}
        </>
    );
}

export default RecipeCard;