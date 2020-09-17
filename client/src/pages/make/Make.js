import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import TableHeader from "../../component/DynamicTable/TableHeader"
import ls from "local-storage";
import TestCard from "../../component/TestCard";
import TableBody from "../../component/DynamicTable/TableBody";
import Accordion from "../../component/Make/Accordion";
import AccordionTest from "../../component/Make/AccordionTest";
import Modal from "../../component/Modal/Modal";
import AllDone from "../../component/Make/AllDone";
import Countdown from "../../component/Make/Countdown";
import ExitBtn from "../../component/CreateRecipe/ExitBtn"

function Make() {

    const [modal, setModal] = useState(false);
    const [timer, setTimer] = useState(false);
    const recipe = ls.get("recipe")

    // const {
    //     state: { actions, name },
    // } = useLocation();

    // useEffect(() => {
    //     return () => {
    //         console.log("This needs to save the things.");
    //     }
    // }, [])

    return (
        <TestCard>
            <header className="d-flex justify-content-between">
                <h2 className="display-2 font-brand-small">
                    {recipe.name}
                </h2>
                <Link className="d-flex btn-delete font-sans" to={{ pathname: "/recipebox" }}>
                    <ExitBtn />
                </Link>
            </header>
            {/* <button onClick={() => setTimer(true)} className="rb-btn btn-primary" >Timer</button>
            {timer && (
                <Modal closeModal={() => setTimer(false)}>
                    <Countdown></Countdown>
                </Modal>
            )} */}
            <span className="divider-color"></span>
            <section className="text-center">
                <span className="font-book">{recipe.description}</span>
            </section>
            <span className="text-smaller font-book-italic text-truncate divider m-2 mb-3">
                Tags: {recipe.tags.join(", ")}
            </span>

            {/* <AccordionTest/> */}

            <Accordion title={"Ingredients"}>
                <div className="table-responsive">
                    <table className="table font-book">
                        <TableHeader contents={recipe.ingredients} />
                        <TableBody tableContents={recipe.ingredients} />
                    </table>
                </div>
            </Accordion>
            {recipe.actions.map((obj) => {
                return <Accordion key={obj.title} title={obj.title} text={obj.text} check={true} timer={obj.timer}/>;
            })}

            
            <div className="d-flex justify-content-between mt-3">
                <Link
                    to={{ pathname: "/recipebox" }}
                    className="d-flex rb-btn btn-primary"
                >Return</Link>
                <button onClick={() => setModal(true)} className="rb-btn btn-success" >Complete</button>
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
