import React from 'react';
import {Button, Card } from 'react-bootstrap';
import './Courses.css'

const Course = (props) => {
    // const {course_name, course_details, img} = props.course
    return (
        <div className="col-md-6 mt-2">
            {/* Single home Service Section */}
            <div>
                <Card className="m-3 h-100 text-center">
                    <Card.Img className="img-fluid images" variant="top" src={props?.course?.img} />
                    <Card.Body>
                        <Card.Title className="fw-bold">{props?.course?.course_name}</Card.Title>
                        <Card.Text>
                        <p>{props?.course?.course_details}</p>
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