import React from 'react';
import { useParams } from 'react-router-dom';

const SingleProjectInfo = () => {

    const { Id } = useParams()
    return (
        <div>
            <p>{Id}</p>
        </div>
    );
};

export default SingleProjectInfo;