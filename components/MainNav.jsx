"use client";
import React from 'react'
import { RiSunFill, RiMoonFill } from "react-icons/ri";
import NavLinks from './NavLinks';
import Logo from './Logo';

const MainNav = ({ darkMode, setDarkMode }) => {
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  }

  

  return (
 
      <nav className="w-full pt-16">
        <div className="flex flex-col h-full items-center justify-between">
          <Logo />
          <NavLinks containerStyles="flex flex-col gap-6" />
          <button 
          className="w-12 h-12 mb-16 btn-mode-toggle rounded-full flex items-center justify-center"
          onClick={toggleDarkMode}
          >
            {darkMode ? <RiSunFill size={24} /> : <RiMoonFill />}
          </button>
        </div>
      </nav>

  );
};

export default MainNav;