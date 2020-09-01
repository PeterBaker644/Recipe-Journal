import axios from "axios";

// The getRecipes method retrieves recipes from the server
export default {
  getRecipes: function() {
    return axios.get("/api/recipes");
  },
  getIngredients: function() {
    return axios.get("/api/Ingredients");
  }
};
