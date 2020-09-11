import React, { useContext, useState } from "react";
import { Link } from 'react-router-dom';
import test from '../../firebase';
import box from "../../images/box5.png";
import TestCard from "../../component/TestCard"
import { AuthContext } from "../../component/Auth";
import Modal from "../../component/Modal/Modal";
import PrivacyPolicyText from "../../component/PrivacyPolicy/PrivacyPolicyText";
import { ThemeProvider } from "styled-components";
import { useDarkMode } from "../../component/DarkMode/useDarkMode";
import Toggle from "../../component/DarkMode/Toggler";
import { GlobalStyles } from "../../component/DarkMode/GlobalStyles";
import { lightTheme, darkTheme } from "../../component/DarkMode/Theme";

function Splash() {
    const app = test.firebase_;
    const { currentUser } = useContext(AuthContext);
    const [display, setDisplay] = useState(false);
    const [theme, themeToggler] = useDarkMode();
    const themeMode = theme === 'light' ? lightTheme : darkTheme;

    return (
        <ThemeProvider theme={themeMode}>
        <>
        <GlobalStyles/>
            <Toggle theme={theme} toggleTheme={themeToggler} />
        <div>
            <TestCard>
                <section className="text-center">
                    <h1 className="font-brand">Recipe Box.</h1>
                    <p className="divider font-script">make something better</p>
                    <img className="img-fluid mb-3" src={box} alt="recipe box" />
                </section>
                <section className="d-flex justify-content-center my-4">
                    {/* <Link to="/signup" className="btn-secondary rb-btn mx-4">Sign Up</Link> */}
                    {/* <Link to="/Gene" className="btn-secondary rb-btn">Gene's Page</Link> */}
                    {/* <Link to="/create/info" className="btn-secondary rb-btn">Create Recipe</Link> */}
                    {!!currentUser ? (
                        <>
                            <Link to="/recipebox" className="btn-secondary rb-btn mr-4">Recipe Box</Link> 
                            <button className="rb-btn btn-primary" onClick={() => app.auth().signOut()}>Sign Out</button>
                        </>
                        ) : (
                            <Link to="/login" className="btn-secondary rb-btn">Sign In</Link>
                        )}

                </section>
            </TestCard>
            <div className="d-flex justify-content-center">
                <button className="rb-btn btn-secondary mt-4" onClick={() => setDisplay(true)}>Privacy Policy</button>
            </div>
            { display && (<Modal closeModal={() => setDisplay(false)}>
                <PrivacyPolicyText/>
            </Modal>)}
        </div>
        </>
        </ThemeProvider>
    );
}

export default Splash;
