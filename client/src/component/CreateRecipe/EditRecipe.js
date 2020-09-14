import React from "react";
import { useLocation } from "react-router-dom";
import { RecipeProvider } from "../../component/CreateRecipe/RecipeContext"
import RecipeInfo from "../../component/CreateRecipe/RecipeInfo"
import AddIngredients from "../../component/CreateRecipe/AddIngredients"
import AddSteps from "../../component/CreateRecipe/AddSteps"
import RecipeComplete from "../../component/CreateRecipe/RecipeComplete"

function EditRecipe() {

    const location = useLocation();

    return (
        <RecipeProvider>
            { location.pathname === "/edit/info" ? <RecipeInfo/>
            : location.pathname === "/edit/ingredients" ? <AddIngredients/>
            : location.pathname === "/edit/steps" ? <AddSteps/> 
            : location.pathname === "/edit/complete" ? <RecipeComplete/> 
            : ""}
        </RecipeProvider>
    );
}

export default EditRecipe;