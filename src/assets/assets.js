import logo from "@/assets/aj-logo.png";
import homeHeroSectionImg from "@/assets/building-modern-fast-and-user-friendly-web-solutions.jpg";
import overviewBg from '@/assets/overview-bg.jpg';
import overviewImg from '@/assets/overview-img.jpg';

// ProjectsHome
// Pixels
import pixelsHome from '@/assets/projectHome/pixels.jpg';
import pixelsOverview from '@/assets/projectHome/pixels-overview.jpg';
import pixelsGallery2 from '@/assets/projectHome/pixels2.jpg';
import pixelsGallery3 from '@/assets/projectHome/pixels3.jpg';

// Blogify
import blogifyHome from '@/assets/projectHome/blogify.jpg';
import blogifyOverview from '@/assets/projectHome/blogify-overview.jpg';
import blogifyGallery2 from '@/assets/projectHome/blogify2.jpg';
import blogifyGallery3 from '@/assets/projectHome/blogify3.jpg';
import blogifyGallery4 from '@/assets/projectHome/blogify4.jpg';


// Next-hire
import nexthireHome from '@/assets/projectHome/nexthire.png';
import nexthireOverview from '@/assets/projectHome/nexthire-overview.jpg';
import nexthireGallery2 from '@/assets/projectHome/nexthire2.png';
import nexthireGallery3 from '@/assets/projectHome/nexthire3.png';

// Coming soon
import comingSoonImg from '@/assets/projectHome/coming-soon.jpg';

// Services
import frontEndImg from '@/assets/servicesHome/frontend-development.png';
import backEndImg from '@/assets/servicesHome/backend-development.png';
import fullstackImg from '@/assets/servicesHome/fullstack-development.png';
import deploymentImg from '@/assets/servicesHome/deployment-and-hosting.png';
import customWebAppsImg from '@/assets/servicesHome/custom-webapps.png';
import uiuxImg from '@/assets/servicesHome/ui-ux.png';


// Images
import formImg from  '@/assets/contact-image.webp';

// Tech and tools
import htmlLogo from '@/assets/techs-and-tools/html.png';
import cssLogo from '@/assets/techs-and-tools/css.png';
import bootstrapLogo from '@/assets/techs-and-tools/bootstrap.png';
import tailwindLogo from '@/assets/techs-and-tools/tailwindCSS.svg';
import framerMotionLogo from '@/assets/techs-and-tools/framer-motion.png';
import jsLogo from '@/assets/techs-and-tools/js.png';
import reactjsLogo from '@/assets/techs-and-tools/reactJs.png';
import reduxLogo from '@/assets/techs-and-tools/redux.png';
import nodejsLogo from '@/assets/techs-and-tools/nodeJs.svg';
import expressjsLogo from '@/assets/techs-and-tools/expressJs.svg';
import nextjsLogo from '@/assets/techs-and-tools/nextjs.png';
import cloudinaryLogo from '@/assets/techs-and-tools/cloudinary.webp';
import mysqlLogo from '@/assets/techs-and-tools/mysql.png';
import mongodbLogo from '@/assets/techs-and-tools/mongoDB.svg';
import googleLogo from '@/assets/techs-and-tools/google.png';
import firebaseLogo from '@/assets/techs-and-tools/firebase.png';
import githubLogo from '@/assets/techs-and-tools/github.png';
import netlifyLogo from '@/assets/techs-and-tools/netlify.svg';
import vercelLogo from '@/assets/techs-and-tools/vercel.png';
import awsLogo from '@/assets/techs-and-tools/aws.svg';


export const assets = { logo, homeHeroSectionImg, overviewBg, overviewImg, formImg };

