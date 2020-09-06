import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Modal from "./Modal";
import API from "../../utils/API";
import "./RecipeBox.css";

function Card(props) {
    const [status, setStatus] = useState(false);
    // Setting component intial state
    const [recipe, setRecipe] = useState([])

    // Load all recipes and store with setRecipes
    // const {id} = useParams()
    useEffect(() => {
      API.getAllRecipes()
        .then(res => setRecipe(res.data))
        .catch(err => console.log(err));
    }, [])

    console.log(recipe.recipeName);

    return (
        <>
            {/* Example Card... needs data to be added from DB */}
            <div className="card" onClick={() => setStatus(true)}>
                <div className="card-body">
                    <h5 className="card-title">{recipe.recipeName}</h5>
                    <p className="card-text">{recipe.ingredients}</p>
                    <p className="card-text">{recipe.cookingAction}</p>
                </div>
            </div>

            {/* This will have more descriptive recipe content */}
            { status && (<Modal closeModal={() => setStatus(false)}>
                <p>This is where the modal content will go...</p>
            </Modal>)}
        </>
    );
}

export default Card;