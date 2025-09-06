"use client"
import React, { useContext, useEffect, useState } from 'react';
import { assets, projectsHome, servicesHome } from '@/assets/assets';
import Link from 'next/link';
import { ChevronsRight, FileDown } from 'lucide-react';

import ContactForm from '../components/ContactForm';
import TechTools from '../components/TechTools';
import SectionTitle from '../components/SectionTitle';
import { AjContext } from '../context/AjContext';
import { motion } from 'motion/react';


export default function Homepage() {

    const { projectsHome, servicesHome, setLoading } = useContext(AjContext);
    const [proj, setProj] = useState([]);
    const [serv, setServ] = useState([]);

    useEffect(()=>{
        setLoading(true);
        const timer = setTimeout(()=> {
            setProj(projectsHome);
            setServ(servicesHome);
            setLoading(false);
        }, 1500)
        
        return ()=> clearTimeout(timer);

    }, [projectsHome, servicesHome, setLoading]);


    return (

        <>


            {/* Hero Section */}
            <section className='w-full'>
                <div style={{ backgroundImage: `url(${assets.homeHeroSectionImg.src})`}} className='h-screen bg-cover bg-center bg-no-repeat'>
                    <div className='absolute inset-0 bg-white/25 backdrop-blur-lg px-5 flex items-center justify-center'>
                        <div className='flex flex-col items-center justify-center text-center text-black p-2'>
                            {/* <motion.p initial={{y: 20, opacity: 0}} whileInView={{y: 20, opacity: 1}} transition={{duration: 0.6, delay: 0.3}} className='py-2 text-black/70'>Welcome to my portfolio!</motion.p> */}
                            <motion.h1 initial={{y: 20, opacity: 0}} whileInView={{y: 20, opacity: 1}} transition={{duration: 0.6, delay: 0.3}} className='w-full text-4xl md:text-6xl font-medium text-center drop-shadow-lg'>
                                Hello World, I’m Ajith
                            </motion.h1>
                            <motion.p initial={{y: 20, opacity: 0}} whileInView={{y: 20, opacity: 1}} transition={{duration: 0.6, delay: 0.3}} className='w-full text-black/70 lg:w-3/4 text-md leading-tight mt-3'>
                                A passionate fullstack Web Developer, with hands-on experience in crafting modern, fast, and user-friendly web applications.
                            </motion.p>
                            <motion.div initial={{y: 20, opacity: 0}} whileInView={{y: 20, opacity: 1}} transition={{duration: 0.6, delay: 0.3}} className='flex items-center justify-center mt-10'>
                                <a href='#projects' className='bg-rgb text-md flex items-center text-center rounded-2xl gap-1'>
                                    Explore
                                    <ChevronsRight />
                                </a>
                            </motion.div>
                        </div>
                    </div>                    
                </div>
            </section>


            {/* Overview section */}
            <section className='w-full'>
                <div style={{ backgroundImage: `url(${assets.homeHeroSectionImg.src})`}} className='bg-cover bg-center bg-no-repeat'>
                    <div className='bg-white/25 backdrop-blur-xl w-full p-5 flex items-center justify-center'>
                        <div className='py-[100px]'>
                            <div className="w-full flex items-center justify-center">
                                <div className="flex flex-col lg:flex-row items-center justify-center gap-10 text-left">
                                    <motion.div initial={{y: 20, opacity: 0}} whileInView={{y: 20, opacity: 1}} transition={{duration: 0.6, delay: 0.3}} className=''>
                                        <img src={assets.overviewImg.src} alt="" className="rounded-lg shadow-lg w-full sm:w-[400px]" />
                                    </motion.div>
                                    <motion.div initial={{y: 20, opacity: 0}} whileInView={{y: 20, opacity: 1}} transition={{duration: 0.6, delay: 0.3}}>
                                        <h1 className="text-4xl md:text-5xl font-medium mb-2 drop-shadow-lg">Hi, I’m Ajith</h1>
                                        <div className="max-w-lg pt-2 flex flex-col gap-4">
                                            <p className='text-black/70 text-md leading-tight'>
                                                A passionate Full Stack Web Developer specializing in the MERN stack. With experience in building scalable applications, responsive UIs, and seamless digital solutions, I love turning ideas into impactful products. 
                                            </p>
                                            <p className='text-black/70 text-md leading-tight'>
                                                Over the years, I’ve worked on projects like Blogify, NextHire, and Pixels, which showcase my skills in frontend design, backend logic, and modern web technologies. My focus is on crafting clean, user-friendly, and performance-driven applications that provide real value. 
                                            </p>
                                            <Link href='/about' className='w-fit bg-rgb text-md flex px-10 py-5 mt-5 items-center text-center rounded-2xl'>
                                                Explore My Journey
                                                <ChevronsRight />
                                            </Link>
                                        </div>
                                    </motion.div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/* Projects */}
            <section id='projects' className='w-full'>
                <div style={{backgroundImage: `url(${assets.homeHeroSectionImg.src})`}} className='bg-cover bg-center bg-no-repeat'>
                    <div className=' bg-white/20 backdrop-blur-lg flex flex-col items-center justify-center py-20'>
                        <div className='w-full max-w-6xl flex flex-col items-center justify-center gap-10'>
                            <SectionTitle
                                title="Things I've Built"
                                subTitle="A showcase of the web applications I’ve built, highlighting my expertise in frontend and full-stack development. Each project reflects my focus on clean design, scalability, and seamless user experience."
                            />
                            <div className='w-full flex flex-col lg:grid lg:grid-cols-5 gap-6 p-5 pb-10'>
                                {
                                    proj.map((project) => (
                                         project.projectStatus === 'completed' 
                                        ?(  
                                            <Link key={project.id} href={`/projects/${project.slug}`} style={{backgroundImage: `url(${project.image.src})`}} className={project.boxClass}>
                                                 <div className='absolute inset-0 bg-white/30 backdrop-blur-[1px] bg-gradient-to-t from-white via-white/60 to-transparent'></div>
                                                 <div className='absolute bottom-0 p-10 z-10'>
                                                     <p className='text-xl font-semibold text-black'>{project.name}</p>
                                                     <p className={`${project.descClass} text-md font-medium leading-tight`}>{project.desc.length > 100 ? project.desc.slice(0, 80)+'...' : ''}</p>
                                                 </div>
                                            </Link>
                                        ) : (
                                            
                                            <Link key={project.id} href={`/projects/${project.slug}`} style={{backgroundImage: `url(${project.image.src})`}} className={project.boxClass}>
                                                <div className='absolute inset-0 bg-white/30 backdrop-blur-[1px] bg-gradient-to-t from-white via-white/10 to-transparent'></div>
                                            </Link>
                                        )
                                        
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/* Services */}
            <section className='w-full'>
                <div style={{backgroundImage: `url(${assets.homeHeroSectionImg.src})`}} className='bg-cover bg-center bg-no-repeat'>
                    <div className=' bg-white/20 backdrop-blur-lg flex flex-col items-center justify-center py-20'>
                        <div className='w-full max-w-6xl flex flex-col items-center justify-center gap-10'>
                            <SectionTitle
                                title='What I Offer'
                                subTitle='
                                    I provide end-to-end web development services, combining modern technologies with clean design to deliver fast, scalable, and user-friendly solutions.
                                '
                            />
                            <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-5 pb-10'>
                                {
                                    serv.map((service) => (
                                        <motion.div 
                                            key={service.id}
                                            initial={{y: 20, opacity: 0}} whileInView={{y: 20, opacity: 1}} transition={{duration: 0.6, delay: 0.3}} 
                                            className='
                                                bg-gradient-to-t from-white via-white/90 to-transparent rounded-xl overflow-hidden p-10
                                            '
                                        >
                                            <div className=''>
                                                <img src={service.image.src} className='w-[250px] object-contain rounded-xl' alt={service.title} />
                                            </div>
                                            <div className=''>
                                                <p className='text-xl font-semibold text-black py-2'>{service.title}</p>
                                                <p className='text-md text-black/90 leading-tight'>{service.desc}</p>
                                            </div>
                                        </motion.div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/* Contact Section */}
            <ContactForm />
            

        </>

    );

};