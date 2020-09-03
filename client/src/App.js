import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Splash from "./pages/splash/Splash";
import Signup from "./pages/signup/Signup";
import Login from "./pages/login/Login";
import CreateRecipe from "./pages/createRecipe/CreateRecipes";
import { AuthProvider } from "./component/Auth";
import PrivateRoute from "./component/PrivateRoute";
import Gene from "./pages/gene/Gene";

function App() {

    return (
        <AuthProvider>
            <Router>
                <Switch>
                    <Route exact path="/gene" component={Gene} />
                    <Route exact path="/" component={Splash} />
                    <Route exact path="/login" component={Login} />
                    <PrivateRoute exact path="/create" component={CreateRecipe} />
                    <Route exact path="/signup" component={Signup} />
                </Switch>
            </Router>
        </AuthProvider>
    );
}

export default App;