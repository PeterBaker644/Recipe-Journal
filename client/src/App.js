import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Splash from "./component/pages/Splash";
import Signup from "./component/pages/Signup";
import Login from "./component/pages/Login";
import Gene from "./component/pages/Gene";



function App() {
  return (
    <Router>
      <div>
        <Route path="/" exact component={Splash} />
        <Route path="/signup" component={Signup} />
        {/* <Route Path="/login" component={Login} /> */}
        <Route path="/gene" component={Gene} />
      </div>
    </Router>
  );
}

export default App;
