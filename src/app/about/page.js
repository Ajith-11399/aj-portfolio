"use client";
import { assets, timeline } from '@/assets/assets';
import React, { useContext, useEffect, useState } from 'react';
import SectionTitle from '../components/SectionTitle';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import TechTools from '../components/TechTools';
import { AjContext } from '../context/AjContext';
import { motion } from 'motion/react';

const About = () => {

    const { setLoading, timeline } = useContext(AjContext);
    const [ timeLine, setTimeLine ] = useState([]);

    useEffect(()=>{
        setLoading(true);
        const timer = setTimeout(() => {
            setTimeLine(timeline);
            setLoading(false);
        }, 1500);
        return ()=> clearTimeout(timer);
    }, []);

    return (
    
        <>
            
            {/* About Section */}
            <section className='w-full'>
                <div style={{backgroundImage: `url(${assets.homeHeroSectionImg.src})`}} className='h-screen relative bg-cover bg-center bg-no-repeat'>
                    <div className='absolute inset-0 bg-white/25 backdrop-blur-xl px-5 flex items-center justify-center'>
                        <div className='flex flex-col items-center justify-center text-center text-black p-2'>
                            <SectionTitle 
                                id='heroSection'
                                title='Clean code, seamless design, and scalable solutions — that’s my approach to development.' 
                                subTitle=''
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Overview */}
            <section className='w-full'>
                <div style={{ backgroundImage: `url(${assets.homeHeroSectionImg.src})`}} className='bg-cover bg-center bg-no-repeat'>
                    <div className='bg-white/25 backdrop-blur-xl w-full p-5 flex items-center justify-center'>
                        <div className='py-[100px]'>
                            <div className="w-full flex items-center justify-center">
                                <div className="flex flex-col lg:flex-row items-center justify-center gap-10 text-center lg:text-left">
                                    <motion.div initial={{y: 20, opacity: 0}} whileInView={{y: 20, opacity: 1}} transition={{duration: 0.6, delay: 0.3}} className='px-5'>
                                        <img src={assets.overviewImg.src} alt="" className="rounded-lg shadow-lg w-full sm:w-[400px]" />
                                    </motion.div>
                                    <motion.div initial={{y: 20, opacity: 0}} whileInView={{y: 20, opacity: 1}} transition={{duration: 0.6, delay: 0.3}}>
                                        <h1 className="text-4xl md:text-5xl font-medium mb-2 drop-shadow-lg">Hello, World!</h1>
                                        <div className="max-w-lg pt-5 text-sm text-black/70 flex flex-col gap-4">
                                            <p>
                                                I’m Ajith, a passionate Full Stack Web Developer specializing in the MERN stack. With experience in building scalable applications, responsive UIs, and seamless digital solutions, I love turning ideas into impactful products. 
                                            </p>
                                            <p>
                                                Over the years, I’ve worked on projects like Blogify, NextHire, and Pixels, which showcase my skills in frontend design, backend logic, and modern web technologies. My focus is on crafting clean, user-friendly, and performance-driven applications that provide real value. 
                                            </p>
                                            <p>
                                                When I’m not coding, I enjoy exploring new technologies, solving challenges, and continuously improving my craft as a developer.
                                            </p>
                                        </div>
                                    </motion.div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Techs and Tools */}
            <TechTools />

            {/* Timeline */}
            <section className='w-full'>
                <div style={{backgroundImage: `url(${assets.homeHeroSectionImg.src})`}} className='relative bg-cover bg-center bg-no-repeat'>
                    <div className='bg-white/25 backdrop-blur-xl px-5 flex items-center justify-center'>
                        <div className='w-full pt-20'>
                            <div className='mb-10'>
                                <SectionTitle
                                    title='My Journey'
                                    subTitle='From education to leading fullstack development, here’s how I’ve grown step by step.'
                                />
                            </div>
                            <VerticalTimeline
                                lineColor="#000"
                            >
                                {
                                    timeLine.map((event) => {
                                        const Icon = event.icon
                                        return (
                                            <VerticalTimelineElement
                                                key={event.id}
                                                className={event.className}
                                                date={event.date}
                                                contentStyle={event.contentStyle}
                                                contentArrowStyle={event.contentArrowStyle}
                                                iconStyle={event.iconStyle}
                                                icon={<Icon />}
                                            >
                                                <h3 className="vertical-timeline-element-title text-xl font-bold">{event.title}</h3>
                                                <h4 className="vertical-timeline-element-subtitle text-md font-medium">{event.location}</h4>
                                                <p className='text-sm text-black/70'>{event.desc}</p>
                                            </VerticalTimelineElement>
                                        )
                                    })
                                }
                            </VerticalTimeline>
                        </div>
                    </div>
                </div>
            </section>
        
        </>

    );

};

export default About;