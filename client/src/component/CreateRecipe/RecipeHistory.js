import React, { useState, Fragment } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import API from "../../utils/API";
import { useRecipe } from "./RecipeContext";
// import TableBody from "../DynamicTable/TableBody"
// import TableHeader from "../DynamicTable/TableHeader"
import CardComplete from "./CardComplete";
import TableBody from "../DynamicTable/TableBody";
import TestCard from "../TestCard";
import Accordion from "../CreateRecipe/Accordion";
import Moment from "react-moment";


function RecipeHistory(recipe) {
  // console.log("recipe", recipe);
  // console.log("recipe Actions Title", recipe.recipe.actions[0].title);
  // console.log("recipe Actions Title", recipe.recipe.actions[0].text);
  // console.log("recipe comments", recipe.recipe.comments[0].text);
  // console.log(
  //   "recipe comments dateCreated",
  //   recipe.recipe.comments[0].dateCreated
  // );

 

  return (
    <>
      <h1 className="display-2 font-brand-small mb-0">Recipe History </h1>
      <hr className="divider-color" />

      <div >
        <table className="table font-book">
          <thead>
            <tr>
              <th>Date</th>
              <th>Comment</th>
            </tr>
          </thead>
          <tbody className="table-style">
            {recipe.recipe.comments.map((item) => {
              return (
                <tr>
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
