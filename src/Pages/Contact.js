import { motion } from 'framer-motion';
import React, { useRef } from 'react';
import Footer from '../Components/Shared/Footer';
import '../Style/style.css'
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';


const Contact = () => {


    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(

            'service_7emlryc',
            'template_829aly8',
            form.current,
            'OXrKX6qv6uRwwe5Dy'

        ).then((result) => {
            toast('Email Send', {
                icon: '✔️',
                duration: 4000,
                position: 'bottom-right',

                style: {
                    background: 'transparent',
                    color: '#fff',
                    border: '2px solid white',
                    marginBottom: '300px',
                    marginRight: '55px'
                },
            })
            console.log(result.text);
            console.log('message send');
        }, (error) => {

            console.log(error.text);
        });
    };

    return (
        <div>

            <div className=' md:pt-28 grid items-center md:px-60 px-10 '>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 2 }}
                    className='pb-4'>
                    <p className='text-5xl font-serif'>Contact Me</p>

                </motion.div>


                <form ref={form} onSubmit={sendEmail}>

                    <div className='md:flex gap-x-5'>

                        {/* name */}
                        <motion.div
                            initial={{ x: -2000 }}
                            animate={{ x: -0 }}
                            transition={{ duration: 1.5, type: 'spring' }}
                            className="htmlForm-control w-full bg-transparent border-0">

                            <input
                                type="text"
                                name="name"
                                placeholder='NAME'
                                className="input rounded-none w-full bg-transparent border border-white text-white text-lg"
                            />

                        </motion.div>

                        {/* email */}
                        <motion.div
                            initial={{ x: 2000 }}
                            animate={{ x: 0 }}
                            transition={{ duration: 1.5, type: 'spring' }}
                            className="htmlForm-control w-full bg-transparent border-0 mt-6 md:mt-0 lg:mt-0">

                            <input
                                type="email"
                                name="email"
                                placeholder='EMAIL'
                                className="input rounded-none w-full bg-transparent border border-white text-white text-lg"
                            />

                        </motion.div>

                    </div>

                    {/* subject */}
                    <motion.div
                        initial={{ y: 900 }}
                        animate={{ y: 0 }}
                        transition={{ type: 'spring' }}
                        className="htmlForm-control w-full bg-transparent border-0 my-6">

                        <input
                            type="text"
                            name="subject"
                            placeholder='SUBJECT'
                            className="input rounded-none w-full bg-transparent border border-white  text-white text-lg"
                        />

                    </motion.div>


                    {/* message */}
                    <motion.div
                        initial={{ y: 900 }}
                        animate={{ y: 0 }}
                        transition={{ delay: 0.2, type: 'spring' }}
                        className="form-control bg-transparent border-0 my-6">

                        <textarea
                            name="message"
                            placeholder="MESSAGE"
                            className="input rounded-none py-3 text-lg border-white h-[200px] bg-transparent "
                        />
                    </motion.div>

                    {/* submit button */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1, duration: 2 }}
                        className="flex justify-center mb-16">
                        <button type='submit' className='btn-selection type-2'> SEND MESSAGE </button>

                    </motion.div>

                </form>


            </div>

            <motion.div className=''
                initial={{ y: 300 }}
                animate={{ y: 20 }}
                transition={{ delay: 0.2, type: 'spring' }}
            >
                <Footer />
            </motion.div>

        </div>
    );
};

export default Contact;