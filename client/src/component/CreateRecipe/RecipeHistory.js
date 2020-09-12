import React, { useState } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import API from "../../utils/API";
import { useRecipe } from "./RecipeContext";
// import TableBody from "../DynamicTable/TableBody"
// import TableHeader from "../DynamicTable/TableHeader"
import CardComplete from "./CardComplete";
import TableBody from "../DynamicTable/TableBody";
import TestCard from "../TestCard";
import Accordion from "../CreateRecipe/Accordion";




//Passing data through link, use useLocation
//If passing through a card and modal, we can pass recipe as a parameter in the RecipeHistory
//But we need to put this on the modal,

function RecipeHistory(recipe) {

    //if pass information through a link, we can access info using useLocation 
    // const {
    // state: {recipeName },
    // } = useLocation();

    // console.log("recipe", recipe);
    // console.log("recipe Name", recipe.recipe.recipeName);
    // console.log("recipe Actions Title", recipe.recipe.actions[0].title);
    // console.log("recipe Actions Title", recipe.recipe.actions[0].text);

  //   const completeRecipe = (e) => {
  //     e.preventDefault();
  //     API.createRecipe(recipe).then(() => {
  //       history.push("/complete"); //when done with this, we want to push to complete page
  //     });
  //   };

  return (
    <>
     
      <h1 className="display-2 font-brand-small mb-0">Recipe History </h1>
      <hr className="divider-color" />
     
    
     {/* we need to need to map through date and or comments  */}
      {/* {actions.map((obj) => {
        return <TableBody title={obj.title} text={obj.text} />;
      })} */}

    
  </>

  );
}

export default RecipeHistory;