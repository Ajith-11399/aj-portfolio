import { assets, infoList, toolsData } from '@/assets/assets';
import Image from 'next/image';
import React from 'react';
import { motion } from "motion/react";

const About = () => {
    return (
        
        <div id='about' className='w-full px-[10%] py-12 scroll-mt-20'>
            
            <motion.div initial={{y: 20, opacity: 0}} whileInView={{y: 0, opacity: 1}} transition={{duration: 0.6, delay: 0.3}} className='grid grid-cols-1 lg:grid-cols-2 text-center lg:text-start items-center'>
                <div>
                    <h4 className='mb-2 text-lg jetb'>A Little About Me</h4>
                    <h2 className='text-5xl jetb'>My Journey</h2>
                </div>
                <p className='md:max-w-xl mx-auto mt-5 jetb'>I’m Ajith D, a MERN Stack Developer focused on building responsive and modern full-stack web applications. I combine clean design with solid functionality to deliver impactful digital experiences.</p>
            </motion.div>

            <div className='flex w-full flex-col lg:flex-row items-center gap-20 my-20'>
                
                <motion.div initial={{y: 20, opacity: 0}} whileInView={{y: 0, opacity: 1}} transition={{duration: 0.6, delay: 0.3}} className='w-64 sm:w-96 rounded-3xl max-w-none shadow-lg hover:-translate-y-2 duration-500'>
                    <Image src={assets.aj_img} className='w-full rounded-3xl' alt='user' />
                </motion.div>

                <motion.div initial={{y: 20, opacity: 0}} whileInView={{y: 0, opacity: 1}} transition={{duration: 0.6, delay: 0.3}} className='flex flex-col'>
                    <ul className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-3 gap-6 max-w-2xl jetb'>
                        {infoList.map(({icon, title, description}, index) => (
                            <li key={index} className='rounded-xl p-6 cursor-pointer shadow-lg hover:bg-[#fcf4ff] hover:-translate-y-2 duration-500'>
                                <Image className='w-7' src={icon} alt={title} />
                                <h3 className='my-4 font-bold text-gray-700'>{title}</h3>
                                <p className='text-gray-600 text-sm'>{description}</p>
                            </li>
                        ) )}
                    </ul>

                    {/* Tools */}
                    <h4 className='my-6 text-gray-700 jetb font-bold text-center lg:text-start'>Tools I Use</h4>
                    <ul className='flex items-center justify-center lg:justify-start gap-3 sm:gap-5'>
                        {toolsData.map((tool, index) => (
                            <li key={index} className='flex items-center justify-center w-12 sm:w-14 aspect-square rounded-lg cursor-pointer shadow-lg hover:bg-[#fcf4ff] hover:-translate-y-2 duration-500'>
                                <Image src={tool} className='w-5 sm:w-7' alt="" />
                            </li>
                        ))}
                    </ul>
                </motion.div>
            
            </div>
        
        </div>
    
    );
};

export default About;