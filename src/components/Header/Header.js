import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'
import img from '../../images/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandshake } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    const activeStyle = {
        fontWeight: "bolder",
        color: "red",

    }
    const FontIcon = <FontAwesomeIcon icon={faHandshake} transform={{ rotate: 42 }} spin  ></FontAwesomeIcon>
    return (
        <div className="nav-container">

            <nav className="nav-bar">



                <div>
                    <img className="logo" src={img} alt="" />
                </div>

                <div className="flex-container">
                    <li>
                        <NavLink
                            className="Nav_link" activeStyle={activeStyle} exact to="/home">
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            className="Nav_link" activeStyle={activeStyle} exact to="/about">
                            AboutUs
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            className="Nav_link" activeStyle={activeStyle} exact to="/services">
                            Services
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            className="Nav_link" activeStyle={activeStyle} exact to="/instructors">
                            Instructors
                        </NavLink>
                    </li>
                    <li  >
                        <NavLink

                            className=
                            "Nav_link" activeStyle={activeStyle} exact to="/join"

                        >
                            JoinTeam {FontIcon}
                        </NavLink>
                    </li>

                </div>


            </nav>

        </div>
    );
};

export default Header;