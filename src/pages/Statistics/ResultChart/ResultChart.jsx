import { render } from 'react-dom';
import React, { PureComponent } from 'react';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';

const data = [
    { id: 1, name: 'Assignment-1', value: 50 },
    { id: 2, name: 'Assignment-2', value: 46 },
    { id: 3, name: 'Assignment-3', value: 30 },
    { id: 4, name: 'Assignment-4', value: 27 },
    { id: 5, name: 'Assignment-5', value: 15 },
    { id: 6, name: 'Assignment-6', value: 29 },
    { id: 7, name: 'Assignment-7', value: 30 },
];

const COLORS = ['#0088FE', '#00C4CF', '#00BB2F', '#FF5742', '#FF1049', '#FFDB28', '#ADC4CF'];

const ResultChart = () => {

    return (
        <div className='flex justify-center items-center bg-[#7e8ffe14] m-6 w-full p-0 lg:w-9/12 mx-auto px-4 lg:px-0 rounded-xl'>
            <ResponsiveContainer width={800} height={500}>
                <PieChart width={800} height={400} >
                    <Pie
                        data={data}
                        cx={'50%'}
                        cy={'50%'}
                        innerRadius={130}
                        outerRadius={200}
                        fill="#8884d8"
                        paddingAngle={2}
                        dataKey="value"
                        activeIndex={2}
                        animationDuration={2000}
                        
                    >
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>
                    <Tooltip />
                    <Legend layout={'vertical'} align={'right'} verticalAlign={'middle'} margin={{ top: 5, left: 0, right: 0, bottom: 0 }}/>
                </PieChart>
            </ResponsiveContainer>
        </div>
    );

};

export default ResultChart;