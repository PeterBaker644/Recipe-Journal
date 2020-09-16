import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Splash from "./pages/splash/Splash";
import Signup from "./pages/signup/Signup";
import Login from "./pages/login/Login";
import CreateRecipe from "./pages/createRecipe/createRecipe";
import { AuthProvider } from "./component/Auth";
import PrivateRoute from "./component/PrivateRoute";
import Gene from "./pages/gene/Gene";
import Privacy from "./pages/privacyPolicy/privacyPolicy";
import RecipeBox from "./pages/recipeBox/RecipeBox";
import AboutUs from "./pages/aboutUs/aboutUs";
import "./style.css";
import { ThemeProvider } from "styled-components";
import { useDarkMode } from "./component/DarkMode/useDarkMode";
import Toggle from "./component/DarkMode/Toggler";
import { GlobalStyles } from "./component/DarkMode/GlobalStyles";
import { lightTheme, darkTheme } from "./component/DarkMode/Theme";

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
                    <Route exact path="/privacy" component={Privacy} />
                    <Route exact path="/aboutus" component={AboutUs} />
                    <Route exact path="/signup" component={Signup} />
                </Switch>
            </Router>
        </AuthProvider>
        
        </>
        </ThemeProvider>
    );
}

export default App;