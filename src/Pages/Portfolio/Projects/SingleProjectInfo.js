import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const SingleProjectInfo = () => {

    const { Id } = useParams()

    const [projectDetails, setProjectDetails] = useState({})
    // console.log(projectDetails);

    const {name, }= projectDetails

    useEffect(() => {
        axios.get(`http://localhost:4000/project/${Id}`)
            .then(res => {
                const { data } = res
                setProjectDetails(data);
                // console.log(data);
            })
    }, [Id])

    return (
        <div>
           <p>{name}</p>
        </div>
    );
};

export default SingleProjectInfo;