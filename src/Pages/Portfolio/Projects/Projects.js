import React, { useEffect, useState } from 'react';
import axios from 'axios';
import DisplayAllProjects from './DisplayAllProjects';
import { motion } from 'framer-motion';

const Projects = () => {

    const [myProjects, setMyProjects] = useState([])
    // console.log(myProjects)


    useEffect(() => {
        axios.get('https://obscure-ridge-82105.herokuapp.com/project')
            .then(res => {
                const { data } = res
                setMyProjects(data);
            })
    }, [])


    return (
        <div className='flex justify-center'>
        <motion.div 
         initial={{ opacity: 0 }}
         animate={{ opacity: 1 }}
         transition={{ delay: 0.5, duration: 2 }}
        className='grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10 md:w-[1600px] py-20 px-6 md:px-10'>
            {
                myProjects.map(project => <DisplayAllProjects
                    key={project._id}
                    project={project}
                />)
            }
        </motion.div >
        </div>
    );
};

export default Projects;