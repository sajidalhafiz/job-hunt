import React from 'react';
import Banner from '../Banner/Banner';
import JobCategories from '../JobCategories/JobCategories';
import FeaturedJobs from '../FeaturedJobs/FeaturedJobs';

const Home = () => {
    return (
        <div>
            <Banner/>
            <JobCategories/>
            <FeaturedJobs/>
        </div>
    );
};

export default Home;