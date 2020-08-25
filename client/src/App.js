import React from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Splash from "./component/pages/Splash";
import Signup from "./component/pages/Signup";
import Login from "./component/pages/Login";



function App() {
  return (
    <Router>
      <Switch>
      <Route path="/" exact component ={Splash} />
      <Route path="/signup" exact component ={Signup} />
      <Route Path="/login" exact component ={Login} />
      </Switch>
    </Router>
   
  );
}

export default App;
