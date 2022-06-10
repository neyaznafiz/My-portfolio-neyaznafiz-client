import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const SingleProjectInfo = () => {

    const { Id } = useParams()

    const [projectDetails, setProjectDetails] = useState({})
    // console.log(projectDetails);

    const { name, img1, img2, img3, img4, info, features, technologies } = projectDetails

    useEffect(() => {
        axios.get(`https://obscure-ridge-82105.herokuapp.com/project/${Id}`)
            .then(res => {
                const { data } = res
                setProjectDetails(data);
                // console.log(data);
            })
    }, [Id])

    return (
        <div className='bg-[#014b4d] bg-opacity-80 py-16 px-4 md:px-40'>







            {/* <div class="w-1/2 p-1 md:p-2">
                                <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
                                    src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(70).webp" />
                            </div>

                            <div class="w-1/2 p-1 md:p-2">
                                <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
                                    src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(72).webp" />
                            </div> */}

            <div class="w-3/7 p-1 md:p-2">

                {img2 &&
                    <div>
                        <img alt="gallery" class=" w-[233] h-80  md:w-[465] md:h-[872px] rounded-lg"
                            src={img2} />
                    </div>
                }

                {img3 &&
                    <div>
                        <img alt="gallery" class="w-[233] h-80  md:w-[465] md:h-[872px] rounded-lg"
                            src={img3} />
                    </div>
                }

                {img4 &&
                    <div>
                        <img alt="gallery" class=" w-[233] h-80  md:w-[465] md:h-[872px] rounded-lg"
                            src={img4} />
                    </div>
                }

                {img1 &&
                    <div>
                        <img alt="gallery" class=" w-[233] h-80  md:w-[465] md:h-[872px] rounded-lg"
                            src={img1} />
                    </div>
                }
            </div>

            <p>{name}</p>
            <p>{features?.one}</p>
        </div>
    );
};

export default SingleProjectInfo;