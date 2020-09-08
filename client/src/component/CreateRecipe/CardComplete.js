import React, { useEffect, useState } from "react";
import TableBody from "../DynamicTable/TableBody"
import TableHeader from "../DynamicTable/TableHeader"
import TestCard from "../TestCard"

function CardComplete({ recipe }) {

    console.log(recipe);

    return (
        <>
            <h1 className="display-1 font-brand mb-0">{recipe.recipeName}</h1>
            <hr className="mt-1" />
            <p className="font-book text-center">{recipe.recipeDescription}</p>
            <h4 className="rb-btn">Ingredients</h4>
            <div className="table-responsive">
                <table className="table font-book">
                    <TableHeader />
                    <TableBody tableContents={recipe.ingredients} />
                </table>
            </div>
            <h4 className="rb-btn">Instructions</h4>
            <div className="table-responsive">
                <table className="table font-book">
                    <TableHeader />
                    <TableBody tableContents={recipe.actions} />
                </table>
            </div>
        </>
    )
}

export default CardComplete;