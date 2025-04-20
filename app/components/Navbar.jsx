import { assets } from '@/assets/assets';
import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';
import { FaArrowRight } from "react-icons/fa";
import { motion } from "motion/react";


const Navbar = () => {

    const [ isScroll, setIsScroll ] = useState(false);
    const [ isScroll2, setIsScroll2 ] = useState(false);
    const sideMenuRef = useRef();

    const openMenu = ()=> {
        sideMenuRef.current.style.transform = 'translateX(-16rem)'
    }

    const closeMenu = ()=> {
        sideMenuRef.current.style.transform = 'translateX(16rem)'
    }

    useEffect(()=>{
        window.addEventListener('scroll', ()=> {
            if(window.innerWidth <= 768){
                setIsScroll(true);
            } else {
                setIsScroll(false);
            }
        })
    }, [])

    useEffect(()=> {
        window.addEventListener('scroll', ()=> {
            if(window.innerWidth >= 769 && scrollY >= 100){
                setIsScroll2(true);
            } else {
                setIsScroll2(false)
            }
        })
    }, [])

    return (
        <>

            <div className='fixed inset-0 -z-10'>
                <Image src={assets.header_bg_color} alt='' className='w-full h-full object-cover' />
            </div>

            <nav className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-10 ${isScroll ? "bg-white" : "bg-none" }`}>

                <motion.a initial={{y: 20, opacity: 0}} whileInView={{y: 0, opacity: 1}} transition={{duration: 0.6, delay: 0.3}} href="#top">
                    <h1 className='text-2xl sm:text-4xl mont font-normal lg:font-bold'>AJITH.</h1>
                </motion.a>

                {/* Large Screen Menu */}
                <ul className={`hidden lg:flex items-center gap-6 lg:gap-8 px-12 py-3 rounded-3xl jetb font-medium ${isScroll2 ? "backdrop-blur-lg bg-white/10 shadow-lg transform-all duration-500" : "backdrop-blur-none bg-none"}`}>
                    <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} ><a href="#top">Home</a></motion.li>
                    <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} ><a href="#about">Who I Am</a></motion.li>
                    <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} ><a href="#services">What I Do</a></motion.li>
                    <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} ><a href="#works">My Projects</a></motion.li>
                    <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} ><a href="#contact">Get In Touch</a></motion.li>
                </ul>

                <div className='flex items-center gap-4'>

                    {/* <button>
                        <Image src={assets.moon_icon} className='w-6' alt='' />
                    </button> */}

                    <motion.a whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} href="#contact" className='hidden lg:flex items-center text-sm gap-3 px-5 py-2.5 jetb rounded-xl shadow-lg ml-4 bg-blue-950 text-white'>Contact Me<FaArrowRight className='w-6' /></motion.a>

                    <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} className='block lg:hidden ml-3' onClick={openMenu}>
                        <Image src={assets.menu_black} className='w-6' alt='' />
                    </motion.button>
                
                </div>

                {/* Mobile Device Menu */}
                <ul ref={sideMenuRef} className='flex lg:hidden flex-col gap-4 px-10 py-20 fixed jetb font-medium -right-64 top-0 bottom-0 w-72 sm:w-96 z-50 h-screen backdrop-blur-lg bg-white/60 bg-opacity-60 shadow-xl transition duration-500'>

                    <div className='absolute right-6 top-6' onClick={closeMenu}>
                        <Image src={assets.close_black} className='w-5 cursor-pointer' alt='' />
                    </div>

                    <li><a href="#top" onClick={closeMenu}>Home</a></li>
                    <li><a href="#about" onClick={closeMenu}>Who I Am</a></li>
                    <li><a href="#services" onClick={closeMenu}>What I Do</a></li>
                    <li><a href="#works" onClick={closeMenu}>My Projects</a></li>
                    <li><a href="#contact" onClick={closeMenu}>Get In Touch</a></li>
                </ul>
            
            </nav>

        </>
    );
};

export default Navbar;