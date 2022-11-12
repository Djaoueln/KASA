import { useState } from "react";
import React from "react";
import '../styles/Collapse.scss';

const Chevron_down = <i className="fa-solid fa-chevron-down"></i>
 const Chevron_up = <i className="fa-solid fa-chevron-up"></i>

function Collapse(props) {
    const [open, setOpen] = useState(false);
    
  function toggle() {
    setOpen(!open);
    }

    return (
    <div className="collapse">
        <div className="collapse_header"onClick={toggle}>
                <p>{props.intitulé}</p>
                <span>{open ? Chevron_down : Chevron_up}</span>
            </div>    
        {open && (
            <div className="collapse_content ">
             {props.text} 
            </div>
        )}
    </div>

    )
}
export default Collapse;








