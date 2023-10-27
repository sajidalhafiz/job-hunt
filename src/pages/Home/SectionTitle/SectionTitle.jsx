import React from 'react';

const SectionTitle = ({ title, subTitle}) => {
    return (
        <div className='text-center mt-24 mb-8'>
            <h2 className='text-zinc-900 text-2xl lg:text-5xl font-extrabold'>{title}</h2>
            <p className='text-neutral-500 text-sm lg:text-base font-medium my-4'>{subTitle}</p>
        </div>
    );
};

export default SectionTitle;