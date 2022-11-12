import React from "react";
import { NavLink } from "react-router-dom";
import '../styles/NavBar.scss';
import logo from '../assets/logo.svg'

const Header = () => {
    return (
      <nav className="nav">
            <img src={logo}alt="Logo kasa"className="nav-logo"
            />
         <div className="nav-link">
             <NavLink to="/" className={({ isActive }) =>
            isActive ? "nav-link--active" : "nav-link--inactive"}> 
              Accueil
             </NavLink>
             <NavLink to="/about" className={({ isActive }) =>
            isActive ? "nav-link--active" : "nav-link--inactive"}>
              A propos
             </NavLink>
           </div>
         </nav>
    );
    }
export default Header;