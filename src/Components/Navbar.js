import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Logo from '../Assets/Logo.png'

const Navbar = ({ children }) => {
    return (
        <div className='bg-neutral text-primary lg:px-60 lg:pt-6'>

            <div class="drawer drawer-end">
                <input id="my-drawer-3" type="checkbox" class="drawer-toggle" />
                <div class="drawer-content flex flex-col ">
                    {/* <!-- Navbar --> */}
                    <motion.div class="w-full navbar bg-transparent border-b"
                        initial={{ y: -250 }}
                        animate={{ y: -10 }}
                        transition={{ delay: 0.2, type: 'spring' }}
                    >
                        <div class="flex-1">
                            <Link to='/'>
                                <img src={Logo} alt="" className='h-12 lg:h-20' />
                            </Link>
                        </div>
                        <div class="flex-none lg:hidden">
                            <label for="my-drawer-3" class="btn btn-square btn-ghost">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                            </label>
                        </div>
                        <div class="flex-none hidden lg:block">
                            <ul class="menu menu-horizontal">
                                {/* <!-- Navbar menu content here --> */}
                                <li>
                                    <Link to='/about' className=''>ABOUT</Link>
                                </li>
                                <li>
                                    <Link to='/portfolio' className=''>PORTFOLIO</Link>
                                </li>
                                <li>
                                    <Link to='/blog' className=''>BLOG</Link>
                                </li>
                                <li>
                                    <Link to='/contact' className=''>CONTACT</Link>
                                </li>

                            </ul>
                        </div>
                    </motion.div>
                    {/* <!-- Page content here --> */}
                    {children}
                </div>
                <div class="drawer-side text-black">
                    <label for="my-drawer-3" class="drawer-overlay"></label>
                    <ul class="menu p-4 overflow-y-auto w-80 bg-base-100">
                        {/* <!-- Sidebar content here --> */}
                        <li>
                            <Link to='/about' className=''>ABOUT</Link>
                        </li>
                        <li>
                            <Link to='/portfolio' className=''>PORTFOLIO</Link>
                        </li>
                        <li>
                            <Link to='/blog' className=''>BLOG</Link>
                        </li>
                        <li>
                            <Link to='/contact' className=''>CONTACT</Link>
                        </li>

                    </ul>

                </div>
            </div>

        </div>
    );
};

export default Navbar;