// Timeline
import { 
    SchoolIcon, 
    Monitor, Smartphone, Sparkles, Gauge, 
    Server, Boxes, ShieldCheck, Database, 
    Workflow, GitMerge, Settings2, TrendingUp,
    Cloud, GitBranch, Shield, Activity, 
    Code2, Layers, LayoutDashboard, FileText, 
    PenTool, Eye, MousePointerClick, Target,
    Video, Users, Monitor as MonitorIcon, ShieldCheck as ShieldCheckIcon,
    LogIn, Image, Search, Briefcase, MessageSquare
} from 'lucide-react';

import { MdEmail } from 'react-icons/md';
import { FaGithub, FaLinkedin } from 'react-icons/fa';


export const techTools = [
    { id: 1, img: htmlLogo, tech: 'HTML 5',},
    { id: 2, img: cssLogo, tech: 'CSS',},
    { id: 3, img: bootstrapLogo, tech: 'Bootstrap',},
    { id: 4, img: tailwindLogo, tech: 'Tailwind CSS',},
    { id: 5, img: framerMotionLogo, tech: 'Framer Motion',},
    { id: 6, img: jsLogo, tech: 'JavaScript',},
    { id: 7, img: reactjsLogo, tech: 'React Js',},
    { id: 8, img: reduxLogo, tech: 'Redux',},
    { id: 9, img: nodejsLogo, tech: 'Node Js',},
    { id: 10, img: expressjsLogo, tech: 'Express Js',},
    { id: 11, img: nextjsLogo, tech: 'Next Js',},
    { id: 12, img: cloudinaryLogo, tech: 'Cloudinary',},
    { id: 13, img: mysqlLogo, tech: 'MySQL',},
    { id: 14, img: mongodbLogo, tech: 'MongoDB',},
    { id: 15, img: googleLogo, tech: 'Google Auth',},
    { id: 16, img: firebaseLogo, tech: 'Firebase',},
    { id: 17, img: githubLogo, tech: 'GitHub',},
    { id: 18, img: netlifyLogo, tech: 'Netlify',},
    { id: 19, img: vercelLogo, tech: 'Vercel',},
    { id: 20, img: awsLogo, tech: 'AWS',},
];

