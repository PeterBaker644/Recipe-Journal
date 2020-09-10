import React, { useState } from "react";

function Accordion(props) {
  
    const [isOpen, setIsOpen] =useState(false)

  return (
    <>
    {console.log(props)}
      <div className="accordian">
        <div onClick={() => setIsOpen(!isOpen)} className="accordian-header">

          {/* DO WE NEED THESE CHECKBOXES? CAN WE CREATE NEW COMPONENTS FOR THEM? */}
          {/* <input
            type="checkbox"
            class="custom-control-input"
            id="defaultUnchecked"
          /> */}
          <h2>{props.title}</h2>
          <div className="accordion-indicator"></div>
        </div>
      </div>
      {isOpen && (
        <div className="accordion-body">
          <h5>{props.text}</h5>
        </div>
      )}
    </>
  );
}

export default Accordion;
