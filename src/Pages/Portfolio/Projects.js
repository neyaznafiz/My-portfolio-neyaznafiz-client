import React from 'react';
import Projectone from '../../Assets/projectone.png'
import Projecttwo from '../../Assets/projecttwo.png'
import Projectthree from '../../Assets/projectthree.png'
import Projectfour from '../../Assets/projectfour.png'
import Projectfive from '../../Assets/projectfive.png'
import Projectsix from '../../Assets/projectsix.png'
import Particle from '../../Style/Particle';

const Projects = () => {
    return (
        <div>
            <section class="overflow-hidden md:pb-0 h-full md:h-screen">
                {/* <Particle></Particle> */}
                <div class="container px-5 py-10 mx-auto pt-10 lg:pt-24">

                    <div class="md:flex gap-6 -m-1 md:-m-2">

                        <div class="md:flex md:flex-wrap gap-5 md:w-1/2">

                            <div class="w-full p-1 md:p-2">
                                <div class="dropdown dropdown-hover h-full">
                                    <img alt="gallery" class="btn block object-cover object-center w-full h-full rounded-lg hover:scale-110 transition duration-300 ease-in-out"
                                        src={Projectone} tabindex="0" />

                                    <div tabindex="0" class="dropdown-content menu p-2 shadow bg-[#014b4d] rounded-box w-80 md:w-96 h-96">
                                        <li><a>Item 1</a></li>
                                        <li><a>Item 2</a></li>
                                    </div>
                                </div>
                            </div>

                            <div class="w-full p-1 md:p-2">
                                <div class="dropdown dropdown-hover h-full">
                                    <div tabindex="0" class="dropdown-content menu p-2 shadow bg-[#014b4d] rounded-box w-80 md:w-96 h-96">
                                        <li><a>Item 1</a></li>

                                    </div>

                                    <img alt="gallery" class="btn block object-cover object-center w-full h-full rounded-lg hover:scale-110 transition duration-300 ease-in-out"
                                        src={Projectthree} tabindex="0" />
                                </div>
                            </div>

                        </div>

                        <div class="md:flex md:flex-wrap md:w-1/2">

                            <div class="w-full p-1 md:p-2">
                                <div class="dropdown dropdown-hover h-full">
                                    <img alt="gallery" class="btn block object-cover object-center w-full h-full rounded-lg hover:scale-110 transition duration-300 ease-in-out"
                                        src={Projecttwo} tabindex="0" />

                                    <div tabindex="0" class="dropdown-content menu p-2 shadow bg-[#014b4d] rounded-box w-80 md:w-96 h-96">
                                        <li><a>Item 1</a></li>
                                        <li><a>Item 2</a></li>
                                    </div>
                                </div>
                            </div>

                            <div class="md:w-1/2 p-1 md:p-2 hover:mb-48 hover:md:mb-0">
                                <div class="dropdown dropdown-hover h-full">
                                    <img alt="gallery" class="btn block object-cover object-center w-full h-full rounded-lg hover:scale-110 transition duration-300 ease-in-out"
                                        src={Projectfive} tabindex="0" />

                                    <div tabindex="0" class="dropdown-content menu p-2 shadow bg-[#014b4d] rounded-box w-80 md:w-96 h-96">
                                        <li><a>Item 1</a></li>
                                        <li><a>Item 2</a></li>
                                    </div>
                                </div>
                            </div>


                            <div class="md:w-1/2 p-1 md:p-2 hover:mb-48 hover:md:mb-0">
                                <div class="dropdown dropdown-hover h-full">
                                    <img alt="gallery" class="btn block object-cover object-center w-full h-full rounded-lg hover:scale-110 transition duration-300 ease-in-out"
                                        src={Projectsix} tabindex="0" />

                                    <div tabindex="0" class="dropdown-content menu p-2 shadow bg-[#014b4d] rounded-box w-80 md:w-96 h-96">
                                        <li><a>Item 1</a></li>
                                        <li><a>Item 2</a></li>
                                    </div>
                                </div>
                            </div>


                            <div class="w-full p-1 md:p-2 hover:mb-48 hover:md:mb-0">
                                <div class="dropdown dropdown-hover h-full">
                                    <div tabindex="0" class="dropdown-content menu p-2 shadow bg-[#014b4d] rounded-box w-80 md:w-96 h-96">
                                        <li><a>Item 1</a></li>
                                        <li><a>Item 2</a></li>
                                    </div>

                                    <img alt="gallery" class="btn block object-cover object-center w-full h-full rounded-lg hover:scale-110 transition duration-300 ease-in-out"
                                        src={Projectfour} tabindex="0" />
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Projects;