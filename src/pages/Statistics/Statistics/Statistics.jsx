import React from 'react';
import PageTitle from '../../Shared/PageTitle/PageTitle';
import ResultChart from '../ResultChart/ResultChart';

const Statistics = () => {
    document.title = 'Job Hunt - Statistics';
    return (
        <div>
            <PageTitle>Statistics</PageTitle>
            <ResultChart></ResultChart>
        </div>
    );
};

export default Statistics;