import React, { useEffect, useState } from "react";
import RecipeCard from "../../component/RecipeBox/RecipeCard";
import AddRecipe from "../../component/RecipeBox/AddRecipe";
import Modal from "../../component/Modal/Modal";
import API from "../../utils/API";
import Box from "../../component/RecipeBox/RecipeBox"
import CardComplete from "../../component/CreateRecipe/CardComplete"
import '../../component/Modal/Modal.css';

function RecipeBox() {

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
        <Box>
            <h1 className="font-brand mt-2">My Recipe Box</h1>
            <section >
                <div className="row row-cols-md-4">
                    <div className="col my-2 font-book recipe-card">
                        <AddRecipe />
                    </div>
                    {/* Cards should fill page based on number of recipes users have */}
                    {/* Example Card... needs data to be added from DB */}
                    {recipes.length ? (
                        <>
                            {recipes.map(recipe => {
                                return (<RecipeCard
                                    recipe={recipe}
                                    deleteRecipe={deleteRecipe}
                                    setStatus={setStatus}
                                    key={recipe._id}
                                />)
                            })}
                        </>
                    ) : (<h3>No Recipes to Display</h3>)
                    }
                    {/* This will have more descriptive recipe content */}
                    {status && (<Modal closeModal={() => setStatus(false)}>
                        <CardComplete recipe={recipes[0]}></CardComplete>
                    </Modal>)}
                </div>
            </section>
        </Box>
    );
}

export default RecipeBox;