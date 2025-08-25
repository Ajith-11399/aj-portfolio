import React from 'react';
import { LoaderCircle } from 'lucide-react';

const Loading = () => {
    return (
        <div className='w-screen h-screen fixed top-0 left-0 z-50 bg-white/10 backdrop-blur-xl flex items-center justify-center'>
            <LoaderCircle className='text-5xl animate-spin' />
        </div>
    );
};

export default Loading;