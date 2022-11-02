import { useState } from "react";
import React from "react";
import '../styles/Collapse.scss';


    
const Chevron_up = <i class="fa-solid fa-chevron-up"></i>
const Chevron_down = <i class="fa-solid fa-chevron-down"></i>

const Collapse = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    function toggle() {setIsOpen(!isOpen)};

    
    return (
        <div className="collapse">
            <div className="collapse_header" onClick={toggle}>
                <h3 className="collapse_title">{props.intitulé}</h3>
                <div className="collapse_icon">
                    {isOpen ? Chevron_up : Chevron_down}
                </div>
            </div>
            {isOpen && (
                <div className="collapse_body">
                    <p className="collaspe_text">{props.text}</p>
                </div>
            )}
        </div>
    )
}


export default Collapse;