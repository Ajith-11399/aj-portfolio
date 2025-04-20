import React, { useEffect, useState } from 'react';
import { FaArrowUp } from 'react-icons/fa';
import { motion } from "motion/react";


const ScrollToTop = () => {

    const [ show, setShow ] = useState(false);

    useEffect(()=> {
        const handleScroll = ()=> {
            if (typeof window !== 'undefined') {
                setShow(window.scrollY > 200);
            }
        }
        window.addEventListener('scroll', handleScroll);
        return ()=> window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollTop = ()=> {
        window.scrollTo({ top: 10, behavior: 'smooth'});
    }

    return (
        <>

            {show && (
                <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} onClick={scrollTop} className='fixed bottom-5 right-5 px-2 py-2 text-md rounded-full bg-blue-950 text-white cursor-pointer'><FaArrowUp /></motion.button>
            )}

        </>
    );
};

export default ScrollToTop;