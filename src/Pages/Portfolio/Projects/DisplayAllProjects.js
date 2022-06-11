import React from 'react';
import { useNavigate } from 'react-router-dom';
import { IoMdArrowRoundForward } from 'react-icons/io';
import Typed from "react-typed";

const DisplayAllProjects = ({ project }) => {

    const { _id, name, info, img1 } = project

    const navigate = useNavigate()
    const navigateToDetails = id => {
        navigate(`${_id}`)
    }

    return (
        <div>

            <div className="">
                <div className="dropdown dropdown-hover h-full">

                    <div tabIndex="0" className="dropdown-content menu p-5 shadow bg-[#014b4d] rounded-box w-80 md:w-96 h-96">

                        <p className='text-2xl font-semibold py-2'>
                            {name}
                        </p>

                        <p className='pt-3'>{info.slice(0, 400)} . . . .</p>

                        <div className='flex ml-20 items-center h-full pr-6'>


                            <button onClick={() => navigateToDetails(_id)} className="text-lg font-semibold hover:text-gray-400" > MORE DETAILS </button>

                            <Typed
                                strings={["❯ ❯ ❯"]}
                                typeSpeed={200}
                                backSpeed={10}
                                loop
                                className='text-lg pl-2' />

                        </div>
                    </div>

                    <img alt="gallery" className="btn block object-cover object-center w-full h-full rounded-lg hover:scale-110 transition duration-300 ease-in-out"
                        src={img1} tabIndex="0" />


                </div>
            </div>

        </div >
    );
};

export default DisplayAllProjects;