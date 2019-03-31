import React from 'react';
import './Home.scss';

const Home = () => {

    const title = 'React Playground';

    const subTitle = 'A place where you can roam around and have fun exploring';

    return (
        <section className="home">
            <div className="content">
                <h1>{title}</h1>
                <p>{subTitle}</p>
            </div>
        </section>
    )
};

export default Home;