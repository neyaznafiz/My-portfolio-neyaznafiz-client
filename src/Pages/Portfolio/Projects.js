import React from 'react';
import Projectone from '../../Assets/projectone.png'
import Projecttwo from '../../Assets/projecttwo.png'
import Projectthree from '../../Assets/projectthree.png'
import Projectfour from '../../Assets/projectfour.png'
import Projectfive from '../../Assets/projectfive.png'
import Projectsix from '../../Assets/projectsix.png'

const Projects = () => {
    return (
        <div>

             <section class="overflow-hidden text-gray-700">
                <div class="container px-5 py-2 mx-auto lg:pt-24">
                    <div class="flex flex-wrap -m-1 md:-m-2">
                        <div class="flex flex-wrap w-1/2">
                            <div class="w-1/2 p-1 md:p-2">
                                <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg hover:scale-110 transition duration-300 ease-in-out"
                                    src={Projectthree}/>
                            </div>
                            <div class="w-1/2 p-1 md:p-2">
                                <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg hover:scale-110 transition duration-300 ease-in-out"
                                    src={Projectfive}/>
                            </div>
                            <div class="w-full p-1 md:p-2">
                                <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg hover:scale-110 transition duration-300 ease-in-out"
                                    src={Projectfour}/>
                            </div>
                        </div>
                        <div class="flex flex-wrap w-1/2">
                            <div class="w-full p-1 md:p-2">
                                <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg hover:scale-110 transition duration-300 ease-in-out"
                                    src={Projectone}/>
                            </div>
                            <div class="w-1/2 p-1 md:p-2">
                                <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg hover:scale-110 transition duration-300 ease-in-out"
                                    src={Projecttwo}/>
                            </div>
                            <div class="w-1/2 p-1 md:p-2">
                                <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg hover:scale-110 transition duration-300 ease-in-out"
                                    src={Projectsix}/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Projects;