export const projectsHome = [
    {
        id: 1,
        slug: 'pixels',
        boxClass: 'col-span-2 lg:col-span-2 relative bg-cover bg-left lg:bg-center shadow-xl rounded-xl overflow-hidden min-h-[350px]',
        projectStatus: 'completed',
        image: pixelsHome,
        name: 'Pixels',
        desc: 'A React-based video conferencing platform powered by ZEGOCLOUD SDK, offering real-time video calls, screen sharing, and smooth UI/UX for collaboration.',
        intro: {
            title: 'Connect. Collaborate. Create — Anywhere, Anytime',
            desc: 'Pixels Meet brings people together with seamless HD video calls, real-time collaboration, and secure conferencing — powered by ZEGOCLOUD and ReactJS.',
        },
        overview: {
            title: 'About Pixels Meet',
            desc: "Pixels Meet is a modern video conferencing solution built with ReactJS and powered by ZEGOCLOUD API. Designed for teams, creators, and individuals, it provides crystal-clear video calls, screen sharing, chat, and group meetings — all in one lightweight web app. Whether you're connecting with friends or collaborating with colleagues, Pixels Meet makes communication simple, fast, and reliable.",
            img: pixelsOverview,
        },
        features: {
            title: 'Key Features at a Glance',
            desc: 'Designed to make your video conferencing smooth, reliable, and effortless.',
            card: [
                {
                    title: "HD Video & Audio",
                    desc: "Experience smooth, high-quality calls without interruptions.",
                    icon: Video,
                },
                {
                    title: "Group Meetings",
                    desc: "Host or join video conferences with multiple participants.",
                    icon: Users,
                },
                {
                    title: "Screen Sharing",
                    desc: "Share your screen for presentations, projects, or teaching.",
                    icon: MonitorIcon,
                },
                {
                    title: "Secure & Reliable",
                    desc: "Encrypted connections and robust infrastructure for peace of mind.",
                    icon: ShieldCheckIcon,
                },
            ],
        },
        gallery: {
            title: 'Inside the Pixels Meet Platform',
            desc: 'Explore the core workflows of Pixels Meet. Whether it’s starting a new call, sharing your screen, or managing participants, our interface is built with ReactJS and powered by ZEGOCLOUD to deliver real-time performance.',
            images: [pixelsHome, pixelsGallery2, pixelsGallery3]
        },
        cta: {
            title: 'Pixels! Hassle-free Video Calls',
            desc: 'A modern video conferencing solution offering smooth performance, secure meetings, and easy collaboration — powered by ReactJS and ZEGOCLOUD.',
            img: pixelsHome,
            url: 'https://pixels-meet.vercel.app/',
        },
        descClass: 'w-full',
    },
    {
        id: 2,
        slug: 'blogify',
        boxClass: 'col-span-2 lg:col-span-3 relative bg-cover bg-center shadow-xl rounded-xl overflow-hidden min-h-[350px]',
        projectStatus: 'completed',
        image: blogifyHome,
        name: 'Blogify',
        desc: 'A full-stack blogging platform with rich-text blog creation, role-based authentication, media uploads, advanced search, and a fully responsive interface.',
        intro: {
            title: 'Write. Publish. Inspire — All in One Place',
            desc: 'Blogify empowers creators with a seamless platform to share stories, ideas, and knowledge through rich text editing, secure authentication, and effortless media uploads.',
        },
        overview: {
            title: 'The Story Behind Blogify',
            desc: 'Blogify is a modern blogging platform built with the MERN stack, designed to make content creation and publishing seamless. Featuring Google authentication, a rich text editor powered by CKEditor, and Cloudinary integration for media uploads, Blogify gives writers, developers, and creators a powerful space to share ideas. Whether you’re writing personal stories, technical tutorials, or community updates, Blogify makes blogging simple, secure, and enjoyable.',
            img: blogifyOverview,
        },
        features: {
            title: 'Features That Empower Creators',
            desc: 'Blogify comes with everything you need to write, publish, and share your stories — from a powerful editor to secure authentication and media uploads.',
            card: [
                    {
                    icon: FileText,
                    title: 'Rich Text Editing',
                    desc: 'Create, format, and style posts effortlessly with CKEditor.',
                },
                {
                    icon: LogIn,
                    title: 'Google Authentication',
                    desc: 'Secure sign-in with your Google account for quick and reliable access.',
                },
                {
                    icon: Image,
                    title: 'Media Uploads',
                    desc: 'Seamlessly upload and manage images, videos, and files with Cloudinary.',
                },
                {
                    icon: Users,
                    title: 'Role-Based Access',
                    desc: 'Manage writers, editors, and admins with flexible role control.',
                },
            ],
        },
        gallery: {
            title: 'The Blogify Experience',
            desc: 'Explore a collection of detailed screenshots highlighting Blogify’s MERN-powered platform in action — from the intuitive editor and seamless media uploads to advanced role-based controls that make content management effortless.',
            images: [blogifyHome, blogifyGallery2, blogifyGallery3, blogifyGallery4],
        },
        cta: {
            title: 'Start Your Blogging Journey Today',
            desc: 'Blogify lets you experience a modern, seamless way to create, publish, and share your ideas with the world. From drafting to publishing, everything is designed to make your blogging experience faster, smarter, and more enjoyable.',
            img: blogifyHome,
            url: '#',
        },
        descClass: 'md:w-3/5',
    },
    {
        id: 3,
        slug: 'next-hire',
        boxClass: 'col-span-2 lg:col-span-3 relative bg-cover bg-center shadow-xl rounded-xl overflow-hidden min-h-[350px]',
        projectStatus: 'completed',
        image: nexthireHome,
        name: 'NextHire',
        desc: 'A modern job portal built with the MERN stack, featuring role-based dashboards, job listings, resume uploads, and recruiter–candidate interaction.',
        intro: {
            title: 'Discover. Apply. Get Hired — With NextHire',
            desc: 'NextHire makes job searching simple and hiring efficient. With an easy interface, quick applications, and real-time updates, it connects job seekers with the right opportunities and employers with top talent.',
        },
        overview: {
            title: 'About NextHire',
            desc: 'NextHire is a modern job portal platform built to connect talent with opportunity. Designed with the MERN stack, it streamlines the hiring process for both job seekers and employers. From creating professional profiles and browsing job listings to managing applications and employer dashboards, NextHire makes recruitment smarter, faster, and more efficient.',
            img: nexthireOverview,
        },
        features: {
            title: 'Why Choose NextHire?',
            desc: 'Smart tools designed to connect job seekers with opportunities and employers with talent — all in one platform.',
            card: [
                    {
                    icon: Search,
                    title: 'Smart Job Search',
                    desc: 'Find the right jobs faster with AI-powered search and filters that match your skills, interests, and goals.'
                },
                {
                    icon: FileText,
                    title: 'Easy Applications',
                    desc: 'Apply to multiple jobs with just a few clicks using your saved resume and profile information.',
                },
                {
                    icon: Briefcase,
                    title: 'Employer Tools',
                    desc: 'Employers get powerful tools to post jobs, manage applicants, and streamline their hiring process.',
                },
                {
                    icon: MessageSquare,
                    title: 'Seamless Communication',
                    desc: 'Built-in chat and notifications keep job seekers and employers connected throughout the hiring journey.',
                },
            ],
        },
        gallery: {
            title: 'Explore NextHire in Action',
            desc: 'Take a closer look at NextHire’s clean and intuitive interface — from job search and applications to employer tools and communication features. These snapshots highlight how seamless and efficient your hiring journey can be.',
            images: [nexthireHome, nexthireGallery2, nexthireGallery3]
        },
        cta: {
            title: 'Ready to Find Your Next Opportunity?',
            desc: 'Start your journey with NextHire today — whether you’re a job seeker looking for the perfect role or an employer searching for top talent. Our streamlined platform makes hiring and applying effortless, secure, and efficient.',
            img: nexthireHome,
            url: '#',
        },
        descClass: 'md:w-3/5',
    },
    {
        id: 4,
        slug: 'coming-soon',
        boxClass: 'col-span-2 lg:col-span-2 relative bg-cover bg-center shadow-xl rounded-xl overflow-hidden min-h-[350px]',
        projectStatus: 'coming soon',
        image: comingSoonImg,
        name: 'SaaS App',
        desc: 'A SaaS app is under development!',
        descClass: 'w-full',
        link: '#',
    },
]

