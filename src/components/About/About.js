import React from 'react';
import logo from '../../images/about.jpg';
const About = () => {
    return (
        <div className="about-section">
            <div className="container text-center bg-light">
                <h1 className="fw-bold">About Us</h1>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-6 p-5 my-3">
                        <h1>Our Mission</h1>
                        <p>The New School prepares students to understand, contribute to, and succeed in a rapidly changing society, thus making the world a better and more just place. We will ensure that our students develop both the skills that a sound education provides and the competencies essential for success and leadership in the emerging creative economy. We will also lead in generating practical and theoretical knowledge that enables people to better understand our world and improve conditions for local and global communities.</p>
                    </div>
                    <div className="col-6 p-5 my-3">
                        <h1>Our Vision</h1>
                        <p>We are and will be a university where design and social research drive approaches to studying issues of our time, such as democracy, urbanization, technological change, economic empowerment, sustainability, migration, and globalization. We will be the preeminent intellectual and creative center for effective engagement in a world that increasingly demands better-designed objects, communication, systems, and organizations to meet social needs.</p>
                    </div>
                </div>
            </div>
            <hr />
            <div className="container">
                <div className="row">
                    <div className="col-md-6 my-5">
                        <div className="ms-3">
                            <span className="text-primary">More About Our Company</span>
                            <h1 className="my-3">Want to know more</h1>
                            <p>There arge many variations ohf passages of sorem gpsum ilable, but the majority have suffered alteration in some form, by ected humour, or randomised words whi.</p>
                        </div>
                        <div className="ms-5 fw-bold">
                            <p># Creative ideas base</p>
                            <p># Assages of sorem gpsum ilable</p>
                            <p># Have suffered alteration in so</p>
                            <p># Randomised words whi</p>
                            <button className="btn btn-success p-2 mt-3">More About Us</button>
                        </div>
                    </div>
                    <div className="col-md-6 my-5">
                        <img className="img-fluid ms-5" src={logo} alt="" />
                    </div>
                </div>

            </div>
        </div>
    );
};

export default About;