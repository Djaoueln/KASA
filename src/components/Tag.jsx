
import React from "react";
import "../styles/Tag.scss";


function Tag(props){
    return (
        <span className="tag">
           {props.text}
        </span>
    )
}

export default Tag;
