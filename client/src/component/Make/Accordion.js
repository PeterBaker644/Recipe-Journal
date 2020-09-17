import React, { useState } from "react";
import Timer from "react-compound-timer";
import FontAwesome from 'react-fontawesome';
import Collapse from "react-bootstrap/Collapse";

function Accordion(props) {

    const [isOpen, setIsOpen] = useState(false);
    const [isLocked, setIsLocked] = useState(false);
    const [color, setColor] = useState("");

    const stopClick = (e) => {
        e.stopPropagation();
        setIsOpen(false);
        setIsLocked(!isLocked);
    }

    const playIcon = () => (
        <FontAwesome
        // Any close icon can be used
        name="play"
        style={{
            cursor: 'pointer',
            backgroundColor: 'transparent',
            border: 0,
        }}
        />
    );

    const pauseIcon = () => (
        <FontAwesome
        // Any close icon can be used
        name="pause"
        style={{
            cursor: 'pointer',
            backgroundColor: 'transparent',
            border: 0,
        }}
        />
    );

    const resetIcon = () => (
        <FontAwesome
        // Any close icon can be used
        name="redo-alt"
        style={{
            cursor: 'pointer',
            backgroundColor: 'transparent',
            border: 0,
        }}
        />
    );

    const updateColor = (value) => {
        setColor(value);
        console.log(color);
    }

    const noProp = (e, start) => {
        e.stopPropagation();
        start();
    }

    {console.log(props)};
    {console.log(props.text)};
    {console.log(props.timer)};
  
 


    return (
        <>
            <div className="accordion">
                <div onClick={isLocked ? ()=>('') : () => setIsOpen(!isOpen)} aria-expanded={isOpen} aria-controls="collapse" className="accordion-header">
                    {/* DO WE NEED THESE CHECKBOXES? CAN WE CREATE NEW COMPONENTS FOR THEM? */}
                    <h4 className="rb-btn d-flex justify-content-between align-items-center">
                        <div>
                            {props.check ? <input
                                type="checkbox"
                                className="custom-control-input mr-3"
                                id="defaultUnchecked"
                                onClick={stopClick}
                            /> : null}
                            {props.title}
                        </div>
                        {props.timer ?
                            <Timer 
                                initialTime={props.timer*100} 
                                startImmediately={false} 
                                direction="backward"
                                checkpoints={[
                                    {time: 0, callback: () => updateColor("red")}
                                ]}
                            >
                                {({ start, pause, reset }) => (
                                    <div className="d-flex align-items-center">
                                        <div className="mx-2">
                                            <Timer.Hours formatValue={value => `${value.toString().padStart(2, '0')}:`} />
                                            <Timer.Minutes formatValue={value => `${value.toString().padStart(2, '0')}:`} />
                                            <Timer.Seconds formatValue={value => `${value.toString().padStart(2, '0')}`} />
                                        </div>
                                        <div className="btn-group btn-group-sm" role="group" aria-label="Timer Buttons">
                                            <button className="btn btn-outline-secondary" onClick={start}>{playIcon()}</button>
                                            <button className="btn btn-outline-secondary" onClick={pause}>{pauseIcon()}</button>
                                            <button className="btn btn-outline-secondary" onClick={reset}>{resetIcon()}</button>
                                        </div>
                                    </div>
                                )}
                            </Timer>
                            : null}
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
