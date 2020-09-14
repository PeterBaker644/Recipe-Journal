import React, { useState } from "react";

function Accordion(props) {
  
    const [isOpen, setIsOpen] =useState(false)

  return (
    <>
    {console.log(props)}
      <div className="accordian">
        <div onClick={() => setIsOpen(!isOpen)} className="accordian-header">

          {/* DO WE NEED THESE CHECKBOXES? CAN WE CREATE NEW COMPONENTS FOR THEM? */}
          <input
            type="checkbox"
            class="custom-control-input"
            id="defaultUnchecked"
          /> {"   "}
          <label className="accordion-header font-book">{props.title}</label>
          <div className="accordion-indicator"></div>
        </div>
      </div>
      {isOpen && (
        <div className="accordion-body  table-responsive">
          <h5 className="font-book">{props.text}</h5>
        </div>
      )}
    </>
  );
}

export default Accordion;
