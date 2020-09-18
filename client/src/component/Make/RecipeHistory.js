import React from "react";
import TableControl from "../DynamicTable/TableControl";
<<<<<<< HEAD

=======
>>>>>>> ad1a776fba9eb4d029e54e1b3e93ffcdb1c1e299

function RecipeHistory({ recipe, flipCard }) {

    return (
        <>
            <div className="d-flex justify-content-between">
                <h2 className="display-2 font-brand display-3-small">
                    {recipe.name}
                </h2>
                <div>
                    <button type="button" className="rb-btn-subtle font-book-italic mx-3 mt-2" onClick={() => flipCard()}>
                        Recipe
                    </button>
                </div>
            </div>
            <span className="divider-color"></span>
            <div >
                <h1 className="rb-btn">History</h1>
                <TableControl comments={recipe.comments} header={true}></TableControl>
            </div>
        </>
    );
}

export default RecipeHistory;
