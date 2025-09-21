"use client";
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { HiOutlineMapPin } from 'react-icons/hi2';
import Link from "next/link";
import Script from "next/script";


// components
import Socials from '@/components/Socials';


const Home = () => {
  return (
    <motion.section 
      initial={{opacity: 0}} 
      animate={{
        opacity: 1, transition: {delay: 2.4, duration: 0.4, ease: "easeIn"},
      }}
      className="h-screen flex items-center"
    >
   
      <div className="flex flex-col xl:flex-row items-center justify-between w-full">
        {/* text */}
        <div className="w-full xl:w-[700px] flex flex-col items-center xl:items-start text-center xl:text-left pl-15">
          <h1 className="h1 flex-1">
            Hello, I'm a <br />
          </h1>
          <h2 className="h2 flex-1 mb-[28px] font-bold min-h-[1.2em]">
          <TypeAnimation 
          sequence={["Web Developer", 2000, "Cloud Practitioner", 2000]} 
          wrapper="span" 
          speed={40}
          className="text-accent"
          repeat={Infinity}
          cursor={false}
           />
          </h2>
          <p className="max-w-[500px] mb-[44px]">
            With a background in engineering and teaching, I’m now expanding my expertise in web development, data analysis, and cloud technologies through self-learning and online courses. I’m passionate about problem-solving, continuous learning, and adapting to new challenges as I transition into the tech industry.
          </p>
          <Link
            href="/contact"
            className="btn btn-lg btn-accent mb-16 flex items-center gap-3 cursor-pointer transition-all duration-300 hover:scale-105 hover:bg-accent-hover"
          >
            <span className="text-white">Let's connect!</span>
          </Link>
          {/* contact info */}
          <div className="flex flex-col xl:flex-row xl:items-center gap-4 xl:gap-8 mb-12 xl:mb-0">
            {/* location */}
            <div className="flex items-center gap-4 text-lg">
                <span className="text-accent">
                  <HiOutlineMapPin className="text-xl" />
                </span>
                <span>Melbourne, AU</span>
            </div>
          </div>
          {/* socials */}
          <Socials containerStyles="flex xl:flex-col gap-6 xl:flex xl:absolute xl:top-1/2 xl:right-2 xl:transform xl:-translate-x-1/2 xl:-translate-y-1/2 z-30" iconStyles="bg-accent text-white hover:bg-accent-hover transition w-[48px] h-[48px] text-[22px] flex items-center justify-center rounded-full cursor-pointer" />

        </div>

        {/* spline 3D */}
        <div className="hidden xl:block flex-1 relative z-20">
         <div className="relative flex justify-center">
            <div className="scale-60 origin-center">
              <div
                className="w-[600px] h-[600px]"
                dangerouslySetInnerHTML={{
                  __html: `<spline-viewer 
                            url="https://prod.spline.design/6UkhCpjVuFpLQbqn/scene.splinecode" 
                            camera-controls="false"
                            style="width:100%; height:100%; display:block; pointer-events:none; user-select:none;"
                          ></spline-viewer>`,
                }}
              />
            </div>
          </div>
          {/* overlay */}
          <div className="absolute bottom-0 w-full h-[160px] bg-primary z-40"></div>
        </div>
      </div>


      <Script
        type="module"
        src="https://unpkg.com/@splinetool/viewer@1.10.57/build/spline-viewer.js"
        strategy="afterInteractive"
      />
    </motion.section>
  )
};

export default Home;