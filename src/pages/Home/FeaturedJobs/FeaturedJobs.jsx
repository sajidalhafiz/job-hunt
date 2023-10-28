import React, { useEffect, useState } from 'react';
import SectionTitle from '../SectionTitle/SectionTitle';
import Job from '../Job/Job';
import { useLoaderData } from 'react-router-dom';

const FeaturedJobs = () => {

    const [isShow, setIsShow] = useState(true);

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
                    jobs.slice(0, isShow ? 4 : jobs.length).map(job => <Job
                        key={job.id}
                        job={job}
                    ></Job>)
                }
            </div>
            {isShow && <div className='text-center my-10 lg:my-20'><button onClick={() => setIsShow(false)} className="btn normal-case btn-gradient active:scale-95 border-none text-xs lg:text-lg">See All Jobs</button></div>}
        </div>
    );
};

export default FeaturedJobs;