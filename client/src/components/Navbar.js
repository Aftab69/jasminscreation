import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import { NavLink } from 'react-router-dom';
import logo from "../images/logo.png";

const Navbar = () => {
    return (
        <>
                        <nav className ="navbar navbar-expand-lg navbar-light bg-white">
            <div className ="container-fluid">
                <NavLink className ="navbar-brand" to="/"><img className="logo_size" src={logo} alt="Logo" /></NavLink>
                <button className ="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className ="navbar-toggler-icon"></span>
                </button>
                <div className ="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className ="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li className ="nav-item">
                    <NavLink className ="nav-link active" aria-current="page" to="/">Home</NavLink>
                    </li>
                    <li className ="nav-item">
                    <NavLink className ="nav-link" to="/store">Store</NavLink>
                    </li>
                    <li className ="nav-item">
                    <NavLink className ="nav-link" to="/upload">Upload</NavLink>
                    </li>
                    <li className ="nav-item">
                    <NavLink className ="nav-link" to="/cart">Cart</NavLink>
                    </li>
                    <li className ="nav-item">
                    <NavLink className ="nav-link" to="/signin">Login</NavLink>
                    </li>
                    <li className ="nav-item">
                    <NavLink className ="nav-link" to="/signup">Register</NavLink>
                    </li>
                </ul>
                </div>
            </div>
            </nav>
        </>
    )
}

export default Navbar;