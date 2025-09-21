"use client";
import { RiSunFill, RiMoonFill } from "react-icons/ri";
// components
import Logo from "./Logo";
import Socials from "./Socials";
import {CiMenuFries} from 'react-icons/ci';

import {Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger} from '@/components/ui/sheet';

import NavLinks from "./NavLinks";


const Header = ({ darkMode, setDarkMode }) => {
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  }

  return (
    <header className="xl:hidden absolute z-40 left-0 top-0 right-0">
        <div className="container mx-auto">
            <div className="flex items-center justify-between py-6">
                {/* logo */}
                <Logo />
                {/* nav mobile - (Sheet Component) */}
                <Sheet>
                    <SheetTrigger className="cursor-pointer text-[30px] text-journey">
                        <CiMenuFries />
                    </SheetTrigger>
                    <SheetContent className="bg-secondary border-0 flex flex-col justify-between items-center pt-16 pb-20 [&>button]:text-white/50 [&>button:hover]:text-white" side="left">
                        <SheetHeader>
                            <SheetTitle>
                                <Logo />
                            </SheetTitle>
                            <SheetDescription className="sr-only">
                                Navigation menu
                            </SheetDescription>
                        </SheetHeader>
                        <NavLinks containerStyles="flex flex-col gap-8 max-w-[100px]" />
                        <div className="flex gap-4 justify-center items-center">
                            <button 
                                className="w-10 h-10 btn-mode-toggle rounded-full flex items-center justify-center"
                                onClick={toggleDarkMode}
                            >
                                {darkMode ? <RiSunFill size={22} /> : <RiMoonFill />}
                            </button>
                            <Socials 
                                containerStyles="flex gap-4 justify-center" 
                                iconStyles="bg-accent text-white hover:bg-accent-hover transition w-[40px] h-[40px] text-[20px] flex items-center justify-center rounded-full cursor-pointer" 
                            />
                        </div>
                    </SheetContent>
                </Sheet>
            </div>
        </div>
    </header>
  );
};

export default Header;