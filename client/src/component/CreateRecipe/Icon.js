
import React, { useState, useEffect, useRef } from "react";



export default function IconComponent(props) {
    let imgsrc = `../../icons/${props.iconname}.svg`;
    return (

        <img src={imgsrc} width="64" height="64" onError={(e) => { e.target.onerror = null; e.target.src = "../../icons/lettuce.svg" }} />

    )
};