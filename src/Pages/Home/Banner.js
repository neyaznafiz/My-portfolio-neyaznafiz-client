import { motion } from 'framer-motion';
import React from 'react';
import neyaz from '../../Assets/neyaz.png'

const Banner = () => {
    return (
        <motion.div class=" pt-20"
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        >
            <div class="hero-content flex-col lg:flex-row-reverse ">
                <img src={neyaz} class="max-w-sm rounded-lg shadow-2xl" alt='' />
                <div>
                    <h1 class="text-5xl font-bold">Box Office News!</h1>
                    <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button class="btn btn-primary">Get Started</button>
                </div>
            </div>
        </motion.div>

    );
};

export default Banner;