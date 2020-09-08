import React from "react";
import RecipeCard from "../../component/RecipeBox/RecipeCard";
import AddRecipe from "../../component/RecipeBox/AddRecipe";


function RecipeBox() {

    return (
      <div className="container">
        <h1>My Recipe Box</h1>
        <section className="row">
            <div className="col-sm-6 col-md-4 col-lg-3">
                <AddRecipe />
            </div>
            <div className="col-sm-6 col-md-4 col-lg-3">
                {/* Cards should fill page based on number of recipes users have */}
                <RecipeCard />
            </div>
        </section>

      </div>
    );
}
  
export default RecipeBox;