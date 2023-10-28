import React from 'react';
import './NavBar.css';
import ActiveLink from '../../../components/ActiveLink/ActiveLink';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <div className="navbar bg-white w-full p-0 lg:w-9/12 mx-auto px-4 lg:px-0">
            <div className="navbar-start w-full lg:w-1/2 flex justify-between lg:justify-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden px-0">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-4 shadow bg-white rounded-box w-52 space-y-2 text-neutral-500">
                        <ActiveLink to='/'>Home</ActiveLink>
                        <ActiveLink to='/statistics'>Statistics</ActiveLink>
                        <ActiveLink to='/appliedJobs'>Applied Jobs</ActiveLink>
                        <ActiveLink to='/blog'>Blog</ActiveLink>
                    </ul>
                </div>
                <div>
                    <Link className="text-gradient uppercase text-xl md:text-3xl" to='/'>jobHunt</Link>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 text-md md:text-base space-x-8 text-neutral-500">
                    <ActiveLink to='/'>Home</ActiveLink>
                    <ActiveLink to='/statistics'>Statistics</ActiveLink>
                    <ActiveLink to='/appliedJobs'>Applied Jobs</ActiveLink>
                    <ActiveLink to='/blog'>Blog</ActiveLink>
                </ul>
            </div>
            <div className="navbar-end hidden lg:inline-flex">
                <button className="btn normal-case btn-gradient active:scale-95 border-none text-xs lg:text-lg">Start Applying</button>   
            </div>
        </div>
    );
};

export default NavBar;