import React from "react";
import '../styles/Error.scss';


function Error () {
    return (
        <div>
            <div className="error">
            <div className="error_404">
                <h1 className="error_title">404</h1>
            <p className="error_txt_1">OUPS! La page que vous demandez n'existe pas.</p>  
            <p className="error_txt_2">Retourner sur la page d'accueil</p>  
            </div>      
    </div>
    </div>
      );
    }

export default Error;