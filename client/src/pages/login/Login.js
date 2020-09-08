import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import test from '../../firebase';
import TestCard from "../../component/TestCard"
import SignUpForm from "../../component/SignUpForm"
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import './firebaseui-styling.css';
import { AuthContext } from "../../component/Auth";

function Login({history}) {
    
    // This is some crazy bullshit and I have no idea why it's not working correctly. v
    const app = test.firebase_;
    const [userCred, setUserCred] = useState({});
    const { currentUser } = useContext(AuthContext);
    const uiConfig = {
        signInFlow: "popup",
        signInOptions: [
            app.auth.GoogleAuthProvider.PROVIDER_ID,
            app.auth.FacebookAuthProvider.PROVIDER_ID
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
        // console.log("Signing In", userCred.email, event.target.name);
        try {
            if (event.target.name === "signin") {
                await app.auth().signInWithEmailAndPassword(userCred.email, userCred.password);
            } else if (event.target.name === "signup") {
                await app.auth().createUserWithEmailAndPassword(userCred.email, userCred.password);
            } else {
                return;
            }
            // Will redirect upon signin, or signup, disabled for testing
            // history.push("/");
        } catch (error) {
            alert(error);
        }
    }

    // Couldn't get this to work passing in state. ...Seems to work without it.
    // const submitForm = useCallback(
    //     authenticatUser,
    //     [history]
    // );

    return (
        <TestCard>
            {currentUser ? (
                <div className="card-text text-center">
                    <div className="font-book py-2 mb-3">You are signed in.</div>
                    <div className="d-flex justify-content-center">
                        <Link to="/" className="rb-btn btn-primary">Home</Link>
                        <Link to="/Gene" className="rb-btn btn-primary ml-3">Gene's Page</Link>
                        <button className="rb-btn btn-primary ml-3" onClick={() => app.auth().signOut()}>Sign Out</button>
                    </div>
                </div>
            ) : (
                <>
                    <SignUpForm 
                        handleInputChange={handleInputChange}
                        submitSignin={authenticateUser}
                        submitSignup={authenticateUser}
                    />
                    <div className="divider font-book-italic">Or</div>
                    <StyledFirebaseAuth
                        uiConfig={uiConfig}
                        firebaseAuth={app.auth()}
                    />
                </>
            )}
        </TestCard>
    );
}

export default Login;