import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Row } from 'react-bootstrap';
import HomeDetails from '../HomeDetails/HomeDetails';
import HomeHead from '../HomeHead/HomeHead';
import Register from '../Register/Register';
import './Home.css'

const Home = () => {
    const [services, setservices] = useState([])

    useEffect(() => {
        fetch('Home.JSON')
            .then(res => res.json())
            .then(data => setservices(data))

    }, [])
    return (
        <div  className="home-container">
            <HomeHead></HomeHead>
            <h1 className="mx-5"><span className="course-text-style">Our Courses</span>
             The Best In The Town</h1>



            <div className="home-section">
                <div className="services-details">
                    <Row xs={1} md={2} className="g-4">
                        {

                            services.map(data => <HomeDetails

                            details={data}
                            key={Math.random()}

                            >

                            </HomeDetails>)
                        }
                    </Row>
                </div>
                <div>
                    <Register></Register>
                </div>
            </div>
        </div>
    );
};

export default Home;