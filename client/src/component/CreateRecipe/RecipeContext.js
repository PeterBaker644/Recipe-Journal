import React, { createContext, useState, useContext} from 'react';

const RecipeContext = createContext();

// consider useMethods instead.
export const RecipeProvider = ({children}) => {
    const [recipe, setRecipe] = useState({
        userID: "",
        recipeName: "",
        recipeDescription: "",
        recipeImageUrls: [],
        recipeCategory: "",
        recipeTags: [],
        ingredients: [],
        actions: []
    });

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