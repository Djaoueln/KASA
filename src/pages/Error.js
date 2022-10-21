import React from "react";
import Header from "../components/Header";
import '../styles/Error.css';


function Error () {
    return (
        <div>
            <Header/>
            <div className="error">
            <div className="error-404">
                <h1 className="error__title">404</h1>
             </div>
            <h1 className="error-txt-1">OUPS! La page que vous demandez n'existe pas.</h1>  
            <h1 className="error-txt-2">Retourner sur la page d'accueil</h1>        
    </div>
    </div>
      );
    }

export default Error;