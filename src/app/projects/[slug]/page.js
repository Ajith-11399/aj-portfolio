"use client";
import { useContext, useEffect, useState } from "react";
import { assets } from "@/assets/assets";
import { useParams } from "next/navigation";
import { AjContext } from "@/app/context/AjContext";
import SectionTitle from "@/app/components/SectionTitle";
import CTA from "@/app/components/CTA";
import { motion } from 'motion/react';


const ProjectClient = () => {

    const { slug } = useParams();
    const { projectsHome, setLoading } = useContext(AjContext);
    const [project, setProject] = useState(null);

    useEffect(() => {
        setLoading(true);
        const fetchProject = async() => {
            projectsHome.map((ele) => {
                if (ele.slug === slug) {
                    setProject(ele);
                    return null;
                };
            });
        };
        const timer = setTimeout(() => {
            fetchProject();
            setLoading(false);
        }, 1500);
        return ()=> clearTimeout(timer);
    }, [slug, projectsHome, setLoading]);

    
    return project ? (

        <>

            {
                project.name === 'Coming Soon'

                ? (

                    <section className="w-full">
                        <div style={{backgroundImage: `url(${assets.homeHeroSectionImg.src})`}} className="h-screen bg-cover bg-center bg-no-repeat">
                            <div className="absolute inset-0 bg-white/25 backdrop-blur-xl flex flex-col items-center justify-center px-5">
                                <div className="flex flex-col items-center justify-center py-24 md:py-44 gap-10 md:gap-20">
                                    <SectionTitle
                                        id='heroSection'
                                        title={project.name}
                                        subTitle={project.desc}
                                    />
                                </div>
                            </div>
                        </div>
                    </section>

                ) : (

                    <>

                        {/* Hero Section */}
                        <section className="w-full">
                            <div style={{backgroundImage: `url(${assets.homeHeroSectionImg.src})`}} className="bg-cover bg-center bg-no-repeat">
                                <div className="bg-white/25 backdrop-blur-xl flex flex-col items-center justify-center px-5">
                                    <div className="flex flex-col items-center justify-center pt-24 pb-20 md:pt-44 gap-10 md:gap-20">
                                        <SectionTitle
                                            id='projects'
                                            title={project.intro.title}
                                            subTitle={project.intro.desc}
                                        />
                                        <motion.div initial={{y: 20, opacity: 0}} whileInView={{y: 20, opacity: 1}} transition={{duration: 0.6, delay: 0.3}} className="lg:max-w-6xl">
                                            <img src={project.image.src} className='rounded-2xl shadow-2xl' alt={project.intro.title} />
                                        </motion.div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Overview */}
                        <section className="w-full">
                            <div style={{backgroundImage: `url(${assets.homeHeroSectionImg.src})`}} className="bg-cover bg-center bg-no-repeat">
                                <div className="bg-white/25 backdrop-blur-xl flex items-center justify-center px-5">

                                    <div className="w-full max-w-5xl flex flex-col lg:grid lg:grid-cols-5 items-center justify-center gap-10 py-20">
                                            
                                        <motion.div initial={{y: 20, opacity: 0}} whileInView={{y: 20, opacity: 1}} transition={{duration: 0.6, delay: 0.3}} className="col-span-3 text-center max-w-lg lg:text-start">
                                            <p className="text-4xl font-medium drop-shadow-lg">
                                                {project.overview.title}
                                            </p>
                                            <p className="text-sm text-black/70 font-normal leading-5 pt-4">
                                                {project.overview.desc}
                                            </p>
                                        </motion.div>
                
                                        <motion.div initial={{y: 20, opacity: 0}} whileInView={{y: 20, opacity: 1}} transition={{duration: 0.6, delay: 0.3}} className="col-span-2">
                                            <img src={project.overview.img.src} alt={project.overview.title} className="rounded-2xl shadow-xl" />
                                        </motion.div>
                
                                    </div>

                                </div>
                            </div>
                        </section>

                        {/* Features */}
                        <section className="w-full">
                            <div style={{backgroundImage: `url(${assets.homeHeroSectionImg.src})`}} className="lg:h-screen lg:relative bg-center bg-cover bg-no-repeat">
                                <div className="lg:absolute lg:inset-0 bg-white/25 backdrop-blur-xl flex items-center justify-center px-5 py-20">
                                    <div className="w-full max-w-6xl">
                                        <SectionTitle
                                            id='heroSection'
                                            title={project.features.title}
                                            subTitle={project.features.desc}
                                        />
                                        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 pt-20">
                                            {
                                                project.features.card.map((item, ind) => {
                                                    const Icon = item.icon;
                                                    return (
                                                        <motion.div key={ind} initial={{y: 20, opacity: 0}} whileInView={{y: 20, opacity: 1}} transition={{duration: 0.6, delay: 0.3}} className="bg-white/25 backdrop-blur-xl shadow-xl rounded-xl p-5">
                                                            <div className="bg-black rounded-full w-fit">
                                                                <Icon className='w-12 h-12 text-white p-3' />
                                                            </div>
                                                            <p className="text-xl font-medium pt-4 pb-2 leading-tight">{item.title}</p>
                                                            <p className="text-sm text-black/70 font-medium leading-tight">{item.desc}</p>
                                                        </motion.div>
                                                    )
                                                })
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Gallery */}
                        <section className="w-full">
                            <div style={{backgroundImage: `url(${assets.homeHeroSectionImg.src})`}} className="bg-cover bg-center bg-no-repeat">
                                <div className="bg-white/25 backdrop-blur-xl flex flex-col items-center justify-center px-5 py-20">

                                    <div className="max-w-6xl pb-20">
                                            
                                        <motion.div initial={{y: 20, opacity: 0}} whileInView={{y: 20, opacity: 1}} transition={{duration: 0.6, delay: 0.3}} className="w-full grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10 pt-20 pb-10">
                                            <p className="max-w-lg text-5xl font-medium drop-shadow-lg">
                                                {project.gallery.title}
                                            </p>
                                            <p className="max-w-lg text-base text-black/70 font-normal leading-5 pt-3">
                                                {project.gallery.desc}
                                            </p>
                                        </motion.div>
                
                                        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 py-5">
                                            {
                                                project.gallery.images.map((item, ind) => {
                                                    const imgs = ()=> {
                                                        if (project.gallery.images.length > 3 || project.gallery.images.length === 2) {
                                                            return 'md:col-span-2';
                                                        } else if (project.gallery.images.length === 3) {
                                                            return ind === 2 ? 'md:col-span-4' : 'md:col-span-2';
                                                        } 
                                                    }
                                                    return (
                                                        <motion.div key={ind} initial={{y: 20, opacity: 0}} whileInView={{y: 20, opacity: 1}} transition={{duration: 0.6, delay: 0.3}} className={imgs()}>
                                                            <img src={item.src ? item.src : item} className='rounded-2xl shadow-2xl' alt="" />
                                                        </motion.div>
                                                    )
                                                })
                                            }
                                        </div>
                
                                    </div>

                                    <CTA title={project.cta.title} subTitle={project.cta.desc} link={project.cta.url} img={project.cta.img.src} />

                                </div>
                            </div>
                        </section>

                    </>
                )
            }
        
        </>
    
    ) : (<div className="opacity-0"></div>)

};


export default ProjectClient;