import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import './HomeDetails.css'

const HomeDetails = (props) => {

    const { Course, Desc, img,Charge } = (props.details)

    //const [Course]=props.details
    //console.log(Course)
    return (
        <div  >




    <Col >
      <Card   className="mb-5 service-details"  >
        <Card.Img variant="top" src={img} className="card-style" />
        <Card.Body>
          <Card.Title>{Course}</Card.Title>
          <Card.Text>
            {Desc}
          </Card.Text>
          <p className="fw-bold text-success">Course Fee:{Charge}</p>
            <button className="button-style">Enroll Now</button>

        </Card.Body>


      </Card>

    </Col>


        </div>


    );
};

export default HomeDetails;