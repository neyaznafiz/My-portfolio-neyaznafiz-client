import React from 'react';

const About = () => {
    return (
        <div className='mt-16 mx-40'>

            <div className='border-l-2 pl-2'>
                <p className='text-4xl font-bold'>Neyaz Mobalik Nafiz</p>
                <p className='text-lg font-semibold pl-1'>Web Developer (MERN Stack)</p>
            </div>

            <div className='grid justify-end pt-16'>
                <p className='text-lg'>Dhaka, Bangladesh | (+880) 1303246616 </p>
                <p className='text-lg flex justify-end'> E-mail: neyaznafiz@outlook.com </p>
            </div>

            <div className='flex justify-center py-20'>
                <p className='w-[1080px] text-center text-xl'>I am a Web Developer With a good understanding of building modern dynamic websites and a love for React. I am a student of Computer Science and Technology. My future vision is I want to see myself in the future as a great programmer. My interest is in machine learning and ethical hacking. I hope, my hard work takes me to my goal. Ready to give my best to any aspiring.
                </p>
            </div>


            
                <div className='my-10'>
                    <p className='text-2xl font-bold my-3'>SKILLS</p>

                    <p className='pl-6 flex text-lg'>Comfortable:
                        <p className='text- pl-20'>
                            React | JavaScript | ES6 | CSS | Tailwind CSS | Bootstrap <br />
                            Framer Motion | NodeJS | ExpressJS | MongoDB <br />
                            Stripe | Firebase | Netlify | Heroku
                        </p>
                    </p>

                    <p className='pl-6 flex text-lg py-10'>Familiar:
                        <p className='text- pl-[143px]'>
                            React Native | NextJS | TypeScript <br />
                            Mongoose | Socket.io

                        </p>
                    </p>


                    <p className='pl-6 flex text-lg'>Tools:
                        <p className='text- pl-[163px]'>
                            Git | VS Code | Figma <br />
                            Chrome DevTools | React Developer Tools


                        </p>
                    </p>

                </div>
            

           

        </div>
    );
};

export default About;