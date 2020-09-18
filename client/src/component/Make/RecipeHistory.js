import React, { useState, Fragment } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import API from "../../utils/API";
import { useRecipe } from "../CreateRecipe/RecipeContext";
// import TableBody from "../DynamicTable/TableBody"
// import TableHeader from "../DynamicTable/TableHeader"
import CardComplete from "../CreateRecipe/CardComplete";
import TableControl from "../DynamicTable/TableControl";
import TestCard from "../TestCard";
import Accordion from "./Accordion";
import Moment from "react-moment";


function RecipeHistory({ recipe, flipCard }) {

    return (
        <>
            <div className="d-flex justify-content-between">
                <h2 className="display-2 font-brand-small">
                    {recipe.name}
                </h2>
                <div>
                    <button type="button" className="rb-btn-subtle font-book-italic mr-3 mt-2" onClick={() => flipCard()}>
                        Recipe
                    </button>
                </div>
            </div>
            <div>
                <h1 className="rb-btn">History</h1>
                <TableControl comments={recipe.comments} header={true}></TableControl>
            </div>
        </>
    );
}

export default RecipeHistory;
