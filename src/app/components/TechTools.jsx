"use client"
import React, { useContext, useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules';
import { assets } from '@/assets/assets.js';
import SectionTitle from './SectionTitle';
import { AjContext } from '../context/AjContext';
import { motion } from 'motion/react';

const TechTools = () => {

    const { techTools } = useContext(AjContext);
    const [ techAndTools, setTechAndTools ] = useState([]);
    
    useEffect(()=>{
        setTechAndTools(techTools);
    }, [techAndTools]);

    return (

        <section className="w-full">
            <div style={{ backgroundImage: `url(${assets.homeHeroSectionImg.src})`}} className="h-screen relative bg-cover bg-center bg-no-repeat">
                <motion.div initial={{y: 20, opacity: 0}} whileInView={{y: 20, opacity: 1}} transition={{duration: 0.6, delay: 0.3}} className="absolute inset-0 bg-white/20 backdrop-blur-lg flex flex-col items-center justify-center">
                    <SectionTitle 
                        title='What I Work With' 
                        subTitle='I specialize in JavaScript, React, Next.js, Node.js, Express, MongoDB, and more — the essentials for modern full-stack development.'
                    />
                    <Swiper
                        effect='coverflow'
                        grabCursor={true}
                        centeredSlides={true}
                        slidesPerView='auto'
                        coverflowEffect={{
                            rotate: 50,
                            stretch: 0,
                            depth: 100,
                            modifier: 1,
                            slideShadows: true,
                        }}
                        pagination={{ clickable: true}}
                        autoplay={{ delay: 2000, disableOnInteraction: false}}
                        loop={true}
                        modules={[EffectCoverflow, Pagination, Autoplay]}
                        className="py-10 w-full"
                    >
                        {
                            techAndTools.map((item) => (
                                <SwiperSlide 
                                    key={item.id} 
                                    className="
                                        !w-[200px] !h-[230px] sm:!w-[220px] sm:!h-[250px] md:!w-[250px] md:!h-[280px] 
                                        flex flex-col items-center justify-center gap-3 
                                        backdrop-blur-md bg-white rounded-xl shadow-xl 
                                        hover:scale-105 hover:bg-white/70 transition-all duration-1000"
                                >
                                    <div className='w-full h-full flex flex-col items-center justify-center text-center gap-5 p-5'>
                                        <img src={item.img.src} className="w-[100px] h-[120px] object-contain mx-auto" alt={item.tech} />
                                        <p className='text-lg font-medium text-center'>{item.tech}</p>
                                    </div>
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>
                </motion.div>
            </div>
        </section>

    );

};

export default TechTools;