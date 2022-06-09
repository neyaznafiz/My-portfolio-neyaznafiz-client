import { motion } from 'framer-motion';
import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Portfolio = () => {
    return (
        <div className='bg-[#014b4d] bg-opacity-60' >

            <div className='flex justify-center gap-x-5 border-b-2 w-52 pt-8 ml-10 text-lg'>
                <Link to='/portfolio/about' className='font-semibold text-white menu-selection type-1'>ABOUT</Link>

                <Link to='/portfolio/projects' className='font-semibold text-white menu-selection type-1'>PROJECTS</Link>
            </div>

            <Outlet />
            
        </div>
    );
};

export default Portfolio;