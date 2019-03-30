import React from 'react';
import './Home.css';

const Home = () => {

    const title = 'React Playground';

    const subTitle = 'A place where you can roam around and have fun exploring';

    return (
        <section className="home">
            <div className="content">
                <h2>{title}</h2>
                <p>{subTitle}</p>
            </div>
        </section>
    )
};

export default Home;