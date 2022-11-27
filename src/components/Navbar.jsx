import React from "react";
import { NavLink } from "react-router-dom";
import "../css/navbar.css";
import estendoLogo from "../images/brand-logo.png";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container">
                <a className="navbar-brand" href="/">
                    <img src={estendoLogo} alt="Estendo-logo" loading="lazy"/>
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <NavLink className="nav-link" to="/">Home <span className="sr-only">(current)</span></NavLink>
                    <NavLink className="nav-link" to="/catalogue">Catalogue</NavLink>
                    <NavLink className="nav-link" to="/about">About us</NavLink>
                    <NavLink className="nav-link" to="/contact">Contact us</NavLink>
                    <NavLink className="nav-link" to="/blog">Blog</NavLink>
                </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;