import React from 'react';
import { RiNextjsFill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { LuMapPinned } from "react-icons/lu";
import { motion } from "motion/react";


const Footer = () => {
    return (
        <div className='mt-20 border-t-1 border-t-blue-950'>
            <div className='text-center'>
                
                <div className='w-full px-[8%] py-12 scroll-mt-20 sm:flex items-center justify-between'>
                    
                    {/* Branding */}
                    <motion.div initial={{y: 20, opacity: 0}} whileInView={{y: 0, opacity: 1}} transition={{duration: 0.6, delay: 0.3}} className='my-20 sm:my-10'>
                        <a href="#top"><h1 className='text-5xl sm:text-4xl mont font-bold mont hover:transform hover:scale-110 transition duration-300'>AJITH.</h1></a>
                    </motion.div>
                    
                    {/* Contact & Connect */}
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>

                        {/* Connect */}
                        <motion.div initial={{y: 20, opacity: 0}} whileInView={{y: 0, opacity: 1}} transition={{duration: 0.6, delay: 0.3}}>
                            <h4 className='w-max text-md jetb font-bold border-b-1'>Find Me Online</h4>
                            <div  className='flex items-center gap-2'>
                                <a className='flex items-center jetb mt-2 hover:transform hover:scale-110 transition duration-300' href="https://github.com/Ajith-11399" target='_blank' rel="noopener noreferrer">
                                    <FaGithub className='mr-1 w-6 h-6' />
                                </a>
                                <a className='flex items-center jetb mt-2 hover:transform hover:scale-110 transition duration-300' href="https://www.linkedin.com/in/ajith11399" target='_blank' rel="noopener noreferrer">
                                    <FaLinkedin className='mr-1 w-6 h-6' />
                                </a>
                            </div>
                        </motion.div>

                        {/* Location */}
                        <motion.div initial={{y: 20, opacity: 0}} whileInView={{y: 0, opacity: 1}} transition={{duration: 0.6, delay: 0.3}}>
                            <h4 className='w-max text-md jetb font-bold border-b-1'>Hometown</h4>
                            <a className='flex items-center text-sm jetb mt-2' href="https://maps.app.goo.gl/TU41GRHgfXSfLmd19" target='_blank' rel="noopener noreferrer">
                                <LuMapPinned className='mr-1 w-6 h-6 hover:transform hover:scale-110 transition duration-300' />
                                Pollachi
                            </a>
                        </motion.div>

                        {/* Contact */}
                        <motion.div initial={{y: 20, opacity: 0}} whileInView={{y: 0, opacity: 1}} transition={{duration: 0.6, delay: 0.3}}>
                            <h4 className='w-max text-md jetb font-bold border-b-1'>Stay in Touch</h4>
                            <a className='flex items-center text-sm jetb mt-2' href="mailto:ajithironmark42@gmail.com" target='_blank' rel="noopener noreferrer">
                                <MdEmail className='mr-1 w-6 h-6 hover:transform hover:scale-110 transition duration-300' />
                                ajithironmark42@gmail.com
                            </a>
                        </motion.div>
                    </div>
                            
                </div>

                <motion.div initial={{y: 20, opacity: 0}} whileInView={{y: 0, opacity: 1}} transition={{duration: 0.6, delay: 0.3}} className='flex items-center justify-center'>
                    <hr className='w-11/12' />
                </motion.div>

                <motion.div initial={{y: 20, opacity: 0}} whileInView={{y: 0, opacity: 1}} transition={{duration: 0.6, delay: 0.3}} className='flex items-center justify-center py-5'>
                    <p className=' text-sm text-gray-700 jetb'>&copy;&nbsp;{new Date().getFullYear()}&nbsp;AJITH. All rights reserved. Coded with passion, powered by Next.Js</p>
                    <RiNextjsFill className='ml-1' /> .
                </motion.div>
                
            </div>  
        </div>
    );
};

export default Footer;