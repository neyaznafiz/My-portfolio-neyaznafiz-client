import React from 'react';
import { FaFacebook, FaSlackHash, FaTwitterSquare } from 'react-icons/fa';
import { AiFillTwitterCircle } from 'react-icons/ai';
import { TiSocialInstagramCircular } from 'react-icons/ti';
import { BsFacebook } from 'react-icons/bs';
import signatureWhite from '../../Assets/Neyaz-signature-white.png'
import { motion } from 'framer-motion';
import Typed from "react-typed"

const Footer = () => {
    return (
        <div className=''>

            <footer class="footer p-10  text-neutral-content flex items-center justify-between">
                <div>
                    <FaSlackHash className='text-5xl' />

                    <motion.div className=''
                        initial={{ x: -2000 }}
                        animate={{ x: -20 }}
                        transition={{ delay: 1, duration: 2, type: 'spring' }}>
                        <img src={signatureWhite} alt="" className='opacity-80 w-48' />
                    </motion.div>

                    <Typed
                        strings={[
                            "Copyright © All rights reserved by NEYAZ "
                        ]}
                        typeSpeed={170}
                        backSpeed={10}
                        loop
                    />

                    {/* <p>Copyright {(new Date().getFullYear())} © All rights reserved by NEYAZ </p> */}
                </div>
                <div>
                    <span class="footer-title">Social</span>
                    <div class="grid grid-flow-col items-center gap-4">

                        <a href='https://www.facebook.com/neyaznafiz/' target='_blank'>
                            <BsFacebook className='text-[30px]' />
                        </a>

                        <a href='https://twitter.com/neyaznafiz' target='_blank'>
                            <AiFillTwitterCircle className='text-[35px]' />
                        </a>

                        <a href='https://www.instagram.com/beingexist/' target='_blank'>
                            <TiSocialInstagramCircular className='text-[40px]' />
                        </a>

                    </div>
                </div>
            </footer>

        </div>
    );
};

export default Footer;
