"use client";
import React, { useEffect } from 'react';
import fluidCursor from '@/app/hooks/useFluidCursor.jsx';

const FluidCursor = () => {
    
    useEffect(()=> {
        fluidCursor();
    }, []);

    return (

        <>

            <div className='fixed top-0 left-0'>
                <canvas id='fluid' className='w-screen h-screen' />
            </div>

        </>
    
    );

};

export default FluidCursor;
