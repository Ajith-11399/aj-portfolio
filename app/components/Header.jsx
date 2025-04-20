import { assets } from '@/assets/assets';
import Image from 'next/image';
import React from 'react';
import { FaArrowRight } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";
import { motion } from "motion/react";

const Header = () => {
    return (
            
            <div id='top' className='w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4'>

                <motion.div initial={{scale: 0}} whileInView={{scale: 1}} transition={{duration: 0.8, type: 'spring', stiffness: 100}} >
                    <Image src={assets.profile_img} className='rounded-full w-32' alt='' />
                </motion.div>

                <motion.h3 initial={{y: 20, opacity: 0}} whileInView={{y: 0, opacity: 1}} transition={{duration: 0.6, delay: 0.3}} className='flex items-end gap-2 text-xl md:text-2xl mb-3 jetb'>
                    Hi! I'm Ajith
                    <Image src={assets.hand_icon} className='w-6 wave-hover' alt='' />
                </motion.h3>

                <motion.h1 initial={{y: 20, opacity: 0}} whileInView={{y: 0, opacity: 1}} transition={{duration: 0.6, delay: 0.3}} className='text-3xl sm:text-6xl lg:text-[66px] jetb'>Fullstack Web Developer Based in Coimbatore</motion.h1>

                <motion.p initial={{y: 20, opacity: 0}} whileInView={{y: 0, opacity: 1}} transition={{duration: 0.6, delay: 0.3}} className='max-w-2xl mx-auto jetb'>
                    I’m Ajith D, a MERN Stack Developer, with hands-on experience in crafting modern, responsive web applications.
                </motion.p>

                <motion.div initial={{y: 20, opacity: 0}} whileInView={{y: 0, opacity: 1}} transition={{duration: 0.6, delay: 0.3}} className='flex flex-col sm:flex-row items-center gap-4 mt-4'>
                    
                    <motion.a 
                        whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}
                        href='#contact'
                        className='flex items-center text-sm gap-3 px-5 py-2.5 jetb rounded-xl shadow-lg ml-4 bg-blue-950 text-white '>
                        Contact Me
                        <FaArrowRight className='w-4' />
                    </motion.a>

                    <motion.a
                        whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} 
                        href='/AJ-resume.pdf' download 
                        className='flex items-center text-sm gap-3 px-5 py-2.5 jetb rounded-xl shadow-lg ml-4 bg-blue-950 text-white '>
                        My Resume
                        <FiDownload className='w-6' />
                    </motion.a>
                
                </motion.div>

            </div>

    );
};

export default Header;