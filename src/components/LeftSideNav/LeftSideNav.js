import React, { useSet } from 'react';
import { Link } from 'react-router-dom';
import './LeftSideNav.scss';

const LeftSideNav = ({toggleMenu}) => {

    console.log('toggling away...', toggleMenu);

    return (
        <nav 
            className={"left-sidebar" && toggleMenu ? "show" : "hide"}>
            <ul>
                <li>
                    <Link
                        to="/"
                    >Home</Link>
                </li>
                <li>
                    <Link 
                        to="/color-browser"
                    >Color Browser</Link>
                </li>
                <li>
                    <Link 
                        to="/cooking-timers"
                    >Cooking Timers</Link>
                </li>
            </ul>
        </nav>
    )
};

export default LeftSideNav;