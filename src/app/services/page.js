"use client"
import { assets } from '@/assets/assets';
import React, { useContext, useEffect, useState } from 'react';
import SectionTitle from '../components/SectionTitle';
import { AjContext } from '../context/AjContext.jsx';
import { motion } from 'motion/react';

const Services = () => {

    const { servicesHome, setLoading } = useContext(AjContext);
    const [ services, setServices ] = useState([]);

    useEffect(()=> {
        setLoading(true);
        const timer = setTimeout(()=> {
            setServices(servicesHome);
            setLoading(false);
        }, 1500);
        return ()=> clearTimeout(timer);
    }, [servicesHome, setLoading]);


    return (

        <>

            {/* Hero Section */}
            <section className='w-full'>
                <div style={{backgroundImage: `url(${assets.homeHeroSectionImg.src})`}} className='h-screen relative bg-center bg-cover bg-no-repeat'>
                    <div className='absolute inset-0 bg-white/25 backdrop-blur-xl flex items-center justify-center px-5'>
                        <div className=''>
                            <SectionTitle
                                id='heroSection'
                                title='Crafting digital experiences through design, development, and problem-solving that bring ideas to life'
                                subTitle=''
                            />
                        </div>
                    </div>
                </div>
            </section>

            {
                services.map((serv, ind) => (
                    <section key={ind} className='w-full'>
                        <div style={{backgroundImage: `url(${assets.homeHeroSectionImg.src})`}} className='bg-center bg-cover bg-no-repeat'>
                            <div className='bg-white/25 backdrop-blur-xl flex items-center justify-center px-5'>
                                <div className='w-full max-w-6xl flex flex-col lg:flex-row gap-3 items-start px-5 py-20'>
                                    <div className='w-full lg:w-2/5 lg:sticky top-8 p-4'>
                                        <motion.div initial={{y: 20, opacity: 0}} whileInView={{y: 20, opacity: 1}} transition={{duration: 0.6, delay: 0.3}}>
                                            <p className='text-4xl font-medium drop-shadow-lg pt-4'>
                                                {serv.title}
                                            </p>
                                            <img src={serv.image.src} className='' alt={serv.title} />
                                        </motion.div>
                                    </div>
                                    <div className='w-full lg:w-3/5'>
                                        <div className='w-full'>
                                            <motion.p initial={{y: 20, opacity: 0}} whileInView={{y: 20, opacity: 1}} transition={{duration: 0.6, delay: 0.3}} className='text-base text-black/70 font-medium pt-3'>
                                                {serv.overview}
                                            </motion.p>
                                            <motion.div initial={{y: 20, opacity: 0}} whileInView={{y: 20, opacity: 1}} transition={{duration: 0.6, delay: 0.3}} className='pt-10 pb-5'>
                                                <p className='text-2xl font-medium border-b-2 w-fit'>Key Highlights</p>
                                            </motion.div>
                                            <ul className='w-full grid grid-cols-1 sm:grid-cols-2 gap-5'>
                                                   {
                                                    serv.highlights.map((item, index) => {
                                                        const Icon = item.img;
                                                        return (
                                                            <motion.li key={index} initial={{y: 20, opacity: 0}} whileInView={{y: 20, opacity: 1}} transition={{duration: 0.6, delay: 0.3}} className='backdrop-blur-xl px-6 py-10 w-full object-contain flex flex-col items-center text-center shadow-2xl gap-3 rounded-2xl'>
                                                                <Icon className='w-12 h-12 features-icon p-3 rounded-2xl shadow-lg' />
                                                                <p className='max-w-[250px] text-md font-medium leading-5 pt-2'>{item.title}</p>
                                                            </motion.li>
                                                        )
                                                    })
                                                }
                                            </ul>

                                            <motion.div initial={{y: 20, opacity: 0}} whileInView={{y: 20, opacity: 1}} transition={{duration: 0.6, delay: 0.3}} className='pt-10'>
                                                <p className='text-2xl font-medium border-b-2 w-fit'>Process</p>
                                            </motion.div>
                                            <ul className='w-full grid grid-cols-1 md:grid-cols-2'>
                                                {
                                                    serv.process.map((item, index) => (
                                                        <motion.li key={index} initial={{y: 20, opacity: 0}} whileInView={{y: 20, opacity: 1}} transition={{duration: 0.6, delay: 0.3}} className='flex items-center pt-6 gap-3'>
                                                            <div className='bg-white font-bold shadow-lg text-center p-1 w-10 h-10 rounded-xl'>{item.step}</div>
                                                            <p className='text-lg font-medium'>{item.title}</p>
                                                        </motion.li>
                                                    ))
                                                }
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                ))
            }

        </>
    );
};

export default Services;