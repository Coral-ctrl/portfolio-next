"use client";

import React, { useState, useEffect } from "react";
// components
import MainNav from "./MainNav";
import PageTransition from "./PageTransition";
import RectangleTransition from "./RectangleTransition";
import Gradient from "./Gradient";
import Header from "./Header";
import Footer from "./Footer";

const ClientLayout = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const html = document.documentElement;
    if (darkMode) html.classList.add("dark");
    else html.classList.remove("dark");
  }, [darkMode]);

  return (
    <>
      {darkMode && <Gradient />}
      <RectangleTransition />
        <PageTransition>
          <div className="flex h-screen">
          {/* main nav */}
          <div className="hidden xl:flex w-[285px] h-full bg-secondary">
            <MainNav darkMode={darkMode} setDarkMode={setDarkMode} />
          </div>
          <div className="flex flex-col w-full max-w-[1130px] px-[15px] mx-auto h-full">
            <Header darkMode={darkMode} setDarkMode={setDarkMode} />
            <div className="flex-1 overflow-hidden">{children}</div>
            <div className="flex-shrink-0">
              <Footer />
            </div>
          </div>
        </div>
        </PageTransition>
    </>
  );
};

export default ClientLayout;