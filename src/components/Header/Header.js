import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';
import logo from '../../images/logo.jpg';
import { FormControl, InputGroup  } from 'react-bootstrap';

const Header = () => {
    return (
        <div className="NavBar-container">
            <div className="container">
                <div className="row">
                    <div className="d-flex">
                        <div className="logo-img">
                            <img className="img-fluid " src={logo} alt="" />
                        </div>
                        <div className="menu-container navbar navbar-expand-lg ">
                            <ul className="navbar-nav">
                                <li className="nav-link">
                                    <NavLink to="/home" className="nav-item">Home</NavLink>
                                </li>
                                <li className="nav-link">
                                    <NavLink to="/services" className="nav-item">Services</NavLink>
                                </li>
                                <li className="nav-link">
                                    <NavLink to="/about" className="nav-item">About</NavLink>
                                </li>
                                <li className="nav-link">
                                    <NavLink to="/contact" className="nav-item">Contact</NavLink>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <InputGroup className="mb-3">
                                <FormControl
                                placeholder="Recipient's username"
                                aria-label="Recipient's username"
                                aria-describedby="basic-addon2"
                                />
                                <InputGroup.Text id="basic-addon2">search</InputGroup.Text>
                            </InputGroup>
                        </div>
                    </div>  
                </div>
            </div>
        </div>
    );
};

export default Header;