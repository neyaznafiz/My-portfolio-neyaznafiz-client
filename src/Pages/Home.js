import { motion } from 'framer-motion';
import toast from 'react-hot-toast';
import { FaDev, FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMailOpen } from 'react-icons/hi';
import Footer from '../Components/Shared/Footer';
import Particle from '../Style/Particle';



const Home = () => {

    const handleEmailCopy = () => {
        navigator.clipboard.writeText('neyaznafiz@outlook.com')

        toast('Email Copied', {
            icon: '✔️',
            duration: 4000,
            position: 'bottom-right',

            style: {
                background: 'transparent',
                color: '#fff',
                border: '2px solid white',
                marginBottom: '290px',
                marginRight: '55px',
            },
        })

    }

    return (
        <div className="">

            <div className='px-3'>
                <div className=' md:flex justify-between items-center gap-x-5 pt-10'>

                    <div>
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5, duration: 2 }}
                            className='md:text-7xl lg:text-9xl text-5xl font-serif md:pt-8 '>
                            Neyaz <br /> Mobalik Nafiz.
                        </motion.p>
                        <div className='flex justify-end'>
                            <motion.p
                                initial={{ x: -2000 }}
                                animate={{ x: -0 }}
                                transition={{ delay: 1.3, duration: 1.5, type: 'spring' }}
                                className='text-4xl flex items-center'> | Web Developer |  </motion.p>
                        </div>
                    </div>

                    <motion.div
                        className='grid grid-cols-2 gap-5 pb-16 pt-10'
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5, duration: 1 }}
                    >

                        {/* github */}
                        <motion.div
                            // animate={{
                            //     scale: [1, 2, 2, 1, 1],
                            //     rotate: [270, 270, 0, 0, 0],
                            //     // borderRadius: ["20%", "20%", "50%", "50%", "20%"],
                            // }}
                            // transition={{
                            //     duration: 2,
                            //     ease: "easeInOut",
                            //     times: [0, 0.2, 0.5, 0.8, 1],
                            //     // repeat: Infinity,
                            //     repeatDelay: 1
                            //   }}
                            // whileHover={{ backgroundColor: ['rgba(33, 33, 33, 0)', '#ffffff'] }}
                            className='border md:w-40 md:h-40 text-primary  hover:text-neutral'>

                            <motion.a href="https://github.com/neyaznafiz" target='_blank'
                                whileHover={{ backgroundColor: ['rgba(33, 33, 33, 0)', '#ffffff'] }}
                                transition={{ duration: 0.3 }}
                                className='w-32 h-32 flex justify-center items-center text-5xl text-primary  hover:text-neutral m-4 border border-primary'><FaGithub /></motion.a>

                        </motion.div>


                        {/* devto */}
                        <motion.div
                        //  animate={{
                        //     scale: [1, 2, 2, 1, 1],
                        //     rotate: [270, 270, 0, 0, 0],
                        //     // borderRadius: ["20%", "20%", "50%", "50%", "20%"],
                        // }}
                        // transition={{
                        //     duration: 2,
                        //     ease: "easeInOut",
                        //     times: [0, 0.2, 0.5, 0.8, 1],
                        //     // repeat: Infinity,
                        //     repeatDelay: 1
                        //   }}
                            // whileHover={{ backgroundColor: ['rgba(33, 33, 33, 0)', '#ffffff'] }}
                            className='border md:w-40 md:h-40 text-primary  hover:text-neutral'>

                            <motion.a href="https://dev.to/neyaznafiz" target='_blank'
                                whileHover={{ backgroundColor: ['rgba(33, 33, 33, 0)', '#ffffff'] }}
                                transition={{ duration: 0.3 }}
                                className='w-32 h-32 flex justify-center items-center text-5xl text-primary  hover:text-neutral m-4 border border-primary'><FaDev /></motion.a>

                        </motion.div>


                        {/* linkdin */}
                        <motion.div
                        //  animate={{
                        //     scale: [1, 2, 2, 1, 1],
                        //     rotate: [270, 270, 0, 0, 0],
                        //     // borderRadius: ["20%", "20%", "50%", "50%", "20%"],
                        // }}
                        // transition={{
                        //     duration: 2,
                        //     ease: "easeInOut",
                        //     times: [0, 0.2, 0.5, 0.8, 1],
                        //     // repeat: Infinity,
                        //     repeatDelay: 1
                        //   }}
                            // whileHover={{ backgroundColor: ['rgba(33, 33, 33, 0)', '#ffffff'] }}
                            className='border md:w-40 md:h-40 text-primary  hover:text-neutral'>

                            <motion.a href="https://www.linkedin.com/in/neyaznafiz/" target='_blank'
                                whileHover={{ backgroundColor: ['rgba(33, 33, 33, 0)', '#ffffff'] }}
                                transition={{ duration: 0.3 }}
                                className='w-32 h-32 flex justify-center items-center text-5xl text-primary  hover:text-neutral m-4 border border-primary'><FaLinkedin /></motion.a>

                        </motion.div>

                        {/* email */}
                        <motion.div
                        //  animate={{
                        //     scale: [1, 2, 2, 1, 1],
                        //     rotate: [270, 270, 0, 0, 0],
                        //     // borderRadius: ["20%", "20%", "50%", "50%", "20%"],
                        // }}
                        // transition={{
                        //     duration: 2,
                        //     ease: "easeInOut",
                        //     times: [0, 0.2, 0.5, 0.8, 1],
                        //     // repeat: Infinity,
                        //     repeatDelay: 1
                        //   }}
                            //    whileHover={{ backgroundColor: ['rgba(33, 33, 33, 0)', '#ffffff'] }}
                            className='border md:w-40 md:h-40'>

                            <motion.button onClick={handleEmailCopy}
                                whileHover={{ backgroundColor: ['rgba(33, 33, 33, 0)', '#ffffff'] }}
                                transition={{ duration: 0.3 }}
                                className='w-32 h-32 flex justify-center items-center text-5xl text-primary  hover:text-neutral m-4 border border-primary'>
                                <HiOutlineMailOpen />
                            </motion.button>

                        </motion.div>

                    </motion.div>
                </div>
                <Particle></Particle>
            </div>

            <motion.div className='md:mt-20'
                initial={{ y: 300 }}
                animate={{ y: 20 }}
                transition={{ delay: 0.2, type: 'spring' }}
            >
                <Footer />
            </motion.div>

        </div>
    );
};

export default Home;