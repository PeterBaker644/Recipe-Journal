import React, { useState } from "react";
import { Link } from "react-router-dom";
import ls from "local-storage";
import TestCard from "../../component/TestCard";
import TableControl from "../../component/DynamicTable/TableControl";
import Accordion from "../../component/Make/Accordion";
import Modal from "../../component/Modal/Modal";
import AllDone from "../../component/Make/AllDone";
import ExitBtn from "../../component/CreateRecipe/ExitBtn"

function Make() {

    const [modal, setModal] = useState(false);
    const recipe = ls.get("recipe")

    return (
        <TestCard>
            <header className="d-flex justify-content-between">
                <h2 className="display-2 font-brand display-3-small">
                    {recipe.name}
                </h2>
                <Link className="d-flex btn-delete font-sans" to={{ pathname: "/recipebox" }}>
                    <ExitBtn />
                </Link>
            </header>
            <span className="divider-color"></span>
            <section className="text-center">
                <span className="font-book">{recipe.description}</span>
            </section>
            <span className="text-smaller font-book-italic text-truncate divider m-2 mb-3">
                Tags: {recipe.tags.join(", ")}
            </span>

            <Accordion title={"Ingredients"}>
                <TableControl ingredients={recipe.ingredients} header={true}></TableControl>
            </Accordion>
            {recipe.actions.map((obj) => {
                return <Accordion key={obj.title} title={obj.title} text={obj.text} check={true} timer={obj.timer}/>;
            })}

            <div className="d-flex justify-content-between pt-2">
                <Link
                    to={{ pathname: "/recipebox" }}
                    className="d-flex rb-btn btn-info"
                >Return</Link>
                <button onClick={() => setModal(true)} className="rb-btn btn-info" >Complete</button>
            </div>
            {modal && (
                <Modal noClose={true} closeModal={() => setModal(false)}>
                    <AllDone />
                </Modal>
            )}
        </TestCard>
    );
}

export default Make;
