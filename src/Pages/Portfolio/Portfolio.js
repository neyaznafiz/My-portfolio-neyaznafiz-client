import { motion } from 'framer-motion';
import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Footer from '../../Components/Shared/Footer';

const Portfolio = () => {
    return (
        <div className='bg-[#014b4d] bg-opacity-60' >

            <div className='flex justify-end'>
                <div className='flex justify-center gap-x-5 border-b-2 w-56 pt-8 mr-20 text-lg'>
                    <Link to='/portfolio/about' className='font-semibold text-white menu-selection type-1'>ABOUT</Link>

                    <Link to='/portfolio/projects' className='font-semibold text-white menu-selection type-1'>PROJECTS</Link>
                </div>
            </div>

            <Outlet />

            <motion.div className='md:mt-20 md:px-32'
                initial={{ y: 300 }}
                animate={{ y: 20 }}
                transition={{ delay: 0.2, type: 'spring' }}
            >
                <Footer />
            </motion.div>
        </div>
    );
};

export default Portfolio;