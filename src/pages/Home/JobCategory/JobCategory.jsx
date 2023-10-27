import React from 'react';

const JobCategory = ({ category }) => {
    const { logo, category_name, availability } = category;
    
    return (
        <div className="bg-gradient-to-br from-[#7e8ffe1f] to-[#9873ff1d] rounded-lg p-4 lg:p-10">
            <div className="w-[70px] h-[70px] bg-white rounded-lg shadow-md p-3">
                <img src={logo} alt="" />
            </div>
            <h3 className='text-zinc-700 text-md lg:text-xl font-extrabold mb-1 lg:mb-2 mt-3 lg:mt-8'>{category_name}</h3>
            <p className='text-neutral-400 text-sm lg:text-base font-medium'>{availability}</p>
        </div>
    );
};

export default JobCategory;