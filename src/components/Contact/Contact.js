import { faHome, faPaperPlane, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Contact = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-7 my-5 p-3">
                    <h1 className=" border-bottom border-primary">Get in Touch</h1>
                    <div className="input-group contact-form mt-4">
                        <textarea className="form-control" placeholder="Massage" name="" id="" cols="60" rows="10"></textarea>
                    </div>
                    <div className="input-group contact-form mt-4">
                        <input className="form-control ml-3" placeholder="First Name" type="text" />
                        <input className="form-control ms-3" placeholder="Last Name" type="text" />
                    </div>
                    <div className="input-group contact-form mt-4">
                        <input className="form-control ml-3" placeholder="Email Address" type="text" />
                    </div>
                    <div className="input-group contact-form mt-4">
                        <button className="btn btn-outline-primary"> Send Us</button>
                    </div>
                </div>
                <div className="col-md-5 my-5 p-3">
                    <h1 className=" border-bottom border-primary">Address</h1>
                    <div className="address mt-4">
                        <h5><FontAwesomeIcon className="icon fs-5 mx-2 fw-bold text-secondary" icon={faHome} />Khilkhet Dhaka</h5>
                        <p>Bangladesh</p>
                    </div>
                    <div className="address">
                        <h5><FontAwesomeIcon className="icon fs-5 mx-2 fw-bold text-secondary" icon={faPhone} />+880 1234 567890</h5>
                        <p>9:00 am to 6:00 pm</p>
                    </div>
                    <div className="address">
                        <h5><FontAwesomeIcon className="icon fs-5 mx-2 fw-bold text-secondary" icon={faPaperPlane} />monayemkhanent@gmail.com</h5>
                        <p>Send us your query anytime!</p>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Contact;