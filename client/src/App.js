import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Splash from "./component/pages/Splash";
import Signup from "./component/pages/Signup";
import Login from "./component/pages/Login";
import Gene from "./component/pages/Gene";

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
