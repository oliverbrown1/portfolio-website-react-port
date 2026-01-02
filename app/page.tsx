"use client"
import React, {useState} from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import DarkVeil from "./components/Darkveil";
import LightRays from './components/LightRays';
import Plasma from './components/Plasma';
import Threads from './components/Threads'

export default function Home() {
  const [aboutMePressed, setAboutMePressed] = useState(false);

  const enableAboutMe = () => {
    setAboutMePressed(true);
  };

  const toggleAboutMe = () => {
    setAboutMePressed((prev) => !prev);
  };

  return (
    <div className="min-h-screen bg-base-100 text-base-content relative overflow-hidden">
      <Navbar buttonOnClick={enableAboutMe} />

      <div className="absolute inset-x-0 top-16 -z-10 h-[calc(100vh-4rem)] w-full">
        {/* <DarkVeil /> */}
        {/* <LightRays rayLength={1} className="custom-rays" /> */}

        {/* <Plasma 
          color="#f43098"
          speed={0.6}
          direction="forward"
          scale={2}
          opacity={0.7}
          mouseInteractive={true}
        /> */}
        <Threads
          amplitude={1}
          distance={0}
          enableMouseInteraction={true}
        />
      </div>


      <main className="px-6 py-12">
        <Hero buttonOnClick={enableAboutMe}/>

        <About aboutMePressed={aboutMePressed} toggleAboutMe={toggleAboutMe}  />

        <Portfolio />

        <Contact />
      </main>
    </div>
  );
}
