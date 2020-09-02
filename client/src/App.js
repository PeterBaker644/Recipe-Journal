import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Splash from "./pages/splash/Splash";
import Signup from "./pages/signup/Signup";
import Login from "./pages/login/Login";
import Gene from "./pages/Gene";
import { AuthProvider } from "./component/Auth";
import PrivateRoute from "./component/PrivateRoute";

function App() {

    console.log()

    return (
        <AuthProvider>
            <Router>
                <Switch>
                    <PrivateRoute exact path="/gene" component={Gene} />
                    <Route exact path="/" component={Splash} />
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/signup" component={Signup} />
                </Switch>
            </Router>
        </AuthProvider>
    );
}

export default App;
