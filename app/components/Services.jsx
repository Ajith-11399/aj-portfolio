import { assets, serviceData } from '@/assets/assets';
import Image from 'next/image';
import React from 'react';
import { motion } from "motion/react";

const Services = () => {
    return (
        <div id='services' className='w-full px-[12%] py-12 scroll-mt-20'>

            <motion.h4 initial={{y: 20, opacity: 0}} whileInView={{y: 0, opacity: 1}} transition={{duration: 0.6, delay: 0.3}} className='text-center mb-2 text-lg jetb'>What I Offer</motion.h4>
            <motion.h2 initial={{y: 20, opacity: 0}} whileInView={{y: 0, opacity: 1}} transition={{duration: 0.6, delay: 0.3}} className='text-center text-5xl jetb'>My Core Services</motion.h2>
            <motion.p initial={{y: 20, opacity: 0}} whileInView={{y: 0, opacity: 1}} transition={{duration: 0.6, delay: 0.3}} className='text-center max-w-2xl mx-auto mt-5 mb-12 jetb'>Since June 2023, I’ve been building web solutions driven by a lifelong passion for technology and a strong foundation in full-stack development.</motion.p>
            
            <motion.div initial={{y: 20, opacity: 0}} whileInView={{y: 0, opacity: 1}} transition={{duration: 0.6, delay: 0.3}} className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-4 gap-6 my-10'>
                { serviceData.map(({ icon, title, description, link}, index) => (
                    <div key={index} className='flex flex-col items-start p-4 rounded-xl shadow-lg hover:bg-[#fcf4ff] hover:-translate-y-2 duration-500'>
                        <Image src={icon} className='w-12 rounded-xl' alt='' />
                        <h3 className='text-lg my-4 text-gray-700'>{title}</h3>
                        <p className='text-sm text-gray-600 leading-5'>{description}</p>
                        <a className='flex items-center gap-2 text-sm mt-5' href={link}>
                            Read more 
                            <Image src={assets.right_arrow} className='w-4' alt='' />
                        </a>
                    </div>
                )) }
            </motion.div>

        </div>
    );
};

export default Services;