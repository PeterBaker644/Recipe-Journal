import React, { useState } from "react";
import Collapse from "react-bootstrap/Collapse";

function Accordion(props) {

    const [isOpen, setIsOpen] = useState(false);
    const [isLocked, setIsLocked] = useState(false);

    const stopClick = (e) => {
        e.stopPropagation();
        setIsOpen(false);
        setIsLocked(!isLocked);
    }

    return (
        <>
            <div className="accordion">
                <div onClick={isLocked ? ()=>('') : () => setIsOpen(!isOpen)} aria-expanded={isOpen} aria-controls="collapse" className="accordion-header">
                    {/* DO WE NEED THESE CHECKBOXES? CAN WE CREATE NEW COMPONENTS FOR THEM? */}
                    <h4 className="rb-btn d-flex align-items-center">
                        { props.check ? <input
                            type="checkbox"
                            className="custom-control-input mr-3"
                            id="defaultUnchecked"
                            onClick={stopClick}
                        /> : ""}
                        {props.title}
                    </h4>
                </div>
                <Collapse in={isOpen}>
                    <div id="collapse">
                        {props.text ? <li className="font-book my-4">{props.text}</li> : ""}
                        {props.children}
                    </div>
                </Collapse>
            </div>
        </>
    );
}

export default Accordion;
