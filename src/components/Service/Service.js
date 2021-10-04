import React from 'react';
import { Card, Button } from 'react-bootstrap';

const Service = (props) => {
    // Destructuring data
    const {course_name, course_details, img, amount} = props.services
    return (
        // Services Section
        <div className="col-md-4">    
            <div>
                {/* Single service card */}
                <Card className="text-center m-3">
                    <Card.Img className="images" variant="top" src={img}/>
                    <Card.Body>
                        <Card.Title className="fw-bold">{course_name}</Card.Title>
                        <Card.Text>
                        <p>{course_details}</p>
                        <h5>Course Fee: {amount}</h5>
                        </Card.Text>
                        <Button variant="primary">Read more</Button>
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
};

export default Service;