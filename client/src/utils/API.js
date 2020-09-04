import axios from "axios";

// The getRecipes method retrieves recipes from the server
export default {
  // getRecipes: function() {
  //   return axios.get("/api/recipes");
  // },
  // getIngredients: function() {
  //   return axios.get("/api/Ingredients");
  // }


  getAllrecipes: function () {
    return axios.get("/api/recipes");
  },
  // Gets the recipe with the given id


  // //TODO Fix this
  // getAllRecipesByUser: function (id) {
  //   return axios.get("/api/recipes/" + id);
  // },
  // // Gets the recipe with the given id
  // getOneRecipe: function (id) {
  //   return axios.get("/api/recipes/" + id);
  // },
  // // Deletes the recipe with the given id
  // deleteBook: function (id) {
  //   return axios.delete("/api/recipes/" + id);
  // },
  // // Saves a recipe to the database
  // saveBook: function (recipesData) {
  //   return axios.post("/api/recipes", recipesData);
  // }

  getAllingredients: function () {
    return axios.get("/api/ingredients");
  },

};
