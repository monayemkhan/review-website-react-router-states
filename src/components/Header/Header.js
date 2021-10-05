import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';
import logo from '../../images/logo.jpg';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

const Header = () => {
    return (
        // Header Section
        <div className="header bg-light">
            <div className="container">
                <div className="row">
                    <div className="navbar navbar navbar-expand-lg navbar-light">
                            {/* Site logo */}
                        <div className="container-fluid">
                            <div className="text-center navbar-brand">
                                <img className="img-fluid" src={logo} alt="" />
                            </div>
                                {/* Navigation Section */}
                                <nav className="navbar">
                                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                        <span className="navbar-toggler-icon"></span>
                                    </button>
                                    <div className="collapse navbar-collapse" id="navbarNav">
                                        <ul className="navbar-nav text-center">
                                            <li className="nav-item p-2">
                                                <NavLink activeClassName="text-primary" className="nav-link fs-4" to="/home">Home</NavLink>
                                            </li>
                                            <li className="nav-item p-2">
                                                <NavLink activeClassName="text-primary" className="nav-link fs-4" to="/services">Services</NavLink>
                                            </li>
                                            <li className="nav-item p-2">
                                                <NavLink activeClassName="text-primary" className="nav-link fs-4" to="/about">About</NavLink>
                                            </li>
                                            <li className="nav-item p-2">
                                                <NavLink activeClassName="text-primary" className="nav-link fs-4" to="/contact">Contact</NavLink>
                                            </li>
                                        </ul>
                                    </div>
                                </nav>
                            
                            {/* Search Section */}
                            <div className="search-menu d-flex pe-md-4">
                                <input className="form-control me-1" type="search" placeholder="Course Name" aria-label="Search"/>
                                <button className="btn btn-outline-info" type="submit">Search</button>
                            </div>
                            </div>
                    </div>
                </div>
            
            </div>
        </div>
    );
};

export default Header;