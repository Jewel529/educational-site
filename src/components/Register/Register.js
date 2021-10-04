import React from 'react';
import { Row } from 'react-bootstrap';
import './Register.css'

const Register = () => {
    return (
        <div >
            <div className="register-form ">
                <h2 className="text-dark text-center">Register Now</h2>
                <div className="flex-container">
                    <input type="text" placeholder="Name" />
                    <input type="text" placeholder="SurName" />
                </div>

                <div className="flex-container">
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Password" />
                </div>
                <button className="button-style">Submit</button>

            </div>


        </div>
    );
};

export default Register;