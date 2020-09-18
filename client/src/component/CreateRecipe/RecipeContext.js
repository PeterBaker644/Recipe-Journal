import React, { createContext, useState, useContext, useEffect } from 'react';
import test from '../../firebase';
import ls from "local-storage";

const RecipeContext = createContext();
const firebase = test.firebase_;

// consider useMethods instead.
export const RecipeProvider = ({ children }) => {
    const user = firebase.auth().currentUser.uid

    useEffect(() => {
        console.log("context is refreshed");
        return () => {
            console.log("component is unmounting")
            ls.set("recipe", recipe);
        }
    })

    const initState = ls.get("recipe") || {
        userID: user,
        name: "",
        description: "",
        imageUrls: "",
        category: "",
        tags: [],
        ingredients: [],
        actions: []
    };

    // Do we want to store an editting variable in the recipeContext?

    const [recipe, setRecipe] = useState(initState);

    const setValues = (values) => {
        setRecipe(prevData => ({
            ...prevData,
            ...values
        }))
    }
    return (
        <RecipeContext.Provider value={{ recipe, setValues }}>
            {children}
        </RecipeContext.Provider>
    );
}

export const useRecipe = () => useContext(RecipeContext);