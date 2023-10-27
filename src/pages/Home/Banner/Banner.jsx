import React from 'react';
import bannerIgm from '../../../assets/images/career_progress.png';

const Banner = () => {
    return (
        <div className='bg-gradient-to-t from-[#7e8ffe14] from-50% to-transparent'>
            <div className='w-full lg:w-9/12 mx-auto px-4 lg:px-0  flex flex-col lg:flex-row justify-between items-center gap-8 py-4 lg:py-32'>
                <div className='space-y-3 lg:space-y-8 w-full lg:w-1/2'>
                    <h1 className='text-4xl lg:text-7xl font-extrabold text-[#1A1919] leading-tight'>
                        One Step<br />
                        Closer To Your<br />
                        <span className='text-gradient'>Dream Job</span>
                    </h1>
                    <p className='text-sm lg:text-base text-neutral-500 font-medium'>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                    <button className="btn normal-case btn-gradient active:scale-95 border-none text-xs lg:text-lg">Get Started</button>
                </div>
                <div className='w-full lg:w-1/2'>
                    <img className='w-full' src={bannerIgm} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Banner;