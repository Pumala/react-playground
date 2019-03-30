import React from 'react';
import './Home.css';

const Home = () => {

    const title = 'React Playground';

    const subTitle = 'A place where you can roam around and have fun';

    return (
        <section>
            <h2>{title}</h2>
            <h4>{subTitle}</h4>
        </section>
    )
};

export default Home;