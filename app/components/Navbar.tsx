"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "motion/react"
import { button } from "motion/react-client";

type NavbarProps = {
  buttonOnClick: () => void;
};

const Navbar = ({ buttonOnClick }: NavbarProps) => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [activeTab, setActiveTab] = useState("")
  const lastScrollYRef = useRef(0);

  const enableTab = (tabName: string) => {
    setActiveTab(tabName);
  };

  const aboutNav = () => {
    setActiveTab("about");
    buttonOnClick();
  };

  useEffect(() => {
    const checkScroll = () => {
      const currentScrollY = window.scrollY;
      setShowNavbar(currentScrollY <= 1000 || currentScrollY < lastScrollYRef.current);
      lastScrollYRef.current = currentScrollY;
    };

    checkScroll();
    window.addEventListener("scroll", checkScroll, { passive: true });
    return () => window.removeEventListener("scroll", checkScroll);
  }, []);

  return (
    <motion.div
      animate = {showNavbar ? "visible" : "hidden"}
      transition = {{
        duration : 0.2
      }}
      variants={{
        hidden : {
            y : "-80%"
        },
        visible : {
            y : "0%"
        }
      }}
      className="navbar fixed top-0 z-30 w-full bg-base-200 px-6 shadow-sm pt-3"
    >
      {/* <header className="navbar fixed top-0 z-30 w-full bg-base-200 px-6 shadow-sm pt-3"> */}
        <div className="flex-1">
          <span className="text-lg md:text-xl font-semibold tracking-wide text-secondary">
            Oliver Brown
          </span>
        </div>
        <nav className="flex-none">
          <ul className="menu menu-horizontal gap-2 text-md md:text-lg font-medium">
            <li>
                <a href="#about" onClick={aboutNav} className={`hover:text-primary-focus ${activeTab === "about" ? "text-secondary font-bold" : ""}`}>
                About
               </a>
            </li>
            <li>
              <a href="#portfolio" className={`hover:text-primary-focus ${activeTab === "portfolio" ? "text-secondary font-bold" : ""}`} onClick={() => enableTab("portfolio")}>
                Portfolio
              </a>
            </li>
            <li>
              <a href="#contact" className={`hover:text-primary-focus ${activeTab === "contact" ? "text-secondary font-bold" : ""}`} onClick={() => enableTab("contact")}>
                Contact
              </a>
            </li>
          </ul>
        </nav>
      {/* </header> */}
    </motion.div>
  );
};

export default Navbar
