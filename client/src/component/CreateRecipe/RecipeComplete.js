import React from "react";
import { Link, useHistory } from "react-router-dom";
import API from "../../utils/API";
import { useRecipe } from "../../component/CreateRecipe/RecipeContext";
// import TableBody from "../DynamicTable/TableBody";
// import TableHeader from "../DynamicTable/TableHeader";
import TestCard from "../TestCard";
import CardComplete from "./CardComplete";
import ExitBtn from "./ExitBtn";
import ls from 'local-storage';

function RecipeComplete() {

    const { recipe } = useRecipe();
    const history = useHistory();

    // const onSubmit = (e) => {
    //     e.preventDefault();
    // }

    const completeRecipe = (e) => {
        e.preventDefault();

        if (recipe._id) {
            console.log("This recipe has an ID");
            API.updateRecipe(recipe._id, recipe).then(() => {
                history.push('/recipebox')
            })
        } else {
        API.createRecipe(recipe).then(() => {
            history.push('/recipebox')
        })
        }
    }

    return (
        <TestCard>
            <CardComplete recipe={recipe} />
            <div className="mt-4 d-flex justify-content-between">
                <div className="d-flex">
                    <Link className="rb-btn btn-info" to={{pathname: "/create/steps"}}>Back</Link>
                    <Link className="rb-btn btn-warning ml-md-2" to={{pathname: "/create/info"}}>Restart</Link>
                </div>
                <button className="rb-btn btn-info" onClick={completeRecipe}>Save Recipe</button>
            </div>
        </TestCard>
    )
}

export default RecipeComplete;