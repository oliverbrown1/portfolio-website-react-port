"use client";
import React from "react";

type AboutProps = {
  aboutMePressed: boolean;
  toggleAboutMe: () => void;
};

const About = ({ aboutMePressed, toggleAboutMe }: AboutProps) => {

  return (
    <section className="space-y-6" id="about">
      <div className="rounded-2xl border border-base-200/80 bg-base-200/60 p-6 shadow-md">

        <div className="mt-4 overflow-hidden rounded-2xl border border-base-300 bg-base-100/70">
          <button
            type="button"
            aria-expanded={aboutMePressed}
            className="flex w-full justify-center rounded-2xl bg-transparent px-4 py-3 text-3xl font-semibold text-secondary transition hover:text-secondary-focus focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary"
            onClick={toggleAboutMe}
          >
            …
          </button>

          <div
            aria-hidden={aboutMePressed}
            className={`overflow-hidden transition-[max-height,opacity] duration-300 ${
              aboutMePressed ? "max-h-[240px] opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <div className="p-6 text-xl text-base-content/80">
                <p className="text-xs uppercase tracking-[0.4em] text-secondary py-3">
                    About
                </p>
              <p className="mb-2">
                I am a Generative AI Engineer passionate about how we can leverage LLMs to automate processes and enhance the user experience, as well as looking at what can be achieved with agentic AI systems today. 

                As a recent Computer Science graduate from the University of Warwick, I am also passionate about other areas of tech, including ML and full-stack development, which I explore through <a target="_blank" className="link text-secondary" href="https://github.com/oliverbrown1">personal projects</a>.

                In my freetime I stil like to practice on the piano and play different games on my PC.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
