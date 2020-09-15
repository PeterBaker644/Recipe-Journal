import React from "react";
import { Link, useLocation } from "react-router-dom";
import TableBody from "../DynamicTable/TableBody"
import TableHeader from "../DynamicTable/TableHeader"
import ExitBtn from "./ExitBtn";

function CardComplete({ recipe }) {

    const { pathname } = useLocation();

    return (
        <>
            {/* <h1 className="display-2 font-brand-small mb-0">{recipe.name}</h1> */}
            <div className="d-flex justify-content-between">
                <h2 className="display-2 font-brand-small">
                    {recipe.name}
                </h2>
                {pathname === "/create/complete" ? <Link className="d-flex btn-delete font-sans" to={{ pathname: "/recipebox" }}>
                    <ExitBtn/>
                </Link> : ""}
            </div>
            <hr className="divider-color"/>
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