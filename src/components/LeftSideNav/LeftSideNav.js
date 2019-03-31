import React, { useSet } from 'react';
import { Link } from 'react-router-dom';
import './LeftSideNav.scss';

const LeftSideNav = () => {
    return (
        <nav className="left-sidebar">
            <ul>
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