export const servicesHome = [
    {
        id: 1,
        image: frontEndImg,
        title: 'Frontend Development',
        desc: 'Building responsive, interactive, and visually appealing user interfaces with React, Next.js, and TailwindCSS.',
        overview: 'I specialize in creating responsive, interactive, and visually stunning user interfaces that deliver exceptional user experiences. Using React, Next.js, and TailwindCSS, I ensure your website or web application is not only fast and lightweight but also intuitive and engaging. From animations and transitions to mobile responsiveness, I craft designs that adapt beautifully across all devices.',
        highlights: [
            {
                img: Monitor,
                title: 'Pixel-perfect UI implementation',
            },
            {
                img: Smartphone,
                title: 'Mobile-first and responsive design',
            },
            {
                img: Sparkles,
                title: 'Interactive components and smooth user experiences',
            },
            {
                img: Gauge,
                title: 'Performance-optimized frontend architecture',
            },
        ],
        process: [
            { 
                step: 1, 
                title: "Discovery & Requirements", 
            },
            { 
                step: 2, 
                title: "Architecture & Setup", 
            },
            { 
                step: 3, 
                title: "UI Build", 
            },
            { 
                step: 4, 
                title: "Interactions & Data", 
            },
            { 
                step: 5, 
                title: "Accessibility & Cross-Browser", 
            },
            { 
                step: 6, 
                title: "Performance & QA", 
            },
        ],
    },
    {
        id: 2,
        image: backEndImg,
        title: 'Backend Development',
        desc: 'Developing secure, efficient, and scalable server-side applications using Node.js, Express, and REST APIs.',
        overview: 'A strong backend is the backbone of any successful application. I develop secure, scalable, and high-performing server-side applications using Node.js and Express, along with REST APIs for seamless communication. My backend solutions are designed to handle heavy traffic, integrate with databases, and maintain data security.',
        highlights: [
            {
                img: Server,
                title:'RESTful API development',
            },
            {
                img: Boxes,
                title:'Scalable and modular architecture',
            },
            {
                img: ShieldCheck,
                title:'Authentication & authorization systems (JWT, OAuth)',
            },
            {
                img: Database,
                title:'Secure data handling and error management',
            },
        ],
         process: [
            { 
                step: 1, 
                title: "Requirements & Data Modeling", 
            },
            { 
                step: 2, 
                title: "API Design", 
            },
            { 
                step: 3, 
                title: "Project Setup", 
            },
            { 
                step: 4, 
                title: "Business Logic & Integrations", 
            },
            { 
                step: 5, 
                title: "Security & Auth", 
            },
            { 
                step: 6, 
                title: "Testing & Hardening", 
            },
        ],
    },
    {
        id: 3,
        image: fullstackImg,
        title: 'Full Stack Solutions',
        desc: 'Delivering complete web applications with seamless integration between frontend, backend, and databases (MongoDB, MySQL).',
        overview: 'I bring together frontend and backend expertise to deliver complete web applications that are both functional and visually compelling. With experience in MongoDB, MySQL, and modern frameworks, I build end-to-end solutions tailored to business needs. From idea to deployment, I ensure smooth integration across all layers of the application.',
        highlights: [
            {
                img: Workflow,
                title: 'Complete end-to-end development',
            },
            {
                img: GitMerge,
                title: 'Seamless integration of frontend, backend, and databases',
            },
            {
                img: Settings2,
                title: 'Business-specific customization',
            },
            {
                img: TrendingUp,
                title: 'Scalable and maintainable solutions',
            },
        ],
         process: [
            { 
                step: 1, 
                title: "Discovery & Scope", 
            },
            { 
                step: 2, 
                title: "System Design", 
            },
            { 
                step: 3, 
                title: "Prototype & UI", 
            },
            { 
                step: 4, 
                title: "Iterative Development", 
            },
            { 
                step: 5, 
                title: "End-to-End Testing", 
            },
            { 
                step: 6, 
                title: "Launch & Iterate", 
            },
        ],
    },
    {
        id: 4,
        image: deploymentImg,
        title: 'Deployment & Hosting',
        desc: 'Ensuring smooth deployment on cloud platforms like AWS, Vercel, and Hostinger with CI/CD workflows.',
        overview: 'A powerful application needs a reliable environment to run. I handle deployment and hosting on platforms like AWS, Vercel, and Hostinger, ensuring speed, security, and uptime. With CI/CD pipelines, I automate deployment processes for faster updates and continuous improvements.',
        highlights: [
            {
                img: Cloud,
                title: 'Cloud-based hosting (AWS, Vercel, Hostinger)',
            },
            {
                img: GitBranch,
                title: 'CI/CD pipeline setup for automation',
            },
            {
                img: Shield,
                title: 'Domain & SSL configuration',
            },
            {
                img: Activity,
                title: 'Performance monitoring & optimization',
            },
        ],
        process: [
            { 
                step: 1, 
                title: "Infra Assessment", 
            },
            { 
                step: 2, 
                title: "Environment Setup", 
            },
            { 
                step: 3, 
                title: "CI/CD Pipeline", 
            },
            { 
                step: 4, 
                title: "Provisioning", 
            },
            { 
                step: 5, 
                title: "Deploy & Verify", 
            },
            { 
                step: 6, 
                title: "Monitoring & Optimization", 
            },
        ],
    },
    {
        id: 5,
        image: customWebAppsImg,
        title: 'Custom Web Applications',
        desc: 'Tailored solutions for blogs, job portals, dashboards, and business apps built to meet unique requirements.',
        overview: 'Every business has unique needs, and I specialize in building custom web applications tailored to specific goals. Whether it’s a blog, job portal, admin dashboard, or business management tool, I create solutions that align with your requirements and enhance productivity.',
        highlights: [
            {
                img: Code2,
                title: 'Custom-built apps for business needs',
            },
            {
                img: Layers,
                title: 'Feature-rich, scalable architecture',
            },
            {
                img: LayoutDashboard,
                title: 'Dashboard & admin panel development',
            },
            {
                img: FileText,
                title: 'Blog, portfolio, and job portal solutions',
            },
        ],
        process: [
            { 
                step: 1, 
                title: "Problem Framing", 
            },
            { 
                step: 2, 
                title: "Blueprint & Roadmap", 
            },
            { 
                step: 3, 
                title: "Architecture & Stack", 
            },
            { 
                step: 4, 
                title: "MVP Build", 
            },
            { 
                step: 5, 
                title: "UAT & Iteration", 
            },
            { 
                step: 6, 
                title: "Production Rollout", 
            },
        ],
    },
    {
        id: 6,
        image: uiuxImg,
        title: 'UI/UX Implementation',
        desc: 'Translating designs into pixel-perfect, user-friendly interfaces that enhance the overall experience.',
        overview: 'A great product isn’t just about functionality—it’s about the experience. I translate UI/UX designs into pixel-perfect, user-friendly interfaces that delight users. By combining design systems, accessibility standards, and performance best practices, I create digital experiences that keep users engaged.',
        highlights: [
            {
                img: PenTool,
                title: 'Pixel-perfect design implementation',
            },
            {
                img: Eye,
                title: 'Accessibility-friendly UI',
            },
            {
                img: MousePointerClick,
                title: 'Interactive and engaging user flows',
            },
            {
                img: Target,
                title: 'Conversion-focused design execution',
            },
        ],
        process: [
            { 
                step: 1, 
                title: "Design Intake & Audit", 
            },
            { 
                step: 2, 
                title: "Library & Tokens", 
            },
            { 
                step: 3, 
                title: "Pixel-Perfect Build", 
            },
            { 
                step: 4, 
                title: "Accessibility", 
            },
            { 
                step: 5, 
                title: "Micro-Interactions", 
            },
            { 
                step: 6, 
                title: "Usability QA", 
            },
        ],
    },
]

