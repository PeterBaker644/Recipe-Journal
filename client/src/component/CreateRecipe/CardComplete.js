import React from "react";
import { Link, useLocation } from "react-router-dom";
import TableControl from "../DynamicTable/TableControl"
import ExitBtn from "./ExitBtn";

function CardComplete({ recipe, flipCard }) {

    const { pathname } = useLocation();

    return (
        <>
            {/* <h1 className="display-2 font-brand display-3-small mb-0">{recipe.name}</h1> */}
            <header className="d-flex justify-content-between">
                <h2 className="display-3 font-brand">
                    {recipe.name}
                </h2>
                {pathname === "/create/complete" ? (
                    <Link className="d-flex btn-delete font-sans" to={{ pathname: "/recipebox" }}>
                        <ExitBtn />
                    </Link>
                ) : (
                        <div>
                            <button type="button" className="rb-btn-subtle font-book-italic mx-3 mt-2" onClick={() => flipCard()}>
                                History
                        </button>
                        </div>
                    )}
            </header>
            {/* =============== Option 1 =============== */}

            <span className="divider-color"></span>
            <img src={recipe.imageUrls[0]} className="rb-img img-fluid mb-3">
            </img>
            <section className="text-center">
                <span className="font-book">{recipe.description}</span>
            </section>
            <span className="text-smaller font-book-italic text-truncate divider m-2 mb-3">
                Tags: {recipe.tags.join(", ")}
            </span>

            {/* =============== Option 2 =============== */}
            {/* <span className="divider-color"></span>
            <section className="row">
                <div className="col d-flex flex-column">
                    <div>
                        <h3 className="rb-btn">description:</h3>
                        <p className="font-book">{recipe.description}</p>
                    </div>
                    <div>
                        <h3 className="rb-btn">tags:</h3>
                        <p className="font-book">{recipe.tags.join(", ")}</p>
                    </div>
                </div>
                <div className="col">
                    <img src={recipe.imageUrls[0]} className="img-fluid rb-img mb-3">
                    </img>
                </div>
            </section> */}

            <h4 className="rb-btn">Ingredients</h4>
            <TableControl ingredients={recipe.ingredients} header={true}></TableControl>
            <h4 className="rb-btn">Instructions</h4>
            <TableControl actions={recipe.actions}></TableControl>
        </>
    )
}

export default CardComplete;