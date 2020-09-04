import React, { useContext } from "react";
import { Link } from 'react-router-dom';
import test from '../../firebase';
import box from "../../images/box5.png";
import "./splash.css";
import TestCard from "../../component/TestCard"
import { AuthContext } from "../../component/Auth";

function Splash() {
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
                <Link to="/recipeBox" className="btn-secondary rb-btn">Jacob's</Link>
                <Link to="/create" className="btn-secondary rb-btn">Create Recipe</Link>
                <Link to="/privacy" className="btn-secondary rb-btn">Privacy Policy</Link>
                {!!currentUser ? <button className="rb-btn btn-primary ml-4" onClick={() => app.auth().signOut()}>Sign Out</button> : ""}
            </section>
        </TestCard>
    );
}

export default Splash;
