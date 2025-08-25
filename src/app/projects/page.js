"use client";
import { assets } from '@/assets/assets';
import React, { useContext, useEffect, useState } from 'react';
import SectionTitle from '../components/SectionTitle';
import { AjContext } from '../context/AjContext';
import Link from 'next/link';
import { motion } from 'motion/react';


const ProjectsPage = () => {

    const { projectsHome, setLoading } = useContext(AjContext);
    const [ projects, setProjects ] = useState([]);

    useEffect(()=> {
        setLoading(true);
        const timer = setTimeout(()=> {
            setProjects(projectsHome);
            setLoading(false);
        }, 1500);
        return ()=> clearTimeout(timer);
    }, [projectsHome, setLoading]);

    return (
    
        <>
            
            {/* Hero Section */}
            <section className='w-full'>
                <div style={{backgroundImage: `url(${assets.homeHeroSectionImg.src})`}} className='h-screen bg-cover bg-center bg-no-repeat'>
                    <div className='absolute inset-0 bg-white/25 backdrop-blur-xl flex items-center justify-center px-5'>
                        <div className='w-full flex items-center justify-center'>
                            <SectionTitle
                                id='heroSection'
                                title="A glimpse into my projects — each reflecting curiosity, growth, and the joy of bringing ideas to life"
                                subTitle=''
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Projects Section */}
            <section className='w-full'>
                <div style={{backgroundImage: `url(${assets.homeHeroSectionImg.src})`}} className='bg-cover bg-center bg-no-repeat'>
                    <div className='bg-white/25 backdrop-blur-xl flex flex-col items-center justify-center py-20'>
                        <div className='pb-10'>
                            <SectionTitle
                                id=''
                                title='My Creations'
                                subTitle='Each project is a reflection of curiosity, creativity, and the joy of turning ideas into reality'
                            />
                        </div>
                        <div className='max-w-6xl grid grid-cols-1 items-center justify-center gap-10'>
                            {
                                projects.map((project, ind) => {
                                
                                    const imgBlock = ind % 2 === 0 ? 'lg:order-1' : 'lg:order-2';
                                    const textBlock = ind % 2 !== 0 ? 'lg:order-1 lg:text-end' :  'lg:order-2';
                                
                                    return (
                                        <div key={ind} className='grid grid-cols-1 lg:grid-cols-2 items-center justify-center gap-6 py-5'>
                                            <Link href={`/projects/${project.slug}`} className={`${imgBlock} px-5`}>
                                                <motion.img initial={{y: 20, opacity: 0}} whileInView={{y: 20, opacity: 1}} transition={{duration: 0.6, delay: 0.3}} src={project.image.src} className='w-full h-full rounded-2xl shadow-2xl' alt={project.name} />
                                            </Link>
                                            <div className={`${textBlock} w-full flex flex-col px-5`}>
                                                <motion.p initial={{y: 20, opacity: 0}} whileInView={{y: 20, opacity: 1}} transition={{duration: 0.6, delay: 0.3}} className={`text-4xl font-medium drop-shadow-lg`}>
                                                    {project.name}
                                                </motion.p>
                                                <motion.p initial={{y: 20, opacity: 0}} whileInView={{y: 20, opacity: 1}} transition={{duration: 0.6, delay: 0.3}} className='text-base text-black/70 font-normal max-w-3xl leading-5 pt-3'>
                                                    {project.desc}
                                                </motion.p>
                                                {
                                                    project.slug === 'coming-soon'
                                                    ?   ''
                                                    :   <Link href={`/projects/${project.slug}`} className='pt-5'>
                                                            <motion.button initial={{y: 20, opacity: 0}} whileInView={{y: 20, opacity: 1}} transition={{duration: 0.6, delay: 0.3}} className='bg-rgb rounded-2xl shadow-xl cursor-pointer'>Know more</motion.button>
                                                        </Link>
                                                }
                                                
                                            </div>
                                        </div>
                                        
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </section>
                    

        </>
        
    );

};

export default ProjectsPage;