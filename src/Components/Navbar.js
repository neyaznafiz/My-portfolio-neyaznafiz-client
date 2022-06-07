import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Logo from '../Assets/N-logo.png'
import '../Style/style.css'
import Background from '../Assets/tech-background.png'
import { BiCloudDownload } from 'react-icons/bi';
import Axios from "axios";
import FileDownload from "js-file-download";
import fileDownload from 'js-file-download';

const Navbar = ({ children }) => {

const download = (e)=>{
    Axios({
        url:'https://obscure-ridge-82105.herokuapp.com/',
        method: "GET",
        responseType: "blob"
    }).then(res => {
        fileDownload(res.data, "Neyaz Mobalik Nafiz.pdf")
    })
}

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
                            <ul className="menu menu-horizontal gap-5 pr-6 pt-3">
                                {/* <!-- Navbar menu content here --> */}

                                {/* <Link to='/about' className=''>ABOUT</Link> */}


                                <Link to='/' className='menu-selection type-1'>HOME</Link>

                                <Link to='/portfolio' className='menu-selection type-1'>PORTFOLIO</Link>

                                <Link to='/blog' className='menu-selection type-1'>BLOG</Link>

                                <Link to='/contact' className='menu-selection type-1'>CONTACT</Link>

                                <button onClick={(e)=>download(e)} className='btn2-selection type-2'> DOWNLOAD RESUME <BiCloudDownload className='text-xl ml-2' /> </button>

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

                        <button onClick={(e)=>download(e)} className='btn-selection type-2'> RESUME <BiCloudDownload className='text-2xl ml-2'/> </button>

                    </ul>

                </div>
            </div>


        </div>
    );
};

export default Navbar;