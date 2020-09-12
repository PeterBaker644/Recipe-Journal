import React from "react";
import { Link, useHistory } from "react-router-dom";
import API from "../../utils/API";
import { useRecipe } from "../../component/CreateRecipe/RecipeContext";
// import TableBody from "../DynamicTable/TableBody"
// import TableHeader from "../DynamicTable/TableHeader"
import TestCard from "../TestCard"
import CardComplete from "./CardComplete"
import { ThemeProvider } from "styled-components";
import { useDarkMode } from "../../component/DarkMode/useDarkMode";
import Toggle from "../../component/DarkMode/Toggler";
import { GlobalStyles } from "../../component/DarkMode/GlobalStyles";
import { lightTheme, darkTheme } from "../../component/DarkMode/Theme";

function RecipeComplete() {

    const [theme, themeToggler] = useDarkMode();
    const themeMode = theme === 'light' ? lightTheme : darkTheme;

    const { recipe } = useRecipe();
    const history = useHistory();

    // const onSubmit = (e) => {
    //     e.preventDefault();
    // }

    const completeRecipe = (e) => {
        e.preventDefault();
        API.createRecipe(recipe).then(() => {
            history.push('/recipebox')
        })
    }

    return (
        /* Dark and Light Mode */
        <ThemeProvider theme={themeMode}>
        <>
        <GlobalStyles/>
            <Toggle theme={theme} toggleTheme={themeToggler} />


        <TestCard>
            <CardComplete recipe={recipe}>
            </CardComplete>
            <div className="mt-4 d-flex justify-content-between">
                <div className="d-flex justify-content-center">
                    <Link className="rb-btn btn-danger" to={{pathname: "/create/info"}}>Restart</Link>
                </div>
                <button className="rb-btn btn-success" onClick={completeRecipe}>Save Recipe</button>
            </div>
        </TestCard>
        </>
        </ThemeProvider>
    )
}

export default RecipeComplete;