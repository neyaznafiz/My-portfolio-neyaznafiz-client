import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const SingleProjectInfo = () => {

    const { Id } = useParams()

    const [projectDetails, setProjectDetails] = useState({})
    // console.log(projectDetails);

    const { name, img1, img2, img3, img4, info, features, technologies } = projectDetails
    const projectName = "Fashion Flavour"


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

            <div>
                <p className='text-5xl font-semibold tracking-wider'>{name}</p>
            </div>

            <div>

                <div class="flex justify-around gap-x-10 mt-10">

                    <div className=''>

                        {img2 ?
                            <div className=''>
                                <img alt="gallery" class=" w-[233] h-80  md:w-[440px] md:h-[872px] rounded-lg mb-10"
                                    src={img2} />
                            </div>
                            :
                            <div>
                                <img alt="gallery" class=" w-[233] h-80  rounded-lg"
                                    src={img1} />
                            </div>
                        }

                    </div>

                    <div className='w-[800px]'>
                        {projectName == name ?
                            <div>
                                <img alt="gallery" class=" md:h-[872px] rounded-lg"
                                    src={img3} />
                            </div>
                            :
                            <div>
                                <p>{info}</p>
                                <p>{technologies}</p>
                            </div>
                        }
                    </div>
                </div>

            </div>

            <div className='flex justify-between'>

                <div className={`${!img4 && 'w-full'}`}>
                    {projectName !== name ?
                        <div className='flex justify-end'>
                            {img3 &&
                                <div className=''>
                                    <img alt="gallery" className=" h-80 rounded-lg"
                                        src={img3} />
                                </div>
                            }
                        </div>
                        :
                        <div>
                            <p>{info}</p>
                            <p>{technologies}</p>
                        </div>
                    }
                </div>


                {img4 &&
                    <div>
                        <img alt="gallery" class=" h-80 rounded-lg"
                            src={img4} />
                    </div>
                }

                {/* {img1 &&
                    <div>
                        <img alt="gallery" class=" h-80 rounded-lg"
                            src={img1} />
                    </div>
                } */}
            </div>
        </div>
    );
};

export default SingleProjectInfo;