import React from 'react';
import { MdOutlineKeyboardDoubleArrowRight } from 'react-icons/md';
import { motion } from 'motion/react';


const CTA = ({ title, subTitle, link, img }) => {
    
    return (
    
        <motion.div initial={{y: 20, opacity: 0}} whileInView={{y: 20, opacity: 1}} transition={{duration: 0.6, delay: 0.3}} className="max-w-6xl w-full bg-rgb rounded-2xl shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-5 items-center justify-center text-shadow-none gap-10 py-5 md:p-10 xl:p-12">
                <motion.div initial={{y: 20, opacity: 0}} whileInView={{y: 20, opacity: 1}} transition={{duration: 0.6, delay: 0.3}} className='flex flex-col lg:col-span-3 text-center lg:text-start items-center lg:items-start'>
                    <p className='max-w-md text-4xl py-3'>{title}</p>
                    <p className='max-w-xl text-base text-white/90 font-medium pb-6'>{subTitle}</p>
                    <a href={link} target='_blank' className='w-fit flex items-center text-center gap-2 bg-white px-10 py-3 rounded-2xl text-blue-950'>
                        visit site <MdOutlineKeyboardDoubleArrowRight size={25} className='transition-all duration-500 hover:translate-x-2' />
                    </a>
                </motion.div>
                <motion.a href={link} initial={{y: 20, opacity: 0}} whileInView={{y: 20, opacity: 1}} transition={{duration: 0.6, delay: 0.3}} target='_blank' className='lg:col-span-2'>
                    <img src={img} className='rounded-2xl shadow-2xl' alt={title} />
                </motion.a>
            </div>
        </motion.div>
 
    );

};

export default CTA;