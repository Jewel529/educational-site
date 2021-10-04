import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Row } from 'react-bootstrap';
import InstructorDetails from '../InstructorDetails/InstructorDetails';
import './Instructor.css'

const Instructor = () => {

    const[instructors,setInstructors]=useState([])
    useEffect(()=>{

        fetch('Instructor.JSON')
        .then(res=>res.json())
        .then(data=>setInstructors(data))
    },[])
    return (
        <div>


            <h1 className="text-center">Our Teacher</h1>
            <div>
            <Row xs={1} md={3} className="g-4">
                {
                    instructors?.map(data=>
                    <InstructorDetails
                     instructor={data}
                     key={Math.random()}
                    >

                    </InstructorDetails>)
                }
                </Row>
            </div>
        </div>
    );
};

export default Instructor;