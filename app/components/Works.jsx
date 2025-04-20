import { assets, workData } from '@/assets/assets';
import Image from 'next/image';
import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { motion } from "motion/react";

const Works = () => {
    return (
    
        <div id='works' className='w-full px-[12%] py-12 scroll-mt-12'>

            <motion.div initial={{y: 20, opacity: 0}} whileInView={{y: 0, opacity: 1}} transition={{duration: 0.6, delay: 0.3}} className='grid grid-cols-1 lg:grid-cols-2 text-center lg:text-start items-center'>
                <div>
                    <h4 className='mb-2 text-lg jetb'>Welcom to My Portfolio</h4>
                    <h2 className='text-5xl jetb'>My Core Services</h2>
                </div>
                <p className='md:max-w-xl mx-auto mt-5 mb-10 jetb'>From front-end interfaces to back-end architecture, I create seamless digital experiences that deliver real value. Feel free to explore my projects and get in touch if you'd like to collaborate.</p>
            </motion.div>
            
            <motion.div initial={{y: 20, opacity: 0}} whileInView={{y: 0, opacity: 1}} transition={{duration: 0.6, delay: 0.3}} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-4 gap-6 my-10">
                {workData.map(({title, description, bgImage}, index) => (
                    <div key={index} className="aspect-square bg-cover bg-center rounded-xl relative cursor-pointer group shadow-lg hover:scale-105 transition duration-500" style={{ backgroundImage: `url(${bgImage.src})` }}>
                        <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 w-11/12 bg-white bg-opacity-90 rounded-lg p-4 flex items-center justify-between gap-3 transition-all duration-500 group-hover:bottom-7">
                            <div>
                                <h2 className="text-sm font-semibold jetb">{title}</h2>
                                <p className="text-sm text-gray-600 jetb">{description}</p>
                            </div>
                            <div className="border rounded-full border-black w-6 aspect-square flex items-center justify-center group-hover:scale-120 transition duration-300">
                                <Image src={assets.send_icon} className="w-3" alt="Send icon" />
                            </div>
                        </div>
                    </div>
                ))}
            </motion.div>

             {/* <motion.a initial={{y: 20, opacity: 0}} whileInView={{y: 0, opacity: 1}} transition={{duration: 0.6, delay: 0.3}} href='' className="w-max flex items-center justify-center text-sm gap-3 bg-blue-950 jetb text-white rounded-xl shadow-lg px-5 py-2.5 mx-auto my-20 transition-transform duration-300 transform hover:rotate-y-12 hover:scale-105">
                View More
                <FaArrowRight className='w-4' />
             </motion.a> */}
            
        </div>
    
    );
};

export default Works;