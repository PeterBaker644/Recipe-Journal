import React from "react";
import { Link, useHistory } from "react-router-dom";
import { useRecipe } from "../../component/CreateRecipe/RecipeContext";
import TableBody from "../DynamicTable/TableBody"
import TableHeader from "../DynamicTable/TableHeader"

import TestCard from "../TestCard"


function RecipeComplete() {

    const { recipe } = useRecipe();
    const history = useHistory();
    
    // const onSubmit = (e) => {
    //     e.preventDefault();
    // }

    const completeRecipe = (e) => {
        e.preventDefault();
        history.push('/recipeBox');
    }

    return (
        <TestCard>
            <h1 className="display-1 font-brand mb-0">{recipe.recipeName}</h1>
            <hr className="mt-1"/>
            <p className="font-book text-center">{recipe.recipeDescription}</p>
            <h4 className="rb-btn">Ingredients</h4>
            <div className="table-responsive">
                <table className="table font-book">
                    <TableHeader/>
                    <TableBody tableContents={recipe.ingredients} />
                </table>
            </div>
            <h4 className="rb-btn">Instructions</h4>
            <div className="table-responsive">
                <table className="table font-book">
                    <TableHeader/>
                    <TableBody tableContents={recipe.actions} />
                </table>
            </div>
            <div className="mt-4 d-flex justify-content-between">
                <div className="d-flex justify-content-center">
                    <Link className="rb-btn btn-danger" to={{pathname: "/create/info"}}>Restart</Link>
                </div>
                <button className="rb-btn btn-success" onClick={completeRecipe}>Save Recipe</button>
            </div>
        </TestCard>
    )
}

export default RecipeComplete;