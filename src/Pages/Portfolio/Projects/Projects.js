import React, { useEffect, useState } from 'react';
import axios from 'axios';
import DisplayAllProjects from './DisplayAllProjects';

const Projects = () => {

    const [myProjects, setMyProjects] = useState([])
    // console.log(myProjects)


    useEffect(() => {
        axios.get('http://localhost:4000/project')
            .then(res => {
                const { data } = res
                setMyProjects(data);
            })
    }, [])


    return (
        <div className='flex justify-center'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10 md:w-[1600px] py-20 px-6 md:px-10'>
            {
                myProjects.map(project => <DisplayAllProjects
                    key={project._id}
                    project={project}
                />)
            }
        </div >
        </div>
    );
};

export default Projects;