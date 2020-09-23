import React, { useState, useEffect, useRef } from "react";

export default function IconComponent(props) {
    let imgsrc = `../../icons/${props.iconname}.svg`;
    return (
        <button className="rb-icon mr-2 d-flex align-items-center" name={props.iconname} onClick={props.onClick}>
            <img src={imgsrc} width="32" height="32" onError={(e) => { e.target.onerror = null; e.target.src = "../../icons/lettuce.svg" }}></img>
            <span className="ml-1">{props.iconname}</span>
        </button>
    )
};