import React from 'react';
import { useNavigate } from 'react-router-dom';
import { IoMdArrowRoundForward } from 'react-icons/io';
import Typed from "react-typed"

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
                        <p className='text-2xl font-semibold py-2'>{name}</p>
                        <p className='pt-3'>{info.slice(0, 400)} . . . .</p>

                        <div className='flex ml-20 items-center h-full pr-6'>

                            <div>
                                <button onClick={() => navigateToDetails(_id)} className="text-lg" > More Details </button>
                            </div>

                            <div>
                                <Typed
                                    strings={["❯ ❯ ❯"]}
                                    typeSpeed={200}
                                    backSpeed={10}
                                    loop
                                    className='text-lg pl-2' />
                            </div>
                        </div>
                    </div>

                    <img alt="gallery" className="btn block object-cover object-center w-full h-full rounded-lg hover:scale-110 transition duration-300 ease-in-out"
                        src={img1} tabIndex="0" />


                </div>
            </div>

            {/* <div className="w-full p-1 md:p-2 hover:mb-48 hover:lg:mb-52">
                                <div className="dropdown dropdown-hover h-full">
                                    <div tabIndex="0" className="dropdown-content menu p-2 shadow bg-[#014b4d] rounded-box w-80 md:w-96 h-96">
                                        <li><a>Item 1</a></li>
                                    </div>

                                    <img alt="gallery" className="btn block object-cover object-center w-full h-full rounded-lg hover:scale-110 transition duration-300 ease-in-out"
                                        src='https://i.ibb.co/6rpvStY/projectthree.png' tabIndex="0" />
                                </div>
                            </div> */}

            {/* </div> */}

            {/* <div className="md:flex md:flex-wrap md:w-1/2">

                            <div className="w-full p-1 md:p-2">
                                <div className="dropdown dropdown-hover h-full">
                                    <img alt="gallery" className="btn block object-cover object-center w-full h-full rounded-lg hover:scale-110 transition duration-300 ease-in-out"
                                        src='https://i.ibb.co/yWy0Lft/projecttwo.png' tabIndex="0" />

                                    <div tabIndex="0" className="dropdown-content menu p-2 shadow bg-[#014b4d] rounded-box w-80 md:w-96 h-96">
                                        <li><a>Item 1</a></li>
                                        <li><a>Item 2</a></li>
                                    </div>
                                </div>
                            </div>

                            <div className="md:w-1/2 p-1 md:p-2 hover:mb-48 hover:md:mb-0">
                                <div className="dropdown dropdown-hover h-full">
                                    <img alt="gallery" className="btn block object-cover object-center w-full h-full rounded-lg hover:scale-110 transition duration-300 ease-in-out"
                                        src='https://i.ibb.co/D1sCZss/projectfive.png' tabIndex="0" />

                                    <div tabIndex="0" className="dropdown-content menu p-2 shadow bg-[#014b4d] rounded-box w-80 md:w-96 h-96">
                                        <li><a>Item 1</a></li>
                                        <li><a>Item 2</a></li>
                                    </div>
                                </div>
                            </div>


                            <div className="md:w-1/2 p-1 md:p-2 hover:mb-48 hover:md:mb-0">
                                <div className="dropdown dropdown-hover h-full">
                                    <img alt="gallery" className="btn block object-cover object-center w-full h-full rounded-lg hover:scale-110 transition duration-300 ease-in-out"
                                        src='https://i.ibb.co/QfTsNLB/projectsix.png' tabIndex="0" />

                                    <div tabIndex="0" className="dropdown-content menu p-2 shadow bg-[#014b4d] rounded-box w-80 md:w-96 h-96">
                                        <li><a>Item 1</a></li>
                                        <li><a>Item 2</a></li>
                                    </div>
                                </div>
                            </div>


                            <div className="w-full p-1 md:p-2 hover:mb-48 hover:lg:mb-52">
                                <div className="dropdown dropdown-hover h-full">
                                    <div tabIndex="0" className="dropdown-content menu p-2 shadow bg-[#014b4d] rounded-box w-80 md:w-96 h-96">
                                        <li><a>Item 1wdffdf</a></li>
                                        <li><a>Item 2</a></li>
                                    </div>

                                    <img alt="gallery" className="btn block object-cover object-center w-full h-full rounded-lg hover:scale-110 transition duration-300 ease-in-out"
                                        src='https://i.ibb.co/vv3hWrd/projectfour.png' tabIndex="0" />
                                </div>
                            </div>

                        </div> */}
            {/* </div>
                </div> */}
            {/* </section>  */}

        </div>
    );
};

export default DisplayAllProjects;