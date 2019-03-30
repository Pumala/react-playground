import React, { useSet } from 'react';
import { Link } from 'react-router-dom';

const LeftSideNav = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link 
                        to="/color-browser"
                    >Color Browser</Link>
                    <Link 
                        to="/cooking-timers"
                    >Cooking Timers</Link>
                </li>
            </ul>
        </nav>
    )
};

export default LeftSideNav;