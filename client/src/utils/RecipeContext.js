import React from "react";

const RecipeContext = React.createContext({
  title: "",
  ingredients: "",
  instructions: ""
});

export default RecipeContext;