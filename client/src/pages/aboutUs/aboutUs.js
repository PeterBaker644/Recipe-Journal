import React from 'react';
import Box from '../../component/RecipeBox/Box';
import Avatar from 'react-avatar';
import { Link } from 'react-router-dom';



function AboutUs() {
    return (

        <div className="about-us">
        <Box>
            <section className="text-center">
                <h1 className="font-brand">About Us.</h1>
                <span className="divider-color"></span>
            </section>
            <div className="row mt-4">
                <div className="col font-book text-center">
                    <Avatar githubHandle="PeterBaker644" round="15px" size="200" />
                    <p className="mt-2 mx-4">Github: <a href="https://github.com/PeterBaker644">Peter Baker</a></p> 
                </div>
                <div className="col font-book text-center">
                    <Avatar githubHandle="gshaver82" round="15px" size="200" />
                    <p className="mt-2 mx-4">Github: <a href="https://github.com/gshaver82">Gene Shaver</a></p>
                </div>
            </div>
            <div className="row">
                <div className="col font-book text-center">
                    <Avatar githubHandle="chueny" round="15px" size="200" />
                    <p className="mt-2 mx-4">Github: <a href="https://github.com/chueny">Chue Yang</a></p>
                </div>
                <div className="col font-book text-center">
                    <Avatar githubHandle="jkthomps21" round="15px" size="200" />
                    <p className="mt-2 mx-4">Github: <a href="https://github.com/jkthomps21">Jacob Thompson</a></p>
                </div>
            </div>
        </Box>


        <div className="d-flex justify-content-center">
            <Link to="/" className="rb-btn btn-secondary my-4">Home</Link>
        </div>
        </div>

    );
}

export default AboutUs;
