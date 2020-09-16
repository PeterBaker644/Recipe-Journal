import React, { useState } from "react";

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
            <div className="accordian">
                <div onClick={isLocked ? ()=>('') : () => setIsOpen(!isOpen)} className="accordian-header">
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
                    <div className="accordion-indicator"></div>
                </div>
            </div>
            {isOpen && (
                <div className="">
                    {props.text ? <li className="font-book my-4">{props.text}</li> : ""}
                    {props.children}
                </div>
            )}
        </>
    );
}

export default Accordion;
