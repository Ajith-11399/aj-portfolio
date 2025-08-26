"use client";
import { assets } from "@/assets/assets";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, useScroll } from 'motion/react';

const Header = () => {
    
    const { scrollYProgress } = useScroll();

    const sideMenuRef = useRef();    
    const [isScroll, setIsScroll] = useState(false);

    const [ menuOpen, setMenuOpen ] = useState(false);

    const openMenu = () => setMenuOpen(true);
    const closeMenu = () => setMenuOpen(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY >= 70) {
                setIsScroll(true);
            } else {
                setIsScroll(false);
            }
        };
        
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);


    return (

        <>

            {/* Scroll Progress */}
            <motion.div 
                id="scroll-indicator" 
                style={{
                    scaleX: scrollYProgress,
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: 4,
                    originX: 0,
                    zIndex: 100,
                }}
                className="bg-scroll"
                transition={{ duration: 0.3, ease: "easeInOut" }} 
            />


            {/* Navigation bar */}
            <nav className={`fixed lg:top-4 lg:left-1/2 lg:-translate-x-1/2  w-full lg:max-w-[95%] flex items-center justify-between lg:rounded-2xl px-5 lg:px-8 py-2.5 z-10 ${isScroll ? "backdrop-blur-lg bg-white/60 shadow-xl transition-all duration-500" : "backdrop-blur-none bg-none"} `}>
                
                <Link href='/' className="flex items-center gap-0">
                    <img src={assets.logo.src} className="w-[50px]" alt="Logo" />
                    <p className="text-2xl font-normal text-shadow">Ajith</p>
                </Link>
        
                <ul className="hidden lg:flex items-center gap-10 text-md font-semibold">
                    <li className="">
                        <Link href="/">Home</Link>
                    </li>
                    <li className="">
                        <Link href="/projects">My Crafts</Link>
                    </li>
                    <li className="">
                        <Link href="/services">What I Offer</Link>
                    </li>
                    <li className="">
                        <Link href="/about">About Me</Link>
                    </li>
                </ul>
        
                <div className="flex items-center gap-4">
                    
                    <Link href='/get-in-touch' className="text-md font-semibold bg-rgb shadow-lg rounded-2xl hidden lg:block">
                        Get in Touch
                    </Link>
        
                    <button className='block lg:hidden ml-3' onClick={openMenu}>
                        <Menu className="w-6 h-6"/>
                    </button>
                    
                </div>
                
        
                <ul 
                    ref={sideMenuRef} 
                    className={`flex lg:hidden lg:rounded-2xl flex-col gap-2 px-5 pt-5 fixed text-md font-medium top-0 left-0 bottom-0 w-full h-screen   shadow-xl transition-transform duration-500 z-100
                    ${menuOpen ? "translate-x-0" : "translate-x-full"}`}
                >
                    
                    <div className="block lg:hidden">
                        <div className="flex items-center justify-between">
                            <Link href='/' onClick={closeMenu} className="flex items-center gap-0">
                                <img src={assets.logo.src} className="w-[50px]" alt="Logo" />
                                <p className="text-2xl font-normal text-shadow">Ajith</p>
                            </Link>
                      
                            <button className="left-3" onClick={closeMenu}>
                              <X className="w-6 h-6" />
                            </button>
                        </div>
                    </div>
                      
                    <li><Link href="/" >Home</Link></li>
                    <li><Link href="/projects" onClick={closeMenu}>My Crafts</Link></li>
                    <li><Link href="/services" onClick={closeMenu}>What I Offer</Link></li>
                    <li><Link href="/about" onClick={closeMenu}>About Me</Link></li>
                    <li><Link href="/get-in-touch" onClick={closeMenu}>Contact Me</Link></li>
                      
                </ul>

            </nav>

                      
        </>

    );
};

export default Header;