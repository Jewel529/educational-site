import React from 'react';
import './ServiceDetails.css'

const ServiceDetails = (props) => {
    const { Course, Desc, img,Charge } = (props.serviceDetail)
    return (
        <div className="service-container">
            <img src={img} alt="" />
            <h5 className="mx-4" >{Course}</h5>
            <p className="mx-4" >{Desc}</p>
            <p className="fw-bold text-success mx-4">Course Fee:{Charge}</p>
            <button className="button-style">Enroll Now</button>

        </div>


    );
};

export default ServiceDetails;