import axios from "axios";
import test from '../firebase';

// Initialize an instance of axios, pass in the header type.
const firebase = test.firebase_;
const authorize = axios.create();

// Observing firebase.auth() to listen signin/signout.
firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
        console.log("[API] User is signed in");
        // console.log("user =", user)
        // console.log("Firebase.auth().user =",firebase.auth().user)
        // Getting an authorization token from Fireback to send to the backend.
        user.getIdToken().then(function (idToken) {
            // Intercepting any request and appending token to the header.
            authorize.interceptors.request.use(function (config) {
                config.headers.authorization = idToken;
                return config;
            });
        }).catch(function (error) {
            console.log("[API] Error:", error);
        });
    } else {
        console.log("[API] User is not signed in");
    }
});

export default {
    getAllRecipes: function () {
        return authorize.get("/api/recipes");
    },    
    getPublicRecipes: function (userID) {
        // console.log("[API] getting all recipes EXCEPT those by ", userID);
        return authorize.get("/api/recipes/public/" + userID);
    },
    createRecipe: function (newRecipe) {
        // console.log("[API] New recipe created:", newRecipe);
        return authorize.post("/api/recipes", newRecipe);
    },
    updateRecipe: function (_id, recipe) {
        return authorize.put("/api/recipes/" + _id, recipe);
    },
    getOneRecipe: function (_id) {
        return authorize.get("/api/recipes/" + _id);
    },
    getUserRecipes: function (userID) {
        // console.log("[API] getting all recipes by specified user", userID);
        return authorize.get("/api/recipes/user/" + userID);
    },
    deleteRecipe: function (_id) {
        console.log("[API] Recipe deleted:", _id);
        return authorize.delete("/api/recipes/" + _id);
    },
    getAllIngredients: function () {
        return authorize.get("/api/Ingredients");
    },
    getAllIngredientsLimitTen: function () {
        return authorize.get("/api/Ingredients/limitTen");
    },
    updateIngredientCount: function (Ingredientlist) {
        // console.log("[API] updating ingredient count:", Ingredientlist);
        return authorize.put("/api/Ingredients", Ingredientlist);
    },
    
};
