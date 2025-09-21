"use client";
import { motion } from 'framer-motion';
import { ScrollArea } from '@/components/ui/scroll-area';


// components
import Journey from '@/components/Journey';
import Skills from '@/components/Skills';


const About = () => {
  return ( 
  <motion.section 
      initial={{opacity: 0}} 
      animate={{
        opacity: 1, transition: {delay: 2.4, duration: 0.4, ease: "easeIn"},
      }}
      className="h-screen flex items-center"
  >
    <div className="container mx-auto px-0">
      <div className="flex flex-col xl:flex-row items-center gap-24 w-full h-[550px]">
        {/* img & social icons */}
        <div className="hidden xl:flex flex-col w-full h-full pt-14 max-w-[430px] relative pl-15">
          <Skills />
          <div className="flex items-center gap-3 mt-8 justify-end pr-10">
            <div className="w-2 h-2 bg-accent rounded-full"></div>
            <p>My skills</p>
          </div>
          
        </div>
        {/* scroll area */}
        <ScrollArea className="w-full h-[550px]">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-2 h-2 bg-accent rounded-full"></div>
              <p>About me</p>
            </div>
            <h2 className="h2 mb-6">
              <span className="text-accent">Yongshan</span> Liang
            </h2>
            <p className="max-w-[480px] mb-12">
              Former engineer turned teacher, now transitioning into tech. Experienced in self-directed learning and team leadership, with a foundation in Python, SQL, JavaScript, HTML, CSS, and React. Adept at problem-solving, quick learning, effective communication, and collaborative teamwork.
            </p>
            <div className="flex flex-col items-start gap-16">
              <Journey />
              <div className="xl:hidden">
                <Skills />
              </div>
            </div>
          </div>
        </ScrollArea>
      </div>
    </div>
  </motion.section>
  );
};

export default About;