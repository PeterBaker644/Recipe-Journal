import React, { useContext } from "react";
import { Link } from 'react-router-dom';
import test from '../../firebase';
import box from "../../images/box5.png";
import "./splash.css";
import TestCard from "../../component/TestCard"
import { AuthContext } from "../../component/Auth";

function Splash() {
<<<<<<< HEAD
    const app = test.firebase_;
    const { currentUser } = useContext(AuthContext);
    
    return (
        <TestCard>
            <section className="text-center">
                <h1 className="font-brand">Recipe Box.</h1>
                <p className="divider font-script">make something better</p>
                <img className="img-fluid mb-3" src={box} alt="recipe box" />
            </section>
            <section className="d-flex justify-content-center my-4">
                <Link to="/login" className="btn-secondary rb-btn">Sign In</Link>
                <Link to="/signup" className="btn-secondary rb-btn mx-4">Sign Up</Link>
                <Link to="/Gene" className="btn-secondary rb-btn">Gene's Page</Link>
                {!!currentUser ? <button className="rb-btn btn-primary ml-4" onClick={() => app.auth().signOut()}>Sign Out</button> : ""}
            </section>
        </TestCard>
    );
=======
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
      <Link to="/create" className="btn btn-primary">
        {" "}
        Create{" "}
      </Link>
      <Link to="/gene" className="btn btn-primary">
        {" "}
        genepagetest{" "}
      </Link>
    </div>
  );
>>>>>>> origin
}

export default Splash;
