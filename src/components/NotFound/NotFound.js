import React from 'react';
import './NotFound.scss';
import { Link } from 'react-router-dom';

const NotFound = () => {

    const title = '404';

    const subTitle = 'File Not Found. Try going ';

    return (
        <section className="not-found">
            <div className="content">
                <h1>{title}</h1>
                <p>{subTitle} <Link to="/">Home</Link></p>
            </div>
        </section>
    )
};

export default NotFound;