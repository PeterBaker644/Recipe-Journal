import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import test from '../../firebase';
import TestCard from "../../component/TestCard"
import SignUpForm from "../../component/SignUpForm"
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import './firebaseui-styling.css';

function Login() {

    const [authState, setAuthState] = useState({
        signedIn: false
    });

    // This is some crazy bullshit and I have no idea why it's not working correctly. v
    const app = test.firebase_;

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

    useEffect(() => {
        app.auth().onAuthStateChanged(user => {
            setAuthState({ ...authState, signedIn: !!user });
        })
    }, [])

    const emailPassword = (e) => {
        e.preventDefault();
        const { email, password } = e.target.elements;
        
        console.log('you clicked the button', email.value, password.value);
    }

    return (
        <TestCard>
            {authState.signedIn ? (
                <div className="card-text text-center">
                    <div className="font-book py-2 mb-3">You are signed in. 🎉</div>
                    <Link to="/Gene" className="custom-button btn-primary">
                        genepagetest
                                </Link>
                    <button className="custom-button btn-primary" onClick={() => app.auth().signOut()}>Sign Out</button>
                </div>
            ) : (
                <>
                    <SignUpForm emailPassword={emailPassword}/>
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