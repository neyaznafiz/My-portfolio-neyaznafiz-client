import React from 'react';
import { useNavigate } from 'react-router-dom';

const Starting = ({children}) => {
    const navigate = useNavigate()
    navigate('/home')
    return (
        <div className='bg-neutral h-screen text-white'>
        <button onClick={navigate}>get started</button>
        </div>
    );
};

export default Starting;