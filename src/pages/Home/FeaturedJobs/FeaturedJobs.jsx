import React, { useEffect, useState } from 'react';
import SectionTitle from '../SectionTitle/SectionTitle';
import Job from '../Job/Job';

const FeaturedJobs = () => {

    const [jobs, setJobs] = useState([]);
    useEffect(() => {
        fetch('jobs.json')
            .then(res => res.json())
            .then(data => setJobs(data));
    }, []);

    return (
        <div className='w-full lg:w-9/12 mx-auto px-4 lg:px-0 pb-24'>
            <SectionTitle
                title='Featured Jobs'
                subTitle='Explore thousands of job opportunities with all the information you need. Its your future'>
            </SectionTitle>
            <div className='grid grid-cols-1 lg:grid-cols-2'>
                {
                    jobs.slice(0, 4).map(job => <Job
                        key={job.id}
                        job={job}
                    ></Job>)
                }
            </div>
        </div>
    );
};

export default FeaturedJobs;