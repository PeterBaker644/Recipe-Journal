import React from "react";
import { useLocation } from "react-router-dom";
import { RecipeProvider } from "../../component/CreateRecipe/RecipeContext"
import RecipeInfo from "../../component/CreateRecipe/RecipeInfo"
import AddIngredients from "../../component/CreateRecipe/AddIngredients"
import AddSteps from "../../component/CreateRecipe/AddSteps"
import RecipeComplete from "../../component/CreateRecipe/RecipeComplete"
import Make from "../../component/CreateRecipe/Make";

function CreateRecipe() {

    const location = useLocation();

    return (
        <RecipeProvider>
            { location.pathname === "/create/info" ? <RecipeInfo/>
            : location.pathname === "/create/ingredients" ? <AddIngredients/>
            : location.pathname === "/create/steps" ? <AddSteps/> 
            : location.pathname === "/create/complete" ? <RecipeComplete/> 
            : location.pathname === "/make" ? <Make/> 
            : ""}
        </RecipeProvider>
    );
}

export default CreateRecipe;