import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Logo from '../Assets/N-logo.png'
import '../Style/style.css'
import Background from '../Assets/tech-background.png'

const Navbar = ({ children }) => {

    return (
        <div 
        style={{
            background: `url(${Background})`,
            backgroundSize: 'cover'
        }}
        className=' text-primary md:pt-6'>

            <div class="drawer drawer-end">
                <input id="my-drawer-3" type="checkbox" class="drawer-toggle" />
                <div class="drawer-content flex flex-col lg:px-64">
                    {/* <!-- Navbar --> */}
                    <motion.div class="w-full navbar bg-transparent border-b "
                        initial={{ y: -250 }}
                        animate={{ y: -10 }}
                        transition={{ delay: 0.2, type: 'spring' }}
                    >
                        <div class="flex-1">
                            <Link to='/'>
                                <img src={Logo} alt="" className='h-10 lg:h-10' />
                            </Link>
                        </div>
                        <div class="flex-none lg:hidden">
                            <label for="my-drawer-3" class="btn btn-square btn-ghost">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                            </label>
                        </div>
                        <div class="flex-none hidden lg:block">
                            <ul class="menu menu-horizontal gap-5 pr-6 pt-3">
                                {/* <!-- Navbar menu content here --> */}

                                {/* <Link to='/about' className=''>ABOUT</Link> */}

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
                <div class="drawer-side text-black">
                    <label for="my-drawer-3" class="drawer-overlay"></label>
                    <ul class="menu p-4 overflow-y-auto opacity-80 bg-neutral text-primary pt-14">
                        {/* <!-- Sidebar content here --> */}

                        {/* <Link to='/about' className=''>ABOUT</Link> */}
                        

                        <Link to='/' className='py-2 menu-selection type-1'>HOME</Link>

                        <Link to='/portfolio' className='py-2 menu-selection type-1'>PORTFOLIO</Link>

                        <Link to='/blog' className='py-2 menu-selection type-1'>BLOG</Link>

                        <Link to='/contact' className='py-2 menu-selection type-1'>CONTACT</Link>


                    </ul>

                </div>
            </div>


        </div>
    );
};

export default Navbar;