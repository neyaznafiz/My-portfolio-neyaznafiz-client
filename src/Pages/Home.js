import { motion } from 'framer-motion';
import { FaFacebookF, FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMailOpen } from 'react-icons/hi';
// import { BsCode, BsCodeSlash } from 'react-icons/bs';
import signatureWhite from '../Assets/signature-white.png'

const Home = () => {

    return (
        <div class="h-screen px-2 lg:px-0">
            <div className='pt-20'>
                <div className='lg:flex justify-around items-center h-full gap-x-5'>

                    <div>
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5, duration: 2 }}
                            className='lg:text-9xl text-6xl font-serif lg:pt-8'>
                            Neyaz <br /> Mobalik Nafiz.
                        </motion.p>
                        <div className='flex justify-end'>
                            <motion.p
                                initial={{ x: -900 }}
                                animate={{ x: -0 }}
                                transition={{ delay: 1.5, duration: 1.5, type: 'spring' }}
                                className='text-4xl flex items-center '> | Web Developer |  </motion.p>
                        </div>
                    </div>

                    <motion.div
                        className='grid grid-cols-2 gap-10 pb-16 pt-10'
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5, duration: 2 }}
                    >
                        {/* facebook */}
                        <motion.div
                            whileHover={{ backgroundColor: ['#ffffff', 'rgba(33, 33, 33, 0)'] }}
                            className='border bg-primary '>

                            <motion.a href="https://www.facebook.com/neyaznafiz/" target='_blank'
                                whileHover={{ backgroundColor: ['#ffffff', 'rgba(33, 33, 33, 0)'] }}
                                className='w-32 h-32 flex justify-center items-center text-5xl bg-primary text-neutral  hover:text-primary m-4 border border-primary'><FaFacebookF /></motion.a>

                        </motion.div>


                        {/* github */}
                        <motion.div
                            whileHover={{ backgroundColor: ['#ffffff', 'rgba(33, 33, 33, 0)'] }}
                            className='border bg-primary'>

                            <motion.a href="https://github.com/neyaznafiz" target='_blank'
                                whileHover={{ backgroundColor: ['#ffffff', 'rgba(33, 33, 33, 0)'] }}
                                className='w-32 h-32 flex justify-center items-center text-5xl bg-primary text-neutral hover:text-primary m-4 border border-primary'><FaGithub /></motion.a>

                        </motion.div>


                        {/* linkdin */}
                        <motion.div
                            whileHover={{ backgroundColor: ['#ffffff', 'rgba(33, 33, 33, 0)'] }}
                            className='border bg-primary'>

                            <motion.a href="https://www.linkedin.com/in/neyaznafiz/" target='_blank'
                                whileHover={{ backgroundColor: ['#ffffff', 'rgba(33, 33, 33, 0)'] }}
                                className='w-32 h-32 flex justify-center items-center text-5xl bg-primary text-neutral hover:text-primary m-4 border border-primary'><FaLinkedin /></motion.a>

                        </motion.div>

                        {/* email */}
                        <motion.div
                            whileHover={{ backgroundColor: ['#ffffff', 'rgba(33, 33, 33, 0)'] }}
                            className='border bg-primary'>

                            <motion.button onClick={() => navigator.clipboard.writeText('neyaznafiz@outlook.com')}
                                whileHover={{ backgroundColor: ['#ffffff', 'rgba(33, 33, 33, 0)'] }}
                                className='w-32 h-32 flex justify-center items-center text-5xl bg-primary text-neutral hover:text-primary m-4 border border-primary'
                            >
                                <HiOutlineMailOpen />
                            </motion.button>


                        </motion.div>

                    </motion.div>

                </div>
                <motion.div className='flex justify-end'
                    initial={{ x: 350 }}
                    animate={{ x: 0 }}
                    transition={{ delay: 1.5, duration: 2, type: 'spring' }}
                >
                    <img src={signatureWhite} alt="" className='opacity-80'

                    />
                </motion.div>
            </div>

        </div>
    );
};

export default Home;