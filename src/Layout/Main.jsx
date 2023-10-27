import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../pages/Shared/Footer/Footer';
import NavBar from '../pages/Shared/NavBar/NavBar';

const Main = () => {
    return (
        <>
            <div className=''>
                <NavBar />
                <Outlet />
            </div>
            <Footer />
        </>
    );
};

export default Main;