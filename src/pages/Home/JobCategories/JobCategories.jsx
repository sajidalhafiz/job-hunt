import React, { useEffect, useState } from 'react';
import JobCategory from '../JobCategory/JobCategory';
import SectionTitle from '../SectionTitle/SectionTitle';

const JobCategories = () => {

    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch('categories.json')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, []);

    return (
        <div className='w-full p-0 lg:w-9/12 mx-auto px-4 lg:px-0 my-32'>
            <SectionTitle
                title='Job Category List'
                subTitle='Explore thousands of job opportunities with all the information you need. Its your future'>
            </SectionTitle>
            <div className='grid grid-cols-1 lg:grid-cols-4 gap-6 mt-16'>
                {
                    categories.map(category => <JobCategory
                        key={category.id}
                        category={category}
                    ></JobCategory>)
                }
            </div>
        </div>
    );
};

export default JobCategories;