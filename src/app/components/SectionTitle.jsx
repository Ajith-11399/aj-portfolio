import React from 'react';
import { motion } from 'motion/react';

const SectionTitle = ({ id, title, subTitle }) => {

    const textSize = id === 'heroSection' ? 'md:text-6xl max-w-6xl' : 'md:text-5xl';
    
    const project = id === 'projects' ? 'md:text-6xl max-w-4xl' : 'md:text-6xl max-w-6xl';

    return (

        <motion.div initial={{y: 20, opacity: 0}} whileInView={{y: 20, opacity: 1}} transition={{duration: 0.6, delay: 0.3}} className='w-full max-w-6xl flex flex-col items-center text-center px-5'>
            <p className={`text-3xl ${textSize} ${project} font-medium drop-shadow-lg`}>
                {title}
            </p>
            <p className='text-base text-black/70 max-w-3xl pt-5'>
                {subTitle}
            </p>
        </motion.div>

    );

};

export default SectionTitle;