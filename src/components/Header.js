import React from "react";
import { NavLink } from "react-router-dom";
import '../styles/Header.css';
import logo from "../assets/logo.svg"



function Header() {
    return (
      <div className="header">
        <div className="header__logo">
            <img
              src={logo}
              alt="kasa"
              className="header__logo__img"
            />
        </div>
         <div className="nav">
           <div className="nav-accueil">
             <NavLink to="/">
              Accueil
             </NavLink>
           </div>
           <div className="nav-about">
             <NavLink to="/about">
              A propos
             </NavLink>
           </div>
         </div>

      </div>
    );
    }
export default Header;