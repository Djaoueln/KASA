import React from "react";
import { NavLink } from "react-router-dom";
import '../styles/Navigation.scss';
import logo from '../assets/logo.svg'

const Header = () => {
    return (
      // the nav bar, the logo is a link to the home page
      <nav className="nav">
            <img src={logo}alt="Logo kasa"className="nav-logo"
            />
         <div className="nav-link">
          {/*the link to the home page, the link is active when the url is /home, the link is inactive when the url is not /home */}
             <NavLink to="/home" className={({ isActive }) =>
            isActive ? "nav-link--active" : "nav-link--inactive"}> 
              Accueil
             </NavLink>
             {/*the link to the about page, the link is active when the url is /about, the link is inactive when the url is not /about */}
             <NavLink to="/about" className={({ isActive }) =>
            isActive ? "nav-link--active" : "nav-link--inactive"}>
              A propos
             </NavLink>
           </div>
         </nav>
    );
    }
export default Header;