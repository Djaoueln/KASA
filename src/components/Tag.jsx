
import React from "react";
import "../styles/Tag.scss";


function Tag(props){
    return (
        // props.text is the text of the tag
        <span className="tag">
           {props.text}
        </span>
    )
}

export default Tag;
