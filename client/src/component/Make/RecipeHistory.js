import React, { useState, Fragment } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import API from "../../utils/API";
import { useRecipe } from "../CreateRecipe/RecipeContext";
// import TableBody from "../DynamicTable/TableBody"
// import TableHeader from "../DynamicTable/TableHeader"
import CardComplete from "../CreateRecipe/CardComplete";
import TableBody from "../DynamicTable/TableBody";
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
                        Front Side
                    </button>
                </div>
            </div>
            <span className="divider-color"></span>
            <div >
                <h1 className="rb-btn">History</h1>
                <table className="table font-book">
                    <thead className="table-head-style">
                        <tr>
                            <th>Date</th>
                            <th>Comment</th>
                        </tr>
                    </thead>
                    <tbody className="table-style">
                        {recipe.comments.map((item) => {
                            return (
                                <tr key={item._id}>
                                    <td>
                                        <Moment format="MMM Do YY" parse="YYYY-MM-DD">
                                            {item.dateCreated}
                                        </Moment>
                                    </td>
                                    <td>{item.text}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default RecipeHistory;
