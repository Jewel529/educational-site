import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Card, Col } from 'react-bootstrap';
import  './InstructorDetails.css'

const InstructorDetails = (props) => {
    const{name,role,desc,img}=(props.instructor)
    return (
        <div>
          <Col >
      <Card className="class-container mb-5"  >
        <Card.Img variant="top" src={img} className="card-style img-set" />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Title className="role-style h5">{role}</Card.Title>
          <Card.Text>
            {desc}
          </Card.Text>
          <div className=" text-center" >
          <button className="btn btn-success text-center"  >vist profile</button>
          </div>

        </Card.Body>
      </Card>
    </Col>
        </div>
    );
};

export default InstructorDetails;