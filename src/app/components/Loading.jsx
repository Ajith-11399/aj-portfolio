import React from 'react';
import { Loader, LoaderCircle  } from 'lucide-react';

const Loading = () => {
    return (
        <div className='w-screen h-screen fixed top-0 left-0 z-50 bg-white/10 backdrop-blur-xl flex items-center justify-center'>
            {/* <LoaderCircle className='w-14 h-14 animate-spin' /> */}
            <Loader className='w-14 h-14 animate-spin text-blue-800' />
        </div>
    );
};

export default Loading;