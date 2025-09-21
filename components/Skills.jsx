"use client";

import { motion } from "framer-motion";
import {
  RiReactjsFill,
  RiNextjsFill,
  RiHtml5Fill,
  RiCss3Fill,
  RiTailwindCssFill,
  RiNodejsFill,
  RiJavascriptFill,
  RiBootstrapFill,
} from "react-icons/ri";

import {
  SiPython,
  SiPostgresql,
  SiAmazonwebservices,
  SiGit,
  SiPostman,
  SiGithub,
  SiRadixui,
  SiMysql,
} from "react-icons/si";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const skills = [
  { icon: <RiReactjsFill />, name: "React.js" },
  { icon: <RiNextjsFill />, name: "Next.js" },
  { icon: <RiHtml5Fill />, name: "HTML" },
  { icon: <RiCss3Fill />, name: "CSS" },
  { icon: <RiTailwindCssFill />, name: "Tailwind CSS" },
  { icon: <RiNodejsFill />, name: "Node.js" },
  { icon: <RiJavascriptFill />, name: "JavaScript" },
  { icon: <SiPython />, name: "Python" },
  { icon: <SiPostgresql />, name: "PostgreSQL" },
  { icon: <SiMysql />, name: "Mysql" },
  { icon: <SiAmazonwebservices />, name: "AWS" },
  { icon: <RiBootstrapFill />, name: "Bootstrap" },
  { icon: <SiRadixui />, name: "shadcn/ui" },
  { icon: <SiPostman />, name: "Postman" },
  { icon: <SiGit />, name: "Git" },
  { icon: <SiGithub />, name: "GitHub" },
];

const Skills = () => {
  return (
    <div>
      <h2 className="h2 mb-8 xl:hidden">
        My <span className="text-accent">Skills</span>
      </h2>
      <div className="flex flex-wrap gap-6 max-w-sm xl:max-w-none xl:mt-15">
        {skills.map((item, index) => (
          <TooltipProvider key={index}>
            <Tooltip>
              <TooltipTrigger asChild>
                {/* floating + circle animation */}
                <motion.div
                  className="relative w-16 h-16 rounded-full flex items-center justify-center bg-tertiary/70 group"
                  animate={{
                    x: [0, 6, 0, -6, 0],
                    y: [0, -6, 0, 6, 0],
                  }}
                  transition={{
                    duration: 5 + index * 0.2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  {/* outer animated circle */}
                  <motion.div
                    className="absolute inset-0 rounded-full border-2 border-accent/40"
                    animate={{
                      rotate: 360,
                    }}
                    transition={{
                      duration: 12,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />
                  {/* icon */}
                  <div className="text-3xl group-hover:text-accent transition-all duration-300 relative z-10">
                    {item.icon}
                  </div>
                </motion.div>
              </TooltipTrigger>
              <TooltipContent>
                <p className="text-lg">{item.name}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        ))}
      </div>
    
    </div>
  );
};

export default Skills;
