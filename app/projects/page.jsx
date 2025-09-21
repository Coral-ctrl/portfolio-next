"use client";
import { motion } from 'framer-motion';
import { useState } from 'react';

// swiper
import {Swiper, SwiperSlide} from 'swiper/react';
import { Pagination } from 'swiper/modules';
import "swiper/css";
import "swiper/css/pagination";

// tabs
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'; 
import Link from 'next/link';
import Image from 'next/image';
import { MdArrowOutward } from 'react-icons/md';
import {FaGithub} from "react-icons/fa";

// data
const projects = [
  {
    id: 1,
    category: "frontend",
    title: "My Portfolio Site",
    description: "Next.js portfolio site",
    image: "/assets/work/thumb3.png",
    link: "",
    github: "",
    tech: ["Next.js", "Tailwind CSS", "Shadcn UI"],
  },
  {
    id: 2,
    category: "frontend",
    title: "UV Daily",
    description: "UV Daily is an interactive website designed to help children learn about sun safety in a playful way. It makes it easy to identify the current UV index and encourages children to protect themselves by using the Slip, Slop, Slap, Seek, and Slide sun safety tips.",
    image: "/assets/work/thumb1.png",
    link: "",
    github: "https://github.com/Coral-ctrl/UV-Daily",
    tech: ["JavaScript", "Node.js", "Express.js", "Axios", "HTML", "CSS"],
  },
  {
    id: 3,
    category: "fullstack",
    title: "Sort-a-Book",
    description: "A full-stack web app for tracking, sorting, and reviewing picturebooks you've read. Features include adding books with metadata, sorting by title or recency, filtering by categories, and fetching book covers from the Open Library Covers API.",
    image: "/assets/work/thumb2.png",
    link: "",
    github: "https://github.com/Coral-ctrl/Sort-a-Book",
    tech: ["PostgreSQL", "Bootstrap", "JavaScript", "Node.js", "Express.js", "Axios", "HTML", "CSS"],
  },
  {
    id: 4,
    category: "frontend",
    title: "Canto Vibes",
    description: "Website that promotes Cantonese culture",
    image: "/assets/work/thumb4.png",
    link: "",
    github: "https://github.com/Coral-ctrl/Canton-Vibes.git",
    tech: ["JavaScript", "HTML", "CSS"],
  },
]

const categories = ["frontend", "fullstack"];

