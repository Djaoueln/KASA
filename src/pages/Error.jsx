import React from "react";
import '../styles/Error.scss';
import { Link } from 'react-router-dom';


function Error () {
    return (
        <div className="error">
           <div className="error_content">
                <h1 className="error_title">404</h1>
                <p className="error_txt">
                     OUPS! La page que vous demandez n'existe pas.
                </p> 
           </div> 
                {/* the link to the home page  */}
                 <Link to="/" className="error_link">
                    Retourner sur la page d'accueil
                 </Link>
            </div>      
      );
    }

export default Error;