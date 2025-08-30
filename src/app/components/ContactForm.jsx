"use client"
import React, { useState } from 'react';
import { assets } from '@/assets/assets';
import './ContactForm.css';
import { IoIosSend } from "react-icons/io";
import Image from 'next/image';
import SectionTitle from './SectionTitle';
import { motion } from 'motion/react';


const ContactForm = () => {

    const [ result, setResult ] = useState("")

    const onSubmitHandler = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);
    
        formData.append("access_key", "ed3ea7ff-3301-458e-8ac2-855bfb2727ac");
    
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          body: formData
        });
    
        const data = await response.json();
    
        if (data.success) {
          setResult("Form submitted successfully!!");
          event.target.reset();
        } else {
          console.log("Error", data);
          setResult(data.message);
        };
    };
    
    return (
    
        <section className='w-full'>
            <div style={{backgroundImage: `url(${assets.homeHeroSectionImg.src})`}} className='bg-cover bg-center bg-no-repeat'>
                <div className='bg-white/20 backdrop-blur-lg flex flex-col items-center justify-center py-20'>
                    <div className='w-full max-w-6xl flex flex-col items-center justify-center gap-10 p-5'>
                        <SectionTitle 
                            title='Stay Get in Touch' 
                            subTitle='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam quos beatae quo impedit voluptatem cumque rerum, debitis necessitatibus eius sint amet tempore fugiat similique iusto nam velit, quis labore sit.' 
                        />
                        <div className='w-full flex flex-col lg:flex-row items-start justify-center gap-10'>
                            <div className='w-full border p-5 rounded-xl'>
                                <form className='max-w-2xl mx-auto' onSubmit={onSubmitHandler}>
                                    <div className='hidden field'>
                                        <input type="text"  name='honeypot' tabIndex='1' autoComplete='off' />
                                    </div>
                                    <motion.div initial={{y: 20, opacity: 0}} whileInView={{y: 20, opacity: 1}} transition={{duration: 0.6, delay: 0.3}} className='field'>
                                        <input type="text"  name='fullname' id='fullname' placeholder='' required />
                                        <label htmlFor="fullname">Full Name <span>*</span></label>
                                    </motion.div>
                                    <motion.div initial={{y: 20, opacity: 0}} whileInView={{y: 20, opacity: 1}} transition={{duration: 0.6, delay: 0.3}} className='field'>
                                        <input type="email"  name='email' id='email' placeholder='' required />
                                        <label htmlFor="email">Email Address <span>*</span></label>
                                    </motion.div>
                                    <motion.div initial={{y: 20, opacity: 0}} whileInView={{y: 20, opacity: 1}} transition={{duration: 0.6, delay: 0.3}} className='field'>
                                        <input type="tel"  name='phone' id='phone' placeholder='' required />
                                        <label htmlFor="phone">Contact Number <span>*</span></label>
                                    </motion.div>
                                    <motion.div initial={{y: 20, opacity: 0}} whileInView={{y: 20, opacity: 1}} transition={{duration: 0.6, delay: 0.3}} className='field'>
                                        <textarea  name='message' id='message' placeholder='' rows='4' required></textarea>
                                        <label htmlFor="message">Message <span>*</span></label>
                                    </motion.div>
                                    <motion.button transition={{duration: 0.6, delay: 0.3}} type='submit' name='submit' className='bg-rgb rounded-2xl flex items-center justify-center gap-2 px-5 py-2 pb-10'>
                                        Submit
                                        <IoIosSend />
                                    </motion.button>
                                    <motion.p initial={{y: 20, opacity: 0}} whileInView={{y: 20, opacity: 1}} transition={{duration: 0.6, delay: 0.3}} className='text-md'>{result}</motion.p>
                                </form>
                            </div>
                            <motion.div initial={{y: 20, opacity: 0}} whileInView={{y: 20, opacity: 1}} transition={{duration: 0.6, delay: 0.3}} className='text-center bg-white rounded-2xl'>
                                <img src={assets.formImg.src} className='w-full max-w-[90%]' alt='Get in touch' />
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    
    );

};

export default ContactForm;