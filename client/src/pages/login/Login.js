import React, { useState, useContext } from "react";
import test from '../../firebase';
import TestCard from "../../component/TestCard"
import SignUpForm from "../../component/SignUpForm"
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import './firebaseui-styling.css';
import { AuthContext } from "../../component/Auth";
import { ThemeProvider } from "styled-components";
import { useDarkMode } from "../../component/DarkMode/useDarkMode";
import Toggle from "../../component/DarkMode/Toggler";
import { GlobalStyles } from "../../component/DarkMode/GlobalStyles";
import { lightTheme, darkTheme } from "../../component/DarkMode/Theme";

function Login({history}) {
    
    const [theme, themeToggler] = useDarkMode();
    const themeMode = theme === 'light' ? lightTheme : darkTheme;
    
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
        // console.log("Signing In", userCred.email, event.target.name);
        try {
            if (event.target.name === "signin") {
                await firebase.auth().signInWithEmailAndPassword(userCred.email, userCred.password);
            } else if (event.target.name === "signup") {
                await firebase.auth().createUserWithEmailAndPassword(userCred.email, userCred.password);
            } else {
                return;
            }
            // Will redirect upon signin, or signup, disabled for testing
            history.push("/recipebox");
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
        <ThemeProvider theme={themeMode}>
        <>
        <GlobalStyles/>
            <Toggle theme={theme} toggleTheme={themeToggler} />



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
        </>
        </ThemeProvider>
    );
}

export default Login;