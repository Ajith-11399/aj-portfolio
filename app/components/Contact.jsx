import React, { useState } from 'react';
import { MdEmail } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { LuMapPinned } from "react-icons/lu";
import { IoIosSend } from "react-icons/io";
import { motion } from "motion/react";


const Contact = () => {

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
          setResult("Form Submitted Successfully");
          event.target.reset();
        } else {
          console.log("Error", data);
          setResult(data.message);
        }
      };

    return (
        <div id='contact' className='w-full px-[10%] py-12 scroll-mt-20'>
            
            <motion.h4 initial={{y: 20, opacity: 0}} whileInView={{y: 0, opacity: 1}} transition={{duration: 0.6, delay: 0.3}} className='text-center mb-2 text-lg jetb'>I’d Love to Hear From You</motion.h4>
            <motion.h2 initial={{y: 20, opacity: 0}} whileInView={{y: 0, opacity: 1}} transition={{duration: 0.6, delay: 0.3}} className='text-center text-5xl jetb'>Reach Out to Me</motion.h2>

            <div className='grid grid-cols-1 lg:grid-cols-2 items-center gap-20 mt-10 lg:mt-20'>
                
                {/* Form */}
                <motion.div initial={{y: 20, opacity: 0}} whileInView={{y: 0, opacity: 1}} transition={{duration: 0.6, delay: 0.3}} className='border rounded-lg p-3'>
                    <form onSubmit={onSubmitHandler} className='max-w-2xl mx-auto'>
                        <div className='grid grid-cols-1 gap-6 mt-10 mb-8'>
                            <input className='flex-1 p-3 outline-none border rounded-lg border-gray-400 bg-transparent' type="text" name='name' placeholder='Enter your name' required/>
                            <input className='flex-1 p-3 outline-none border rounded-lg border-gray-400 bg-transparent' type="email" name='email' placeholder='Enter your mail address' required/>
                        </div>
                        <textarea className='w-full p-4 outline-none border rounded-lg border-gray-400 bg-transparent mb6' name='message' rows="5" placeholder='Enter Your Message'></textarea>
                        <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} className='flex items-center text-sm gap-3 px-5 py-2.5 jetb rounded-xl shadow-lg mt-4 bg-blue-950 text-white ' type='submit'>
                            Submit
                            <IoIosSend />
                        </motion.button>

                        <p className='mt-4'>{result}</p>
                    </form>
                </motion.div>

                {/* Content */}
                <div>
                    {/* Text */}
                    <motion.p initial={{y: 20, opacity: 0}} whileInView={{y: 0, opacity: 1}} transition={{duration: 0.6, delay: 0.3}} className='text-center md:text-start max-w-2xl mx-auto mb-12 jetb'>Whether you have a project in mind or want to discuss ideas, feel free to reach out. I’d love to hear from you and explore how we can work together!</motion.p>

                    {/* Connect */}
                    <motion.div initial={{y: 20, opacity: 0}} whileInView={{y: 0, opacity: 1}} transition={{duration: 0.6, delay: 0.3}} className='my-5'>
                        <h4 className='w-max text-md jetb font-bold border-b-1'>Find Me Online</h4>
                        <div  className='flex items-center gap-2'>
                            <a className='flex items-center jetb mt-2 hover:transform hover:scale-110 transition duration-300' href="https://github.com/Ajith-11399" target='_blank' rel="noopener noreferrer">
                                <FaGithub className='mr-1 w-6 h-6' />
                            </a>
                            <a className='flex items-center jetb mt-2 hover:transform hover:scale-110 transition duration-300' href="https://www.linkedin.com/in/ajith11399" target='_blank' rel="noopener noreferrer">
                                <FaLinkedin className='mr-1 w-6 h-6' />
                            </a>
                        </div>
                    </motion.div>

                    {/* Location */}
                    <motion.div initial={{y: 20, opacity: 0}} whileInView={{y: 0, opacity: 1}} transition={{duration: 0.6, delay: 0.3}} className='my-5'>
                        <h4 className='w-max text-md jetb font-bold border-b-1'>Hometown</h4>
                        <a className='flex items-center text-sm jetb mt-2' href="https://maps.app.goo.gl/TU41GRHgfXSfLmd19" target='_blank' rel="noopener noreferrer">
                            <LuMapPinned className='mr-1 w-6 h-6 hover:transform hover:scale-110 transition duration-300' />
                            Pollachi
                        </a>
                    </motion.div>
                  
                    {/* Contact */}
                    <motion.div initial={{y: 20, opacity: 0}} whileInView={{y: 0, opacity: 1}} transition={{duration: 0.6, delay: 0.3}} className='my-5'>
                        <h4 className='w-max text-md jetb font-bold border-b-1'>Stay in Touch</h4>
                        <a className='flex items-center text-sm jetb mt-2' href="mailto:ajithironmark42@gmail.com" target='_blank' rel="noopener noreferrer">
                            <MdEmail className='mr-1 w-6 h-6 hover:transform hover:scale-110 transition duration-300' />
                            ajithironmark42@gmail.com
                        </a>
                    </motion.div>
                    
                </div>
                
            </div>

        </div>
    );
};

export default Contact;