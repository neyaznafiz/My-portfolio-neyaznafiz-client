import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Logo from '../Assets/N-logo.png'
import '../Style/style.css'
import Background from '../Assets/tech-background.png'
import { BiCloudDownload } from 'react-icons/bi';

const Navbar = ({ children }) => {

    return (
        <div
            style={{
                background: `url(${Background})`,
                backgroundSize: 'cover',
            }}
            className=' text-primary md:pt-6'>

            <div className="drawer drawer-end">
                <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col md:px-32">
                    {/* <!-- Navbar --> */}
                    <motion.div className="w-full navbar bg-transparent border-b "
                        initial={{ y: -250 }}
                        animate={{ y: -10 }}
                        transition={{ delay: 0.2, type: 'spring' }}
                    >
                        {/* <Particle /> */}
                        <div className="flex-1">
                            <Link to='/'>
                                <img src={Logo} alt="" className='h-10 lg:h-10' />
                            </Link>
                        </div>
                        <div className="flex-none lg:hidden">
                            <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                            </label>
                        </div>
                        <div className="flex-none hidden lg:block">
                            <ul className="menu menu-horizontal gap-5 pt-3">
                                {/* <!-- Navbar menu content here --> */}

                                {/* <Link to='/about' className=''>ABOUT</Link> */}

                                <motion.a
                                    href='https://drive.google.com/file/d/1RJKQbna1BbNCASHx2zt32oz1uYC2_t0B/view?usp=sharing'
                                    target='_blank'
                                    className='btn2-selection type-2'
                                    initial={{ y: -250 }}
                                    animate={{ y: -1 }}
                                    transition={{ delay: 1.5, type: 'spring' }}
                                >
                                    DOWNLOAD RESUME
                                    <BiCloudDownload className='text-xl ml-2' />
                                </motion.a>

                                <Link to='/' className='menu-selection type-1'>HOME</Link>

                                <Link to='/portfolio' className='menu-selection type-1'>PORTFOLIO</Link>

                                <Link to='/blog' className='menu-selection type-1'>BLOG</Link>

                                <Link to='/contact' className='menu-selection type-1'>CONTACT</Link>


                            </ul>
                        </div>
                    </motion.div>
                    {/* <!-- Page content here --> */}
                    {children}
                </div>
                <div className="drawer-side text-black">
                    <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
                    <ul className="menu p-4 overflow-y-auto bg-opacity-50 bg-[#014b4d] text-primary pt-14">
                        {/* <!-- Sidebar content here --> */}

                        {/* <Link to='/about' className=''>ABOUT</Link> */}


                        <Link to='/' className='py-2 btn-selection type-2'>HOME</Link>

                        <Link to='/portfolio' className='py-2 btn-selection type-2'>PORTFOLIO</Link>

                        <Link to='/blog' className='py-2 btn-selection type-2'>BLOG</Link>

                        <Link to='/contact' className='py-2 btn-selection type-2'>CONTACT</Link>

                        <a
                            href='https://drive.google.com/file/d/1RJKQbna1BbNCASHx2zt32oz1uYC2_t0B/view?usp=sharing'
                            target='_blank'
                            className='btn-selection type-2'>
                            RESUME <BiCloudDownload className='text-2xl ml-2' />
                        </a>

                    </ul>

                </div>
            </div>


        </div>
    );
};

export default Navbar;