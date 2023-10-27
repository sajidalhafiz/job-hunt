import React from 'react';
import img1 from '../../../assets/images/bg1.png';
import img2 from '../../../assets/images/bg2.png';

const PageTitle = ({ children }) => {
    return (
        <div className='h-[400px] bg-gradient-to-t from-[#7e8ffe14] from-50% to-transparent relative flex justify-center items-center'>
            <h3 className='text-zinc-900 text-4xl font-extrabold'>{children}</h3>
            <div className='absolute bottom-0 left-0'>
                <img src={img1} alt="" />
            </div>
            <div className='absolute top-0 right-0'>
                <img src={img2} alt="" />
            </div>
        </div>
    );
};

export default PageTitle;