import React, { useContext, useState } from "react";
import { Link } from 'react-router-dom';
import test from '../../firebase';
import box from "../../images/box5.png";
import TestCard from "../../component/TestCard"
import SignUpForm from "../../component/SignUpForm"
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import { AuthContext } from "../../component/Auth";
import Modal from "../../component/Modal/Modal";
import PrivacyPolicyText from "../../component/PrivacyPolicy/PrivacyPolicyText";
import Countdown from "../../component/Make/Countdown";
import Sparkles from "../../component/Sparkle/Sparkles";

function Splash({history}) {
    const firebase = test.firebase_;
    const { currentUser } = useContext(AuthContext);
    const [userCred, setUserCred] = useState({});
    const [display, setDisplay] = useState(false);
    const uiConfig = {
        signInFlow: "popup",
        signInOptions: [
            firebase.auth.GoogleAuthProvider.PROVIDER_ID,
            firebase.auth.FacebookAuthProvider.PROVIDER_ID
        ],
        callbacks: {
            signInSuccess: () => false
        }
    }
    
    function handleInputChange(event) {
        const { name, value } = event.target;
        setUserCred({ ...userCred, [name]: value })
    };

    const authenticateUser = async (event) => {
        event.preventDefault();
        try {
            if (event.target.name === "signin") {
                await firebase.auth().signInWithEmailAndPassword(userCred.email, userCred.password);
            } else if (event.target.name === "signup") {
                await firebase.auth().createUserWithEmailAndPassword(userCred.email, userCred.password);
            } else {
                return;
            }
            history.push("/recipebox");
        } catch (error) {
            alert(error);
        }
    }

    return (
        <div>
            <TestCard>
                <section className="text-center">
                    <h1 className="font-brand display-3"><Sparkles>Recipe Box.</Sparkles></h1>
                    <p className="divider font-script">make something better</p>
                    <img className="img-fluid mb-3" src={box} alt="recipe box" />
                </section>
                <section className="my-4">
                    {/* <Link to="/timer" className="btn-secondary rb-btn">Countdown</Link> */}
                    {!!currentUser ? (
                        <>
                            <Link to="/recipebox" className="btn-secondary rb-btn mr-4">Recipe Box</Link> 
                            <button className="rb-btn btn-info" onClick={() => firebase.auth().signOut()}>Sign Out</button>
                        </>
                        ) : (
                            <div className="mx-4">
                                <SignUpForm 
                                    handleInputChange={handleInputChange}
                                    submitSignin={authenticateUser}
                                    submitSignup={authenticateUser}
                                />
                                <div className="divider font-book-italic">Or</div>
                                <StyledFirebaseAuth
                                    uiConfig={uiConfig}
                                    firebaseAuth={firebase.auth()}
                                />
                            </div>
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
    );
}

export default Splash;
