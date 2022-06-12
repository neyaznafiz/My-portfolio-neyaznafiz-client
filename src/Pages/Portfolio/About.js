import { motion } from 'framer-motion';
import React from 'react';
import Typed from "react-typed"
import signatureWhite from '../../Assets/Neyaz-signature-white.png'

const About = () => {
    return (
        <motion.div
            className='bg-[#014b4d] bg-opacity-80 my-5 py-16 px-4 md:px-40'>

            <motion.div
                whileHover={{ backgroundColor: ['rgba(33, 33, 33, 0)', 'rgba(255, 255, 255, 0.6)'], color: ['#ffffff', '#000000'] }}
                transition={{ duration: 0.4 }}
                className='border md:mx-20 px-2 md:px-16 py-20'>

                <motion.div
                    initial={{ x: 2000 }}
                    animate={{ x: 0 }}
                    transition={{ delay: 0.6, duration: 1.5, type: 'spring' }}
                    className='border-l-2 pl-2'>

                    <Typed strings={["Neyaz Mobalik Nafiz "]} typeSpeed={180} className='text-3xl md:text-4xl font-bold' />

                    <p className='text-lg font-semibold pl-1'>Web Developer (MERN Stack)</p>
                </motion.div>

                <motion.div
                    initial={{ x: -2000 }}
                    animate={{ x: 0 }}
                    transition={{ delay: 0.6, duration: 1.5, type: 'spring' }}
                    className='grid md:justify-end pt-10 md:pt-16'>
                    <p className='text-lg grid md:flex justify-center'> <span>Dhaka, Bangladesh | </span> <span className='ml-1'> (+880) 1303246616 </span></p>
                    <p className='text-lg flex justify-center md:justify-end'> E-mail: neyaznafiz@outlook.com </p>
                </motion.div>

                <motion.div
                    initial={{  opacity: 0 }}
                    animate={{  opacity: 1 }}
                    transition={{ duration: 1, type: 'tween' }}
                    className='flex justify-center py-10 md:py-20'>
                    <p className='w-[1080px] text-center text-xl'>I am a Web Developer With a good understanding of building modern dynamic websites and a love for React. I am a student of Computer Science and Technology. My future vision is I want to see myself in the future as a great programmer. My interest is in machine learning and ethical hacking. I hope, my hard work takes me to my goal. Ready to give my best to any aspiring.
                    </p>
                </motion.div>



                <div className='my-10'>
                    <motion.p
                        initial={{ x: 2000 }}
                        animate={{ x: 0 }}
                        transition={{ delay: 0.6, duration: 1.5, type: 'spring' }}
                        className='text-2xl font-bold my-3'
                    >SKILLS</motion.p>

                    <p className='pl-6 flex text-lg'>

                        <motion.span
                            initial={{ x: -2000 }}
                            animate={{ x: 0 }}
                            transition={{ duration: 1.5, type: 'tween' }}
                        >Comfortable:</motion.span>

                        <motion.p
                            initial={{ y: 2000, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.7, duration: 1.5, type: 'tween' }}
                            className='pl-10 md:pl-20'>
                            React | JavaScript | ES6 | CSS | Tailwind CSS | Bootstrap <br />
                            Framer Motion | NodeJS | ExpressJS | MongoDB <br />
                            Stripe | Firebase | Netlify | Heroku
                        </motion.p>
                    </p>

                    <p className='pl-6 flex text-lg py-10'>
                        <motion.span
                            initial={{ x: -2000 }}
                            animate={{ x: 0 }}
                            transition={{ delay: 0.2, duration: 1.5, type: 'tween' }}
                        >Familiar:</motion.span>

                        <motion.p
                            initial={{ y: 2000, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.9, duration: 1.5, type: 'tween' }}
                            className='pl-[77px] md:pl-[145px]'>
                            React Native | NextJS | TypeScript <br />
                            Mongoose | Socket.io

                        </motion.p>
                    </p>


                    <p className='pl-6 flex text-lg'>
                        <motion.span
                            initial={{ x: -2000 }}
                            animate={{ x: 0 }}
                            transition={{ delay: 0.4, duration: 1.5, type: 'tween' }}
                        >Tools:</motion.span>

                        <motion.p
                            initial={{ y: 2000, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 1.1, duration: 1.5, type: 'tween' }}
                            className='pl-[95px] md:pl-[167px]'>
                            Git | VS Code | Figma <br />
                            Chrome DevTools | React Developer Tools
                        </motion.p>
                    </p>

                </div>

                <motion.div className='flex justify-end'
                    initial={{ x: -2000 }}
                    animate={{ x: -20 }}
                    transition={{ delay: 2.4, duration: 2, type: 'spring' }}>
                    <img src={signatureWhite} alt="" className='opacity-90 w-48' />
                </motion.div>
            </motion.div>

        </motion.div>
    );
};

export default About;