"use client";
import React, { useEffect, useState } from 'react';
import { AiOutlineArrowUp } from 'react-icons/ai';

const ClickToTop = () => {

    const [ showBtn, setShowBtn ] = useState(false);

    useEffect(()=> {

        const handleScroll = ()=> {
            setShowBtn(window.scrollY > 500);
        };

        window.addEventListener('scroll', handleScroll);
        return ()=> window.removeEventListener('scroll', handleScroll);

    }, []);

    const clickToTop = ()=> {
        window.scrollTo({top: 0, behavior: 'smooth'})
    };

    return (

        <button
            onClick={clickToTop}
            aria-label='Go to top'
            className={`
                    fixed bottom-5 right-5 z-50 rounded-full bg-scroll text-white
                    shadow-xl transition-opacity duration-500 hover:scale-105 p-2
                    ${ showBtn ? 'opacity-100 visible' : 'opacity-0 invisible' }
                `}
        >
            <AiOutlineArrowUp size={20} />
        </button>
    
    );

};

export default ClickToTop;