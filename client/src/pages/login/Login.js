import React, { useState, useContext } from "react";
import test from '../../firebase';
import TestCard from "../../component/TestCard"
import SignUpForm from "../../component/SignUpForm"
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import './firebaseui-styling.css';
import { AuthContext } from "../../component/Auth";

function Login({history}) {
    // This is some crazy bullshit and I have no idea why it's not working correctly. v
    const firebase = test.firebase_;
    const [userCred, setUserCred] = useState({});
    const { currentUser } = useContext(AuthContext);
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
        <TestCard>
            {currentUser ? (
                history.push("/recipebox")
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
                        firebaseAuth={firebase.auth()}
                    />
                </>
            )}
        </TestCard>
    );
}

export default Login;