export const timeline = [
    {
        id: 1,
        classname: 'vertical-timeline-element--work',
        date: 'May, 2025 - Present',
        contentStyle: { background: 'linear-gradient(to bottom right, #FFCC3365, #FFB34765, #FF990065)', borderRadius: '12px', color: '#000000', fontWeight: '600', boxShadow: '0 10px 20px rgba(0,0,0,0.3)', padding: '20px' },
        contentArrowStyle: { borderRight: '7px solid #fec983' },
        iconStyle: { background: '#fec983', color: '#ffffff' },
        icon: SchoolIcon,
        title: 'Lead Full-Stack Developer',
        location: 'Strings infinity, Coimbatore',
        desc: 'Leading end-to-end web application development at Strings Infinity using the MERN stack. Overseeing technical strategy, scalable architecture, and guiding the team to deliver high-performance solutions.',
    },
    {
        id: 2,
        classname: 'vertical-timeline-element--education',
        date: 'March, 2024 – May 2024',
        contentStyle: { background: 'linear-gradient(to bottom right, #B0B0B0, #CCCCCC, #F0F0F0)', borderRadius: '12px', color: '#000000', fontWeight: '600', boxShadow: '0 10px 20px rgba(0,0,0,0.3)', padding: '20px' }, 
        contentArrowStyle: { borderRight: '7px solid #B0B0B0' },
        iconStyle: { background: '#B0B0B0', color: '#ffffff' },
        icon: SchoolIcon,
        title: 'Zen Class Full Stack Developer Program',
        location: 'GUVI GEEKS',
        desc: 'Completed an intensive program at GUVI (IIT-M incubated, in collaboration with Google for Education), mastering frontend, backend, and database technologies to strengthen full-stack expertise.',
    },
    {
        id: 3,
        classname: 'vertical-timeline-element--work',
        date: 'June, 2023 – April 2025',
        contentStyle: { background: 'linear-gradient(to bottom right, #FFCC3365, #FFB34765, #FF990065)', borderRadius: '12px', color: '#000000', fontWeight: '600', boxShadow: '0 10px 20px rgba(0,0,0,0.3)', padding: '20px' }, 
        contentArrowStyle: { borderRight: '7px solid #fec983' },
        iconStyle: { background: '#fec983', color: '#ffffff' },
        icon: SchoolIcon,
        title: 'Frontend Developer',
        location: 'Strings infinity, Coimbatore',
        desc: 'Built responsive and user-friendly interfaces at Strings Infinity, enhancing performance and user experience with modern JavaScript frameworks.',
    },
    {
        id: 4,
        classname: 'vertical-timeline-element--education',
        date: 'June, 2017 - April, 2020',
        contentStyle: { background: 'linear-gradient(to bottom right, #B0B0B0, #CCCCCC, #F0F0F0)', borderRadius: '12px', color: '#000000', fontWeight: '600', boxShadow: '0 10px 20px rgba(0,0,0,0.3)', padding: '20px' }, 
        contentArrowStyle: { borderRight: '7px solid #B0B0B0' },
        iconStyle: { background: '#B0B0B0', color: '#ffffff' },
        icon: SchoolIcon,
        title: 'B.E. Mechanical Engineering',
        location: 'P. A. College of Engg & Tech, Pollachi',
        desc: 'Graduated from P.A. College of Engineering and Technology with a degree in Mechanical Engineering. Gained strong fundamentals in engineering principles, problem-solving, and logical thinking.',
    },
    {
        id: 5,
        classname: 'vertical-timeline-element--education',
        date: 'June, 2014 - April, 2017',
        contentStyle: { background: 'linear-gradient(to bottom right, #FFCC3365, #FFB34765, #FF990065)', fontWeight: '600', boxShadow: '0 10px 20px rgba(0,0,0,0.3)', padding: '20px', marginBottom: '50px' }, 
        contentArrowStyle: { borderRight: '7px solid #fec983' },
        iconStyle: { backgroundColor: '#fec983', color: '#ffffff' },
        icon: SchoolIcon,
        title: 'Diploma in Mechanical Enggineering',
        location: 'P. A. Polytechnic College, Pollachi',
        desc: 'Completed my Diploma in Mechanical Engineering at P.A. Polytechnic College, Pollachi, where I built a strong foundation in core mechanical concepts and technical skills.',
    },
];

export const socialMedia = [
    {
        id: 1,
        url: 'https://www.linkedin.com/in/ajith11399',
        icon: FaLinkedin,
        media: 'LinkedIn',
        name: 'ajith11399',
    },
    {
        id: 2,
        url: 'https://github.com/Ajith-11399',
        icon: FaGithub,
        media: 'GitHub',
        name: 'Ajith-11399',
    },
    {
        id: 3,
        url: 'mailto:ajithironmark42@gmail.com',
        icon: MdEmail,
        media: 'Email Address',
        name: 'ajithironmark42@gmail.com',
    },
]