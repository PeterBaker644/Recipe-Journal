import React, { useState, useEffect } from "react";
import test from '../../firebase';
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

    return (
        <div className="container justify-content-center row g-0 mt-4">
            <div className="card col-6">
                <h5 className="card-header text-center">Authentication Test Page</h5>
                <div class="card-body">
                    {authState.signedIn ? (
                        <div className="card-text">
                            <div className="lead py-2 mb-3">You are signed in.🎉</div>
                            <button className="btn btn-primary" onClick={() => app.auth().signOut()}>Sign Out</button>
                        </div>
                    ) : (
                        <StyledFirebaseAuth
                            uiConfig={uiConfig}
                            firebaseAuth={app.auth()}
                        />
                    )}
                </div>
            </div>            
        </div>
    );
}

export default Login;