const Work = () => {
  const [swiperStates, setSwiperStates] = useState({});
  
  const handleSlideChange = (swiper, category) => {
    const currentIndex = swiper.activeIndex;
    const totalSlides = swiper.slides.length;
    
    setSwiperStates(prev => ({
      ...prev,
      [category]: {
        isFirst: currentIndex === 0,
        isLast: currentIndex === totalSlides - 1,
        currentIndex,
        totalSlides
      }
    }));
  };

  const initializeSwiper = (swiper, category) => {
    const totalSlides = swiper.slides.length;
    setSwiperStates(prev => ({
      ...prev,
      [category]: {
        isFirst: true,
        isLast: totalSlides === 1,
        currentIndex: 0,
        totalSlides
      }
    }));
  };

  return ( 
  <motion.section 
      initial={{opacity: 0}} 
      animate={{
        opacity: 1, transition: {delay: 2.4, duration: 0.4, ease: "easeIn"},
      }}
      className="min-h-screen flex items-center py-24 xl:py-0 pb-32 xl:pb-24"
  >
    <div className="container mx-auto w-full h-full flex flex-col justify-center">
      {/* heading */}
      <h2 className="h2 my-6 xl:my-12 max-w-[600px]">
        My Latest <span className="text-accent">Projects</span>
      </h2>
      {/* tabs */}
      <Tabs
        defaultValue="frontend"
        className="w-full flex flex-col gap-6 xl:gap-12"
      >
        {/* tabs list */}
        <TabsList className="flex flex-wrap justify-center items-center gap-4 h-full mb-4 xl:mb-0">
          {categories.map((category) => {
            return (
              <TabsTrigger 
                key={category} 
                value={category} 
                className="capitalize border border-journey/10 data-[state=active]:bg-accent data-[state=active]:text-white data-[state=active]:border-accent h-[48px] px-6 rounded-full cursor-pointer"
              >
                {category === "uiux" ? "UX UI Design" : category}
              </TabsTrigger>
            );
          })}
        </TabsList>
        {/* tabs content */}
        <div className="h-[500px] scrollbar scrollbar-thumb-accent scrollbar-track-accent/5 overflow-y-scroll xl:overflow-y-visible mb-12 xl:mb-8">
          {categories.map((category) => {
            return (
              <TabsContent key={category} value={category}>
                <Swiper 
                modules={[Pagination]} 
                pagination={{clickable: true, dynamicBullets: true}} 
                className="h-max xl:h-[400px] pb-16 xl:pb-12"
                onSlideChange={(swiper) => handleSlideChange(swiper, category)}
                onSwiper={(swiper) => initializeSwiper(swiper, category)}
                >
                  {projects.filter((project) => project.category === category).map((project, index) => {
                    const categoryState = swiperStates[category] || {};
                    const showPrevious = !categoryState.isFirst;
                    const showNext = !categoryState.isLast;

                    return (
                      <SwiperSlide key={project.id} className="h-full">
                        <div className="flex flex-col h-full xl:flex-row gap-8 xl:gap-12">
                          {/* project info */}
                          <div className="w-full max-w-[380px] flex flex-col gap-6 xl:gap-8 xl:pt-6 order-2 xl:order-none">
                            {/* title */}
                            <h3 className="h3 text-journey">{project.title}</h3>
                            {/* tech */}
                            <div className="xl:mb-4 max-w-[300px] min-h-[130px]">
                              <p className="mb-4">Technology Used</p>
                              <ul className="flex flex-wrap gap-4">
                                {project.tech.map((item, index) => {
                                  return (
                                    <li key={index} className="flex items-center gap-4 bg-[#a883ff]/13 h-[28px] px-[14px] rounded-full">{item}</li>
                                  );
                                })}
                              </ul>
                            </div>
                            {/* btns */}
                            <div className="flex flex-col sm:flex-row gap-4 items-start">
                              <Link href={project.link}>
                                <button className="btn btn-sm btn-accent flex gap-2">
                                  <MdArrowOutward className="text-xl" />
                                  <span>Live Project</span>
                                </button>
                              </Link>
                              <Link href={project.github}>
                                <button className="btn btn-sm btn-journey flex gap-2">
                                  <FaGithub className="text-xl" />
                                  <span>Github Repo</span>
                                </button>
                              </Link>
                            </div>
                          </div>
                          {/* project img */}
                          <div className="w-full h-[180px] md:h-[280px] xl:h-[360px] relative order-1 xl:order-none bg-gray-800 rounded-t-lg shadow-xl group">
                            {/* Browser header */}
                            <div className="h-8 bg-gray-700 rounded-t-lg flex items-center px-3 gap-2">
                              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                            </div>
                            {/* Website content */}
                            <div className="relative w-full" style={{height: 'calc(100% - 32px)'}}>
                              {project.id === 1 ? (
                                <div className="w-full h-full portfolio-bg" />
                              ) : (
                                <Image 
                                src={project.image}
                                alt={project.title}
                                fill 
                                className="object-cover object-top" 
                                />
                              )}

                              {/* Swipe indicators overlay */}
                              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                <div className="text-journey text-2xl font-mono tracking-wider drop-shadow-lg">
                                  {showPrevious && showNext && "<<---     --->>"}
                                  {showPrevious && !showNext && "<<---"}
                                  {!showPrevious && showNext && "--->>"}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                      </SwiperSlide>
                    );
                  })}
                </Swiper>
              </TabsContent>
            )
          })}
        </div>
      </Tabs>
    </div>
  </motion.section>
  );
};

export default Work;