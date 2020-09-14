import React, { useState } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import API from "../../utils/API";
import { useRecipe } from "../../component/CreateRecipe/RecipeContext";
// import TableBody from "../DynamicTable/TableBody"
// import TableHeader from "../DynamicTable/TableHeader"
import TestCard from "../TestCard";
import CardComplete from "./CardComplete";
import TableBody from "../DynamicTable/TableBody";
import Accordion from "./Accordion";
import Modal from "../../component/Modal/Modal";
import AllDone from "./AllDone";


function Make() {

  //modal state
  const [status, setStatus] = useState(false);
  
  const {
    state: { actions, recipeName },
  } = useLocation();
  
  //   const completeRecipe = (e) => {
  //     e.preventDefault();
  //     API.createRecipe(recipe).then(() => {
  //       history.push("/complete"); //when done with this, we want to push to complete page
  //     });
  //   };

  return (
    <TestCard>
      <h1 className="display-2 font-brand-small mb-0">{recipeName}</h1>
      <p1>Timer??</p1>
      <hr className="divider-color" />
     
      {actions.map((obj) => {
        return <Accordion title={obj.title} text={obj.text} />;
      })}

      {/* HOW DO I GET MODAL TO OPEN WITHOUT CLICKING SOMETHING? */}
      <button onClick={()=> setStatus(true)} className="rb-btn btn-primary" >Next</button>  
      {status && (
        <Modal closeModal={() => setStatus(false)}>
          <AllDone></AllDone>
        </Modal>
      )} 

    </TestCard>
  );
}

export default Make;
