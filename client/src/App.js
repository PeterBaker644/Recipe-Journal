import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Splash from "./pages/splash/Splash";
import Signup from "./pages/signup/Signup";
import Login from "./pages/login/Login";
import Gene from "./pages/Gene";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/gene" exact component={Gene} />
        <Route path="/" exact component={Splash} />
        <Route exact path="/signup" exact component={Signup} />
        <Route exact Path="/login" exact component={Login} />
      </Switch>
    </Router>
  );
}

export default App;
