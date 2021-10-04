import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';
import logo from '../../images/logo.jpg';

const Header = () => {
    return (
        <div className="container">
            <div className="row">
                <div className=" py-3">
                    <div className="navbar navbar navbar-expand-lg navbar-light">
                        <div className="col-md-3 col-sm-3 navbar-brand">
                            <img className="img-fluid" src={logo} alt="" />
                        </div>
                        <div className="main-menu col-md-6 col-sm-6">
                            <nav className="container-fluid">
                                <ul className="navbar-nav ">
                                    <li className="nav-item p-2">
                                        <NavLink className="nav-link fs-4" to="/home">Home</NavLink>
                                    </li>
                                    <li className="nav-item p-2">
                                        <NavLink className="nav-link fs-4" to="/services">Services</NavLink>
                                    </li>
                                    <li className="nav-item p-2">
                                        <NavLink className="nav-link fs-4" to="/about">About</NavLink>
                                    </li>
                                    <li className="nav-item p-2">
                                        <NavLink className="nav-link fs-4" to="/contact">Contact</NavLink>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                        <div className="search-menu col-md-3 col-12 d-flex pe-4">
                        <input class="form-control me-1" type="search" placeholder="Search" aria-label="Search"/>
                        <button class="btn btn-outline-info" type="submit">Search</button>
                        </div>
                    </div>
                    
                </div>
            </div>
            
        </div>
    );
};

export default Header;