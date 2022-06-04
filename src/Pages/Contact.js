import { motion } from 'framer-motion';
import React from 'react';
import { useForm } from 'react-hook-form';
import Footer from '../Components/Shared/Footer';
import '../Style/style.css'

const Contact = () => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <div>

            <div className=' md:pt-32 grid items-center md:px-60 px-10 '>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 2 }}
                    className='pb-4'>
                    <p className='text-5xl font-serif'>Contact Me</p>

                </motion.div>

                <form onSubmit={handleSubmit()}>

                    <div className='md:flex gap-x-5'>
                        {/* name */}
                        <motion.div
                            initial={{ x: -2000 }}
                            animate={{ x: -0 }}
                            transition={{ duration: 1.5, type: 'spring' }}
                            className="form-control w-full bg-transparent border-0">
                            {/* <label className="form-label text-white ">Your Name</label> */}
                            <input type="text"
                                placeholder='NAME'
                                className="input rounded-none w-full bg-transparent border border-white text-white"
                                {...register("name", {
                                    required: {
                                        value: true,
                                        message: 'Name is Required'
                                    }
                                })} />
                            <label className="label">
                                {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                            </label>

                        </motion.div>

                        {/* email */}
                        <motion.div
                            initial={{ x: 2000 }}
                            animate={{ x: 0 }}
                            transition={{ duration: 1.5, type: 'spring' }}
                            className="form-control w-full bg-transparent border-0">
                            {/* <label className="form-label text-white bg-inherit">Your Email</label> */}
                            <input type="email"
                                placeholder="EMAIL"
                                className="input rounded-none w-full bg-transparent border border-white  text-white"
                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: 'Email is Required'
                                    },
                                    pattern: {
                                        value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                        message: 'Provide a valid email please'
                                    }
                                })} />
                            <label className="label">
                                {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                                {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                            </label>

                        </motion.div>
                    </div>


                    {/* subject */}
                    <motion.div
                        initial={{ y: 900 }}
                        animate={{ y: 0 }}
                        transition={{ type: 'spring' }}
                        className="form-control w-full bg-transparent border-0">
                        {/* <label className="form-label text-white ">Subject</label> */}
                        <input type="text"
                            placeholder='SUBJECT'
                            className="input rounded-none w-full bg-transparent border border-white  text-white"
                            {...register("subject", {
                                required: {
                                    value: true,
                                    message: 'Subject is Required'
                                }
                            })} />
                        <label className="label">
                            {errors.subject?.type === 'required' && <span className="label-text-alt text-red-500">{errors.subject.message}</span>}
                        </label>

                    </motion.div>


                    {/* message */}
                    <motion.div
                        initial={{ y: 900 }}
                        animate={{ y: 0 }}
                        transition={{ delay: 0.2, type: 'spring' }}
                        className="form-control  bg-transparent border-0">
                        {/* <label className="label">
                        <span className="label-text">Message</span>
                    </label> */}
                        <textarea type="text" placeholder="MESSAGE" name="message" className="input rounded-none border-white h-[200px] bg-transparent"
                            {...register("message", {
                                required: {
                                    value: true,
                                    message: "Message is required",
                                },
                                minLength: {
                                    value: 20,
                                    message: "Your message must be 20 character",
                                },
                            })}
                        />
                        <label className="label">
                            {errors.message?.type === "required" && (
                                <span className="label-text-alt text-red-500">
                                    {errors.message.message}
                                </span>
                            )}
                            {errors.message?.type === "minLength" && (
                                <span className="label-text-alt text-red-500">
                                    {errors.message.message}
                                </span>
                            )}
                        </label>
                    </motion.div>


                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1, duration: 2 }}
                        className="flex justify-center">
                        <button type='submit' className='btn-selection type-2'> SEND MESSAGE </button>
                        {/* <input type="submit" value='SEND MESSAGE' className="shadow-light-btn" /> */}
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