import React from 'react';
import { Link, Outlet } from 'react-router-dom';
// import Neyaz from '../Assets/neyaz.jpg'

const Portfolio = () => {
    return (
        <div>

            <div className='flex gap-x-5'>
                <Link to='/portfolio/about' className='font-semibold text-white'>ABOUT</Link>
                <Link to='/portfolio/projects' className='font-semibold text-white'>PROJECTS</Link>
            </div>

            <Outlet />
        </div>
    );
};

export default Portfolio;