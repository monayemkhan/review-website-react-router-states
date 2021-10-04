import React, { useEffect, useState } from 'react';
import Course from '../Courses/Course';


const Home = () => {
    const [courses, setCourse] = useState([]);
    useEffect(()=>{
        fetch('./courseData.JSON')
        .then(res => res.json())
        .then(data => setCourse(data))
    },[])
    return (
        <div className="container">
            <div className="row">
            <div className="section-title text-center">
                <span>Popular Online Courses</span>
                <h2>Lets Brows All Category</h2>
            </div>
                {
                    courses.map(course => <Course
                        key={course.key}
                        course={course}
                    ></Course>)
                }
            </div>
            

        </div>
    );
};

export default Home;