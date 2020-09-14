import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Splash from "./pages/splash/Splash";
import Signup from "./pages/signup/Signup";
import Login from "./pages/login/Login";
import CreateRecipe from "./pages/createRecipe/createRecipe";
import { AuthProvider } from "./component/Auth";
import PrivateRoute from "./component/PrivateRoute";
import Gene from "./pages/gene/Gene";
import Privacy from "./pages/privacyPolicy/privacyPolicy";
import RecipeBox from "./pages/recipeBox/RecipeBox";
import "./style.css";
import Make from "./component/CreateRecipe/Make";

function App() {

    return (
        <AuthProvider>
            <Router>
                <Switch>
                    <PrivateRoute exact path="/recipebox" component={RecipeBox} />
                    <Route exact path="/gene" component={Gene} />
                    <Route exact path="/" component={Splash} />
                    <Route exact path="/login" component={Login} />
                    <PrivateRoute path="/create" component={CreateRecipe} />
                    <Route exact path="/make" component={Make} />
                    <Route exact path="/privacy" component={Privacy} />
                    <Route exact path="/signup" component={Signup} />
                    

                </Switch>
            </Router>
        </AuthProvider>
    );
}

export default App;