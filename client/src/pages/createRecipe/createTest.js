import React, {useEffect, useState} from 'react';
import { useLocation } from "react-router-dom";
import CreateRecipes from "./createRecipes";

const CreateTest = () => {

    const location = useLocation();

    useEffect(() => {
       console.log(location);
       console.log(location.state);
       console.log(location.state.recipe);
       console.log(location.state.recipe.name);
    }, [location]);
 
 return (
    <div>
    <h2>What the shit am I sending</h2>
    <p>Name: {location.state.recipe.name}</p>
    <p>Description: {location.state.recipe.description}</p>
    <p>Categories: {location.state.recipe.category}</p>
    <p>Tags: {location.state.recipe.tags}</p>
    </div>
 )
}

export default CreateTest;
