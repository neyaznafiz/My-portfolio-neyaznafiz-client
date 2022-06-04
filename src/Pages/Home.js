import { motion } from 'framer-motion';
// import { useRef, useState } from 'react';
import { FaDev, FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMailOpen } from 'react-icons/hi';
// import { toast } from 'react-toastify';
// import signatureWhite from '../Assets/Neyaz-signature-white.png'
import Footer from '../Components/Shared/Footer';

const Home = () => {

    // const [copySuccess, setCopySuccess] = useState('');
    // const textAreaRef = useRef(null);

    // function copyToClipboard(e) {
    //     textAreaRef.current.select();
    //     document.execCommand('copy');
    //     e.target.focus();
    //     // setCopySuccess('E-mail Copied');
    //     toast.success('E-mail Copied!')
    // };

    return (
        <div class="">

                    <div className='px-3'>
                        <div className='md:flex justify-between items-center gap-x-5 pt-10'>

                            <div>
                                <motion.p
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.5, duration: 2 }}
                                    className='md:text-9xl text-5xl font-serif md:pt-8'>
                                    Neyaz <br /> Mobalik Nafiz.
                                </motion.p>
                                <div className='flex justify-end'>
                                    <motion.p
                                        initial={{ x: -2000 }}
                                        animate={{ x: -0 }}
                                        transition={{ delay: 1.3, duration: 1.5, type: 'spring' }}
                                        className='text-4xl flex items-center '> | Web Developer |  </motion.p>
                                </div>
                            </div>

                            <motion.div
                                className='grid grid-cols-2 gap-5 pb-16 pt-10'
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.5, duration: 2 }}
                            >

                                {/* github */}
                                <motion.div
                                    // whileHover={{ backgroundColor: ['rgba(33, 33, 33, 0)', '#ffffff'] }}
                                    className='border md:w-40 md:h-40 text-primary  hover:text-neutral'>

                                    <motion.a href="https://github.com/neyaznafiz" target='_blank'
                                        whileHover={{ backgroundColor: ['rgba(33, 33, 33, 0)', '#ffffff'] }}
                                        className='w-32 h-32 flex justify-center items-center text-5xl text-primary  hover:text-neutral m-4 border border-primary'><FaGithub /></motion.a>

                                </motion.div>


                                {/* devto */}
                                <motion.div
                                    // whileHover={{ backgroundColor: ['rgba(33, 33, 33, 0)', '#ffffff'] }}
                                    className='border md:w-40 md:h-40 text-primary  hover:text-neutral'>

                                    <motion.a href="https://dev.to/neyaznafiz" target='_blank'
                                        whileHover={{ backgroundColor: ['rgba(33, 33, 33, 0)', '#ffffff'] }}
                                        className='w-32 h-32 flex justify-center items-center text-5xl text-primary  hover:text-neutral m-4 border border-primary'><FaDev /></motion.a>

                                </motion.div>


                                {/* linkdin */}
                                <motion.div
                                    // whileHover={{ backgroundColor: ['rgba(33, 33, 33, 0)', '#ffffff'] }}
                                    className='border md:w-40 md:h-40 text-primary  hover:text-neutral'>

                                    <motion.a href="https://www.linkedin.com/in/neyaznafiz/" target='_blank'
                                        whileHover={{ backgroundColor: ['rgba(33, 33, 33, 0)', '#ffffff'] }}
                                        className='w-32 h-32 flex justify-center items-center text-5xl text-primary  hover:text-neutral m-4 border border-primary'><FaLinkedin /></motion.a>

                                </motion.div>

                                {/* email */}
                                <motion.div
                                //    whileHover={{ backgroundColor: ['rgba(33, 33, 33, 0)', '#ffffff'] }}
                                    className='border md:w-40 md:h-40'>

                                    <motion.button onClick={() => navigator.clipboard.writeText('neyaznafiz@outlook.com')}
                                        whileHover={{ backgroundColor: ['rgba(33, 33, 33, 0)', '#ffffff'] }}
                                        className='w-32 h-32 flex justify-center items-center text-5xl text-primary  hover:text-neutral m-4 border border-primary'>
                                        <HiOutlineMailOpen />
                                    </motion.button>

                                </motion.div>


                                {/* email */}
                                {/* <div>
                            {
                                document.queryCommandSupported('copy') &&
                                <motion.div
                                    whileHover={{ backgroundColor: ['#ffffff', 'rgba(33, 33, 33, 0)'] }}
                                    className='border bg-primary md:w-40 md:h-40'>
                                    <motion.button onClick={copyToClipboard}
                                        whileHover={{ backgroundColor: ['#ffffff', 'rgba(33, 33, 33, 0)'] }}
                                        className='w-32 h-32 flex justify-center items-center text-5xl bg-primary text-neutral hover:text-primary m-4 border border-primary'
                                    ><HiOutlineMailOpen /></motion.button>
                                </motion.div>

                            }

                            <form className=''>
                                <textarea
                                    ref={textAreaRef}
                                    value='neyaznafiz@outlook.com'
                                />
                            </form>
                        </div> */}
                            </motion.div>

                        </div>


                        {/* <motion.div className='flex justify-end py-3'
                    initial={{ x: 2000 }}
                    animate={{ x: 40 }}
                    transition={{ delay: 1.3, duration: 2, type: 'spring' }}>
                    <img src={signatureWhite} alt="" className='opacity-80 w-72' />
                </motion.div> */}
                    </div>

                    <motion.div className='md:mt-16'
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