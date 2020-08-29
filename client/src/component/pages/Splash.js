import React from "react";
import {Link} from 'react-router-dom';
import box from "../../images/box5.png";
import "./splash.css";

function Splash() {
  return (
    <div className="container">
      <h1 className="splashName">Recipe Box</h1>

      <section className="aboutGif">
        <h2>curate your recipes</h2>
        <img src={box} alt="recipe box" />
      </section>
      <Link to ="/signup" className="btn btn-primary">
        {" "}
        Signup
      </Link>
      {"  "}
      <Link to="/login" className="btn btn-primary">
        {" "}
        Login
      </Link>
      {" "}
      <Link to="/Gene" className="btn btn-primary">
        {" "}
        genepagetest{" "}
      </Link>
    </div>
  );
}

export default Splash;
