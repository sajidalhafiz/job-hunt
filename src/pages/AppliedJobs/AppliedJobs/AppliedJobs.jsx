import React, { useEffect, useState } from 'react';
import PageTitle from '../../Shared/PageTitle/PageTitle';
import MyJob from '../MyJob/MyJob';
import { getJobs } from '../../../utilities/fakedb';

const AppliedJobs = () => {

    const [jobs, setJobs] = useState([]);
    useEffect(() => {
        fetch('jobs.json')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                const storedJobs = getJobs();
                const appliedJobs = [];
                if (storedJobs) {
                    for (const key in storedJobs) {
                        console.log(storedJobs[key])
                        appliedJobs.push(data.find(job => job.id == storedJobs[key]))
                    }
                }
                console.log(appliedJobs)
                setJobs(appliedJobs)
            })
    }, [])

    return (
        <div>
            <PageTitle>Applied Jobs</PageTitle>
            <div className='w-full p-0 lg:w-9/12 mx-auto px-4 lg:px-0'>
                {
                    jobs.map((job, id) => <MyJob
                        key={id}
                        job={job}
                    ></MyJob>)
                }
            </div>
        </div>
    );
};

export default AppliedJobs;