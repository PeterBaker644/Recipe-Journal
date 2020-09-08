import React, { createContext, useState, useContext} from 'react';
import test from '../../firebase';

const RecipeContext = createContext();
const firebase = test.firebase_;

// consider useMethods instead.
export const RecipeProvider = ({children}) => {
    const user = firebase.auth().currentUser.uid

    const [recipe, setRecipe] = useState({
        userID: user,
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