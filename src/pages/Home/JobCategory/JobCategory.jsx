import React from 'react';
import img from '../../../assets/icons/analytic.png';

const JobCategory = () => {
    return (
        <div className="w-[311px] h-[243px] bg-gradient-to-br from-[#7e8ffe1f] to-[#9873ff1d] rounded-lg p-10">
            <div className="w-[70px] h-[70px] bg-white rounded-lg shadow-md p-3">
                <img src={img} alt="" />
            </div>
            <h3 className='text-zinc-700 text-xl font-extrabold mb-2 mt-8'>Software Engineer</h3>
            <p className='text-neutral-400 text-base font-medium'>1300 Jobs Available</p>
        </div>
    );
};

export default JobCategory;