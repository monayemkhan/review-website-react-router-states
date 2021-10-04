import React, { useEffect, useState } from 'react';
import Course from '../Courses/Course';
import img from '../../images/banner.png';
import './Home.css'

const Home = () => {
    const [courses, setCourse] = useState([]);
    useEffect(()=>{
        fetch('./courseData.JSON')
        .then(res => res.json())
        .then(data => setCourse(data))
    },[])
    return (
        
        <div className="container-fluid border-top">
            <div className="row justify-content-evenly align-items-center banner">
                <div className="col-md-6 ps-5">
                    <h3 className="text-primary fs-4 my-4">Popular Online Courses</h3>
                    <h1 className="text-dark my-5">The New Way To Learn <br /> Properly in With Us!</h1>
                    <button className="btn btn-primary btn-lg px-5 fs-4">Get Started</button>
                </div>
                <div className="col-md-6">
                    <img src={img} alt="" />
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="section-title text-center my-5">
                        <p className="text-primary mt-5  fs-5">Popular Online Courses</p>
                        <h1>Lets Brows All Category</h1>
                    </div>
                    {
                        courses.map(course => <Course
                            key={course.key}
                            course={course}
                        ></Course>)
                    }
                </div>
            </div>
            
            

        </div>
    );
};

export default Home;