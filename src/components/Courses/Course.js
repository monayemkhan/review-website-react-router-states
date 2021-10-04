import React from 'react';
import {Button, Card } from 'react-bootstrap';
import './Courses.css'

const Course = (props) => {
    // const {course_name, course_details, img} = props?.course
    return (
        <div className="col-md-6 mt-2">
            
            <div className="">
                <Card className="my-2 h-100">
                    <Card.Img className="images" variant="top" src={props?.course?.img} />
                    <Card.Body>
                        <Card.Title>{props?.course?.course_name}</Card.Title>
                        <Card.Text>
                        {props?.course?.course_details} <br />
                        <h5>Course Fee: {props?.course?.amount}</h5>
                        </Card.Text>
                        <Button variant="primary">Read more</Button>
                    </Card.Body>
                </Card>
            </div>
        </div>
        
    );
};

export default Course;