import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';


const Footer = () => {
    return (
        <div className="container-fluid bg-dark ">
            <div className="row py-5">
                <div className="col-md-5 ms-5 ">
                    <h1 className="text-light">Stay Updated</h1>
                    <div className="input-group mb-3 mt-5 border-0">
                        <input type="text" className="form-control" placeholder="Email Address" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                        <button className="btn btn-primary input-group-text" id="basic-addon2">Subscribe Now</button>
                    </div>
                </div>
                <div className="col-md-5 ms-5 text-center">
                <h1 className="text-light mb-5">Let’s Get Social</h1>
                    <a href=""><FontAwesomeIcon className="icon fs-1 fw-bold me-5 text-primary" icon={faFacebook} /></a>
                    <a href=""><FontAwesomeIcon className="icon fs-1 fw-bold me-5 text-danger" icon={faInstagram} /></a>
                    <a href=""><FontAwesomeIcon className="icon fs-1 fw-bold text-primary" icon={faTwitter} /></a>
                </div>
            </div>
            <div className="row">
                <div className="container border-top text-center py-4">
                    <p className="text-light">Copyright &copy; 2021 All rights reserved | This template is made by  Monayem Khan</p>
                </div>
            </div>
            
        </div>
    );
};

export default Footer;