import React from "react";
import logo from "../assets/logo.svg";
import "../styles/Footer.scss";

const Footer = () => {
    return (
        <footer className="footer">
        <img src={logo} alt="logo" />
        <p>© 2020 Kasa. All rights reserved</p>
        </footer>
    );
    };

export default Footer;

