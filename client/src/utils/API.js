import axios from "axios";
import test from '../firebase';

// Initialize an instance of axios, pass in the header type.
const firebase = test.firebase_;
const authorize = axios.create();

// Observing firebase.auth() to listen signin/signout.
firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
        console.log("[API] User is signed in");
        // Getting an authorization token from Fireback to send to the backend.
        firebase.auth().currentUser.getIdToken(true).then(function (idToken) {
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

// The getRecipes method retrieves recipes from the server
export default {
    getRecipes: function () {
        return authorize.get("/api/recipes");
    },
    getIngredients: function () {
        return authorize.get("/api/Ingredients");
    }
};
