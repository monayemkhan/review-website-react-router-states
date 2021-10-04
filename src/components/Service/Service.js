import React from 'react';
import { Card, Button } from 'react-bootstrap';

const Service = (props) => {
    const {course_name, course_details, img, amount} = props.services
    return (
        <div className="col-md-4 mt-2">    
            <div className="">
                <Card className="my-2 h-100">
                    <Card.Img className="images" variant="top" src={img} />
                    <Card.Body>
                        <Card.Title>{course_name}</Card.Title>
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