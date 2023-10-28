import React from 'react';
import { Link } from 'react-router-dom';
import dollar from '../../../assets/icons/money.png';
import loc from '../../../assets/icons/location2.png';

const MyJob = ({ job }) => {

    // console.log(props.job)
    const {
        id,
        logo,
        jobTitle,
        companyName,
        remoteOrOnsite,
        jobType,
        location,
        salary
    } = job;

    return (
        <div className='p-4 lg:p-7 shadow-md rounded-lg m-4 text-neutral-500 border flex flex-col lg:flex-row justify-between items-center'>
            <div className='flex flex-col lg:flex-row items-center gap-8'>
                <div className='w-60 h-60 bg-zinc-100 rounded-lg flex justify-center items-center'>
                    <img className='w-20 lg:w-auto ' src={logo} alt="" />
                </div>
                <div>
                    <h3 className='mt-6 lg:mt-8 mb-1 lg:mb-2 text-zinc-700 text-md lg:text-2xl font-extrabold'>{jobTitle}</h3>
                    <p className='mb-4 lg:text-xl font-medium lg:font-semibold'>{companyName}</p>
                    <div className='flex gap-4 mb-4'>
                        <p className="px-4 py-2 rounded border border-indigo-400 text-indigo-400 text-sm lg:text-base font-extrabold">{remoteOrOnsite}</p>
                        <p className="px-4 py-2 rounded border border-indigo-400 text-indigo-400 text-sm lg:text-base font-extrabold">{jobType}</p>
                    </div>
                    <div className='flex flex-col lg:flex-row gap-6 mb-8'>
                        <p className='flex gap-2'><img className='h-6' src={loc} alt="" />{location}</p>
                        <p className='flex gap-2'><img className='h-5 ps-1' src={dollar} alt="" />{salary}</p>
                    </div>
                </div>
            </div>
            <Link to={`/job/${id}`} state={{ job: job }}>
                <button className="btn normal-case btn-gradient active:scale-95 border-none text-xs lg:text-md">View Details</button>
            </Link>
        </div>
    );
};

export default MyJob;