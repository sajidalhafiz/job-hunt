import React from 'react';
import './NavBar.css'
import Button from '../../../components/Button/Button';
import ActiveLink from '../../../components/ActiveLink/ActiveLink';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li><ActiveLink to='/'>Home</ActiveLink></li>
                            <li><ActiveLink to='/statistics'>Statistics</ActiveLink></li>
                            <li><ActiveLink to='/appliedJobs'>Applied Jobs</ActiveLink></li>
                            <li><ActiveLink to='/blog'>Blog</ActiveLink></li>
                        </ul>
                    </div>
                    <div>
                        <Link className="text-gradient uppercase text-2xl" to='/'>jobHunt</Link>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text-md md:text-base">
                        <li><ActiveLink to='/'>Home</ActiveLink></li>
                        <li><ActiveLink to='/statistics'>Statistics</ActiveLink></li>
                        <li><ActiveLink to='/appliedJobs'>Applied Jobs</ActiveLink></li>
                        <li><ActiveLink to='/blog'>Blog</ActiveLink></li>
                    </ul>
                </div>
                <div className="navbar-end hidden md:inline-flex">
                    <Button/>
                </div>
            </div>
        </div>
    );
};

export default NavBar;