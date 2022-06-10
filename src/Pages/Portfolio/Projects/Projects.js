import React, { useEffect, useState } from 'react';
import axios from 'axios';
import DisplayAllProjects from './DisplayAllProjects';

const Projects = () => {

    const [myProjects, setMyProjects] = useState([])
    console.log(myProjects)


    useEffect(() => {
        axios.get('http://localhost:4000/project')
            .then(res => {
                const { data } = res
                setMyProjects(data);
            })
    }, [])


    return (
        <div>

            {
                myProjects.map(project => <DisplayAllProjects
                    key={project._id}
                    project={project}
                />)
            }
        </div>
    );
};

export default Projects;