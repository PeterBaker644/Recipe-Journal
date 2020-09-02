import React from "react";
import { Link } from 'react-router-dom';
import box from "../../images/box5.png";
import "./splash.css";
import TestCard from "../../component/TestCard"

function Splash() {
    return (
        <TestCard>
            <section className="text-center">
                <h1 className="font-brand">Recipe Box.</h1>
                <p className="divider font-script">make something better</p>
                <img className="img-fluid mb-3" src={box} alt="recipe box" />
            </section>
            <section className="d-flex justify-content-center my-2">
                <Link to="/login" className="btn-secondary rb-btn">Sign In</Link>
                <Link to="/signup" className="btn-secondary rb-btn mx-4">Sign Up</Link>
                <Link to="/Gene" className="btn-secondary rb-btn">Gene's Page</Link>
            </section>
        </TestCard>
    );
}

export default Splash;
