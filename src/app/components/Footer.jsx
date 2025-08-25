"use client";   
import React, { useContext, useEffect, useState } from 'react';
import { assets } from '@/assets/assets';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronsRight } from 'lucide-react';
import { motion } from 'motion/react';
import { AjContext } from '../context/AjContext';


const Footer = () => {

    const { projectsHome, servicesHome, socialMedia } = useContext(AjContext);

    const [proj, setProj] = useState([]);
    const [serv, setServ] = useState([]);
    const [media, setMedia] = useState([]);

    useEffect(()=> {
        setProj(projectsHome);
        setServ(servicesHome);
        setMedia(socialMedia);
    }, [proj, serv, media]);

    return (

        <>

            <section className="w-full">
                <div style={{backgroundImage: `url(${assets.homeHeroSectionImg.src})`}} className='bg-center bg-cover bg-no-repeat'>
                    <div className='bg-white/20 backdrop-blur-lg flex flex-col items-center justify-center pt-10'>
                        <div className='w-full px-5'>
                            <div className='w-full flex flex-col items-start md:grid md:grid-cols-2 lg:grid-cols-5 gap-10 p-5'>
                                <motion.div initial={{y: 20, opacity: 0}} whileInView={{y: 20, opacity: 1}} transition={{duration: 0.6, delay: 0.3}} className='w-full col-span-2 lg:col-span-1'>
                                    <Link href='/' className="flex items-center">
                                        <Image src={assets.logo} className="w-[100px]" alt="Logo" />
                                        <p className="text-4xl font-normal text-shadow">Ajith</p>
                                    </Link>
                                </motion.div>
                                <div className='w-full'>
                                    <motion.p initial={{y: 20, opacity: 0}} whileInView={{y: 20, opacity: 1}} transition={{duration: 0.6, delay: 0.3}} className='text-xl font-medium border-b-2 border-rgb w-max'>Navigation</motion.p>
                                    <motion.div initial={{y: 20, opacity: 0}} whileInView={{y: 20, opacity: 1}} transition={{duration: 0.6, delay: 0.3}} className='pt-3'>
                                        <Link href='/' className='text-md font-medium flex items-center gap-1 left-0 hover:translate-x-1.5 transition-all duration-500'>
                                            <ChevronsRight className='text-blue-900' />
                                            Home
                                        </Link>
                                        <Link href='/projects' className='text-md font-medium flex items-center gap-1 left-0 hover:translate-x-1.5 transition-all duration-500'>
                                            <ChevronsRight className='text-blue-900' />
                                            Projects
                                        </Link>
                                        <Link href='/services' className='text-md font-medium flex items-center gap-1 left-0 hover:translate-x-1.5 transition-all duration-500'>
                                            <ChevronsRight className='text-blue-900' />
                                            Services
                                        </Link>
                                        <Link href='/about' className='text-md font-medium flex items-center gap-1 left-0 hover:translate-x-1.5 transition-all duration-500'>
                                            <ChevronsRight className='text-blue-900' />
                                            About me
                                        </Link>
                                        <Link href='/get-in-touch' className='text-md font-medium flex items-center gap-1 left-0 hover:translate-x-1.5 transition-all duration-500'>
                                            <ChevronsRight className='text-blue-900' />
                                            Contact me
                                        </Link>
                                    </motion.div>
                                </div>
                                <div className='w-full'>
                                    <motion.p initial={{y: 20, opacity: 0}} whileInView={{y: 20, opacity: 1}} transition={{duration: 0.6, delay: 0.3}} className='text-xl font-medium border-b-2 border-rgb w-max'>Projects</motion.p>
                                    <motion.div initial={{y: 20, opacity: 0}} whileInView={{y: 20, opacity: 1}} transition={{duration: 0.6, delay: 0.3}} className='flex flex-col items-start justify-center gap-0.5 pt-3'>
                                        {
                                            proj.map((item)=> (
                                                <Link key={item.id} href={`/projects/${item.slug}`} className='text-md font-medium flex items-center gap-1 left-0 hover:translate-x-1.5 transition-all duration-500'>
                                                    <ChevronsRight className='text-blue-900' />
                                                    {item.name}
                                                </Link>
                                            ))
                                        }
                                    </motion.div>
                                </div>
                                <div className='w-full'>
                                    <motion.p initial={{y: 20, opacity: 0}} whileInView={{y: 20, opacity: 1}} transition={{duration: 0.6, delay: 0.3}} className='text-xl font-medium border-b-2 border-rgb w-max'>Services</motion.p>
                                    <motion.div initial={{y: 20, opacity: 0}} whileInView={{y: 20, opacity: 1}} transition={{duration: 0.6, delay: 0.3}} className='flex flex-col items-start justify-center gap-0.5 pt-3'>
                                        {
                                            serv.map((item)=> (
                                                <Link href='/services' key={item.id} className='text-md font-medium flex items-center gap-1 left-0 hover:translate-x-1.5 transition-all duration-500'>
                                                    <ChevronsRight className='text-blue-900' />
                                                    {item.title}
                                                </Link>
                                            ))
                                        }
                                    </motion.div>
                                </div>
                                <div className='w-full'>
                                    <motion.p initial={{y: 20, opacity: 0}} whileInView={{y: 20, opacity: 1}} transition={{duration: 0.6, delay: 0.3}} className='text-xl font-medium border-b-2 border-rgb w-max'>Contact</motion.p>
                                    <motion.div initial={{y: 20, opacity: 0}} whileInView={{y: 20, opacity: 1}} transition={{duration: 0.6, delay: 0.3}} className='flex flex-col items-start justify-center gap-0.5 pt-3'>
                                        {
                                            media.map((item)=> {
                                                const Icon = item.icon;
                                                return (
                                                    <a href={item.url} key={item.id} target='_blank' className='text-md font-medium flex items-center gap-1 left-0 hover:translate-x-1.5 transition-all duration-500'>
                                                        <Icon className='text-blue-900' />
                                                        {item.name}
                                                    </a>
                                                )
                                            })
                                        }
                                    </motion.div>
                                </div>
                            </div>
                        </div>
                        <motion.div initial={{y: 20, opacity: 0}} whileInView={{y: 20, opacity: 1}} transition={{duration: 0.6, delay: 0.3}} className='w-full text-center border-t-2 border-blue-900 my-10 p-5'>
                            <p>&copy;&nbsp;<span>{new Date().getFullYear()}</span>&nbsp;Ajith D. All rights reserved. Coded with passion, powered by Next.Js</p>
                        </motion.div>
                    </div>
                </div>
            </section>


        </>
    
    );

};

export default Footer;