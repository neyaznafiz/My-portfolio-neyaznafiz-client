import { motion } from 'framer-motion';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaFacebookF, FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMailOpen } from 'react-icons/hi';
import signatureWhite from '../Assets/signature-white.png'

const Home = () => {


    return (
        <div class="h-screen">
            <div className='pt-20'>
                <div className='lg:flex justify-around items-center h-full gap-x-5'>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5, duration: 2 }}
                    >
                        <p className='lg:text-9xl text-6xl font-serif'>
                            Neyaz <br /> Mobalik Nafiz.
                        </p>
                        <div className='flex justify-end'>
                            <p className='text-4xl font-mono'> Web Developer </p>
                        </div>
                    </motion.div>

                    <motion.div
                        className='grid grid-cols-2 gap-10 pb-20'
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5, duration: 2 }}
                    >
                        {/* facebook */}
                        <div className='border bg-primary hover:bg-transparent'>
                            <a href="https://www.facebook.com/neyaznafiz/" target='_blank' className='w-32 h-32 flex justify-center items-center text-5xl bg-primary text-neutral hover:bg-transparent hover:text-primary m-4 border border-primary'><FaFacebookF /></a>
                        </div>
                        {/* github */}
                        <div className='border bg-primary hover:bg-transparent'>
                            <a href="https://github.com/neyaznafiz" target='_blank' className='w-32 h-32 flex justify-center items-center text-5xl bg-primary text-neutral hover:bg-transparent hover:text-primary m-4 border border-primary'><FaGithub /></a>
                        </div>
                        {/* linkdin */}
                        <div className='border bg-primary hover:bg-transparent'>
                            <a href="https://www.linkedin.com/in/neyaznafiz/" target='_blank' className='w-32 h-32 flex justify-center items-center text-5xl bg-primary text-neutral hover:bg-transparent hover:text-primary m-4 border border-primary'><FaLinkedin /></a>
                        </div>
                        {/* email */}
                        <div className='border bg-primary hover:bg-transparent'>
                            <a href="https://www.facebook.com/neyaznafiz/" target='_blank' className='w-32 h-32 flex justify-center items-center text-5xl bg-primary text-neutral hover:bg-transparent hover:text-primary m-4 border border-primary'><HiOutlineMailOpen /></a>
                        </div>
                    </motion.div>


                </div>
                <motion.div className='flex justify-end'
                initial={{ x: 350 }}
                animate={{ x: 0 }}
                transition={{ delay: 1.5, duration: 0.5, type: 'spring' }}
                >
                    <img src={signatureWhite} alt="" className='opacity-80' 
                    
                    />
                </motion.div>
            </div>

        </div>
    );
};

export default Home;