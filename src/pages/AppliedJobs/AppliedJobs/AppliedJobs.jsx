import React, { useEffect, useState } from 'react';
import PageTitle from '../../Shared/PageTitle/PageTitle';
import MyJob from '../MyJob/MyJob';
import { getJobs } from '../../../utilities/fakedb';

const AppliedJobs = () => {

    document.title = 'Job Hunt - Applied Jobs';

    const [filterBy, setFilterBy] = useState('');

    const [jobs, setJobs] = useState([]);
    useEffect(() => {
        fetch('jobs.json')
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                const storedJobs = getJobs();
                const appliedJobs = [];
                if (storedJobs) {
                    for (const key in storedJobs) {
                        // console.log(storedJobs[key])
                        appliedJobs.push(data.find(job => job.id == storedJobs[key]))
                    }
                }
                // console.log(appliedJobs)
                setJobs(appliedJobs)
            })
    }, []);

    


    return (
        <div>
            <PageTitle>Applied Jobs</PageTitle>
            <div className='flex flex-col lg:flex-row gap-4 items-end lg:items-center justify-end w-full p-0 lg:w-9/12 mx-auto my-6 lg:my-10 px-8 lg:px-4'>
                <h3 className='text-zinc-700'>Filter By : 🔍</h3>
                <button onClick={() => setFilterBy('Onsite')} className="btn normal-case btn-gradient active:scale-95 border-none text-sm lg:text-md">Onsite Jobs</button>
                <button onClick={() => setFilterBy('Remote')} className="btn normal-case btn-gradient active:scale-95 border-none text-sm lg:text-md">Remote Jobs</button>
                <button onClick={() => setFilterBy('')} className="btn normal-case btn-gradient active:scale-95 border-none text-sm lg:text-md">All</button>
            </div>
            <div className='w-full p-0 lg:w-9/12 mx-auto px-4 lg:px-0'>
                {
                    jobs.filter(job => {
                        if(!filterBy){
                            return job;
                        }
                        else if(filterBy == 'Onsite'){
                            return job.remoteOrOnsite == filterBy
                        }
                        else if(filterBy == 'Remote'){
                            return job.remoteOrOnsite == filterBy
                        }
                    }).map((job, id) => <MyJob
                        key={id}
                        job={job}
                    ></MyJob>)
                }
            </div>
        </div>
    );
};

export default AppliedJobs;