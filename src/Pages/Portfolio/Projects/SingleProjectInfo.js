import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const SingleProjectInfo = () => {

    const { Id } = useParams()

    const [projectDetails, setProjectDetails] = useState({})
    // console.log(projectDetails);

    const { name, img1, img2, img3, img4, info, features, technologies, codelink, livelink } = projectDetails

    const ff = "Fashion Flavour"
    const td = "The developer"


    useEffect(() => {
        axios.get(`https://obscure-ridge-82105.herokuapp.com/project/${Id}`)
            .then(res => {
                const { data } = res
                setProjectDetails(data);
                // console.log(data);
            })
    }, [Id])

    return (
        <div className='bg-[#014b4d] bg-opacity-90 my-5 py-20 px-4 md:px-40'>

            <div>
                <p className='text-5xl font-semibold tracking-wider'>{name}</p>
            </div>

            <div>

                <div class={`flex ${ff == name && "justify-center"} ${ff !== name && "justify-around"} gap-x-10 mt-10`}>

                    <div className=''>

                        {img2 ?
                            <div className=''>
                                <img alt="gallery" className={`w-[233] h-80 md:h-[872px] ${td !== name && "md:w-[440px]"} ${td == name && "md:w-[540px]"} ${ff == name && "md:w-full"} rounded-lg mb-10`}
                                    src={img2} />
                            </div>
                            :
                            <div>
                                <img alt="gallery" class=" w-[233] h-80  rounded-lg"
                                    src={img1} />
                            </div>
                        }

                    </div>

                    <div className='w-1/2 flex justify-end'>
                        {ff == name ?
                            <div>
                                <img alt="gallery" class=" md:h-[872px] rounded-lg"
                                    src={img3} />
                            </div>
                            :
                            <div className=''>
                                <div className='text-center mb-8 text-xl'>
                                    <p>{info}</p>
                                </div>

                                <div>
                                    <p className='text-xl font-semibold tracking-wide'>Features :</p>

                                    <div className='ml-10 grid gap-y-'>
                                        <p>{features?.one}</p>
                                        <p>{features?.two}</p>
                                        <p>{features?.three}</p>
                                        <p>{features?.fous}</p>
                                        <p>{features?.five}</p>
                                        <p>{features?.six}</p>
                                        <p>{features?.seven}</p>
                                        <p>{features?.eight}</p>
                                    </div>
                                </div>

                                <div className='mt-5'>
                                    <p className='text-xl font-semibold tracking-wide'>Technologies Used : </p>
                                    <p className='ml-10 text-'>{technologies}</p>
                                </div>

                                <div className='grid md:flex justify-center md:gap-x-12 py-4 md:py-14 text-xl '>
                                    <a href={livelink} target='_blank' className='btn2-selection type-2'>Live Link</a>
                                    <a href={codelink} target='_blank' className='btn2-selection type-2'>Code Link</a>
                                </div>
                            </div>
                        }
                    </div>
                </div>

            </div>

            <div className='flex justify-between'>

                <div className={`${!img4 && 'w-full'}`}>
                    {ff !== name ?
                        <div className='flex justify-end'>
                            {img3 &&
                                <div className=''>
                                    <img alt="gallery" className=" h-80 rounded-lg"
                                        src={img3} />
                                </div>
                            }
                        </div>
                        :
                        <div className='p-10'>

                            <div className='grid md:flex justify-center md:gap-x-12 py-4 md:py-14 text-xl '>
                                <a href={livelink} target='_blank' className='btn2-selection type-2'>Live Link</a>
                                <a href={codelink} target='_blank' className='btn2-selection type-2'>Code Link</a>
                            </div>
                            <div className='text-center mb-8 text-xl'>
                                <p>{info}</p>
                            </div>

                            <div>
                                <p className='text-xl font-semibold tracking-wide'>Features :</p>

                                <div className='ml-10 grid gap-y-'>
                                    <p>{features?.one}</p>
                                    <p>{features?.two}</p>
                                    <p>{features?.three}</p>
                                    <p>{features?.fous}</p>
                                    <p>{features?.five}</p>
                                    <p>{features?.six}</p>
                                    <p>{features?.seven}</p>
                                    <p>{features?.eight}</p>
                                </div>
                            </div>

                            <div className='mt-5'>
                                <p className='text-xl font-semibold tracking-wide'>Technologies Used : </p>
                                <p className='ml-10 text-'>{technologies}</p>
                            </div>
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