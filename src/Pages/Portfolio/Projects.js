import React from 'react';
import Projectone from '../../Assets/projectone.png'
import Projecttwo from '../../Assets/projecttwo.png'

const Projects = () => {
    return (
        <div>

             <section class="overflow-hidden text-gray-700">
                <div class="container px-5 py-2 mx-auto lg:pt-24">
                    <div class="flex flex-wrap -m-1 md:-m-2">
                        <div class="flex flex-wrap w-1/2">
                            <div class="w-1/2 p-1 md:p-2">
                                <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg hover:scale-110 transition duration-300 ease-in-out"
                                    src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(70).webp"/>
                            </div>
                            <div class="w-1/2 p-1 md:p-2">
                                <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg hover:scale-110 transition duration-300 ease-in-out"
                                    src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(72).webp"/>
                            </div>
                            <div class="w-full p-1 md:p-2">
                                <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg hover:scale-110 transition duration-300 ease-in-out"
                                    src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp"/>
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
                                    src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(77).webp"/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Projects;