"use client"
import React, { useContext, useEffect, useState } from 'react';
import ContactForm from '../components/ContactForm';
import { assets } from '@/assets/assets';
import { AjContext } from '../context/AjContext';
import { motion } from 'motion/react';
import SectionTitle from '../components/SectionTitle';


const GetInTouch = () => {

    const { socialMedia, setLoading } = useContext(AjContext);

    const [ media, setMedia ] = useState([]);

    useEffect(()=> {
        setLoading(true);
        const timer = setTimeout(() => {
            setMedia(socialMedia);
            setLoading(false); 
        }, 1500);
        return ()=> clearTimeout(timer);
    }, [socialMedia, setLoading]);

    
    
    return (
        
        <>

            <section className='w-full'>
                <div style={{backgroundImage: `url(${assets.homeHeroSectionImg.src})`}} className='bg-cover bg-center bg-no-repeat'>
                    <div className='bg-white/25 backdrop-blur-lg px-5 py-20 flex items-center justify-center'>
                        <div className='w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-10 p-1 md:p-10 items-center justify-center'>
                            <div className='col-span-full pb-10'>
                                <div className='w-full flex flex-col items-center text-center'>
                                    <SectionTitle
                                        id='heroSection'
                                        title='Start the Conversation'
                                        subTitle='We’d love to hear from you—let’s start a conversation.'
                                    />
                                </div>
                            </div>
                            {
                                media.map((item) => {
                                    const Icon = item.icon
                                    return (
                                        <motion.div initial={{y: 20, opacity: 0}} whileInView={{y: 20, opacity: 1}} transition={{duration: 0.6, delay: 0.3}} key={item.id} className='bg-white shadow-xl p-7 rounded-lg hover:scale-105 hover:shadow-2xl duration-500'>
                                            <a href={item.url} target='_blank'>
                                                <Icon size={50} className='p-0 m-0' />
                                                <div className='pt-4'>
                                                    <p className='text-lg py-0 my-0 font-bold'>{item.media}</p>
                                                    <p className='text-md py-0 my-0'>{item.name}</p>
                                                </div>
                                            </a>
                                        </motion.div>
                                    );
                                })
                            }
                        </div>
                    </div>
                </div>
            </section>

            <ContactForm />

        </>

    );
    
};

export default GetInTouch;