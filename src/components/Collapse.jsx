import { useState } from "react";
import React from "react";
import '../styles/Collapse.scss';

// the chevron up, down icon
const Chevron_down = <i className="fa-solid fa-chevron-down"></i>
const Chevron_up = <i className="fa-solid fa-chevron-up"></i>

// the collapse component, the collapse is the props collapse, the collapse is the text that will be displayed in the collapse
function Collapse(props) {

    // useState to change the state of the collapse
    const [open, setOpen] = useState(false);

    // the collapse is open, the chevron up icon is displayed
  function toggle() {
    setOpen(!open);}

    return (
    <div className="collapse">

        {/* // oneClick to change the state of the collapse */}

        <div className="collapse_header"onClick={toggle}>

             {/* // props collapse is the text that will be displayed in the collapse */}
                <p>{props.intitulé}</p>

                {/* // if the collapse is open, the chevron up icon is displayed, else the chevron down icon is displayed */}
                <span>{open ? Chevron_down : Chevron_up}</span>
        </div> 

            {/* // open && props.children is the text that will be displayed in the collapse    */}
        {open && (
            <div className="collapse_content ">
                <p>{props.text}</p>
            </div>
        )}
    </div>

    )
}
export default Collapse;








