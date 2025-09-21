"use client";
import { motion } from 'framer-motion';
// import swiper react components
import {Swiper, SwiperSlide} from 'swiper/react'
// imporr swiper modules
import {Pagination} from 'swiper/modules';
// import swiper styles
import "swiper/css";
import "swiper/css/pagination";

import Image from 'next/image';
import Link from 'next/link';
import {MdOutlineArrowOutward, MdArrowRightAlt} from 'react-icons/md';

const certificates = [
  {
    icon: "/assets/certs/ccp.png",
    href: "https://www.credly.com/badges/20e27a91-c7e5-4069-b683-163696fbd005/linked_in_profile",
    title: "AWS Certified Cloud Practitioner",
  },
  {
    icon: "/assets/certs/ada.png",
    href: "https://www.datacamp.com/certificate/DAA0016066659060",
    title: "Data Analyst Associate",
  },
  {
    icon: "/assets/certs/wdb.png",
    href: "https://www.linkedin.com/feed/update/urn:li:activity:7361675766847229952/",
    title: "The Complete Full-Stack Web Development Bootcamp",
  },
  {
    icon: "/assets/certs/cc101.png",
    href: "https://www.credly.com/badges/7982f45f-f14f-4283-8956-5650e640b269/linked_in_profile",
    title: "AWS Educate Introduction to Cloud 101",
  },
  {
    icon: "/assets/certs/databases.png",
    href: "https://www.credly.com/badges/8fea9c81-3ef9-4bc7-b27f-570cdb6962a7/linked_in_profile",
    title: "AWS Educate Getting Started with Databases",
  },
]

const Certificates = () => {
  return ( 
  <motion.section 
      initial={{opacity: 0}} 
      animate={{
        opacity: 1, transition: {delay: 2.4, duration: 0.4, ease: "easeIn"},
      }}
  className="h-screen flex items-center">
    <div className="container mx-auto w-full flex flex-col gap-16">
      {/* text */}
      <div className="flex flex-col xl:flex-row justify-between items-start xl:items-center gap-8">
        {/* headline */}
        <h2 className="h2 max-w-[480px] text-left xl:mb-0">
          Licenses & <span className="text-accent">Certifications</span>
        </h2>
        {/* btn */}
        <a 
        href="https://www.linkedin.com/in/yongshan-liang-053b96207/details/certifications/"
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-lg btn-accent flex gap-2 cursor-pointer transition-all duration-300 hover:scale-105 hover:bg-accent-hover z-30"
        >
          All certificates <MdArrowRightAlt className="text-2xl" />
        </a>
      </div>
      {/* slider */}
      <Swiper 
        spaceBetween={30} 
        slidesPerView={1} 
        breakpoints={{
          640: {slidesPerView: 2},
          1024: {slidesPerView: 3},
        }}
        modules={[Pagination]}
        pagination={{clickable: true, dynamicBullets: true}}
        className="h-[320px]"
      >
        {certificates.map((item, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="bg-secondary/90 w-full h-[284px] rounded-[20px] px-[30px] py-[40px] flex flex-col justify-between">
                <div className='flex items-center justify-between mb-8'>
                  <Image src={item.icon} width={68} height={68} alt={item.title} />
                  <Link 
                    href={item.href}
                    target="_blank"
                    className="w-12 h-12 bg-accent rounded-full flex items-center justify-center cursor-pointer text-2xl hover:rotate-45 transition-all"
                  >
                    <MdOutlineArrowOutward />
                  </Link>
                </div>
                <h5 className="text-[22px] font-medium max-w-[240px] text-journey">
                  {item.title}
                </h5>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  </motion.section>
  );
};

export default Certificates;