import React from "react";
import TableBody from "../DynamicTable/TableBody"
import TableHeader from "../DynamicTable/TableHeader"

function CardComplete({ recipe }) {

    return (
        <>
            <h1 className="display-2 font-brand-small mb-0">{recipe.name}</h1>
            <hr className="divider-color" />
            <span className="font-book text-center">{recipe.description}</span>
            <span className="text-smaller font-book-italic text-truncate divider m-2 mb-3">
                Tags: {recipe.tags.join(", ")}
            </span>
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