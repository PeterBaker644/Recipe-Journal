import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Splash from "./pages/splash/Splash";
import Login from "./pages/login/Login";
import CreateRecipe from "./pages/createRecipe/createRecipe";
import { AuthProvider } from "./component/Auth";
import PrivateRoute from "./component/PrivateRoute";
import Gene from "./pages/gene/Gene";
import Privacy from "./pages/privacyPolicy/privacyPolicy";
import RecipeBox from "./pages/recipeBox/RecipeBox";
import AboutUs from "./pages/aboutUs/aboutUs";
import "./style.css";
<<<<<<< HEAD
import { ThemeProvider } from "styled-components";
import { useDarkMode } from "./component/DarkMode/useDarkMode";
import Toggle from "./component/DarkMode/Toggler";
import { GlobalStyles } from "./component/DarkMode/GlobalStyles";
import { lightTheme, darkTheme } from "./component/DarkMode/Theme";
=======
import Make from "./pages/make/Make";
>>>>>>> origin

function App() {

    const [theme, toggleTheme, componentMounted] = useDarkMode();
    const themeMode = theme === 'light' ? lightTheme : darkTheme;

    if (!componentMounted) {
        return <div />
    };

    return (

        <ThemeProvider theme={themeMode}>
        <>
        <GlobalStyles/>
            <Toggle theme={theme} toggleTheme={toggleTheme} />

        
        <AuthProvider>
            <Router>
                <Switch>
                    <PrivateRoute exact path="/recipebox" component={RecipeBox} />
                    <Route exact path="/gene" component={Gene} />
                    <Route exact path="/" component={Splash} />
                    <Route exact path="/login" component={Login} />
                    <PrivateRoute path="/create" component={CreateRecipe} />
                    <PrivateRoute exact path="/make" component={Make} />
                    <Route exact path="/privacy" component={Privacy} />
<<<<<<< HEAD
                    <Route exact path="/aboutus" component={AboutUs} />
                    <Route exact path="/signup" component={Signup} />
=======
>>>>>>> origin
                </Switch>
                <Route path="/privacy"/>
            </Router>
        </AuthProvider>
        
        </>
        </ThemeProvider>
    );
}

export default App;