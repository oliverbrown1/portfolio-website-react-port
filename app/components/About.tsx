"use client";
import React from "react";

type AboutProps = {
  aboutMePressed: boolean;
  toggleAboutMe: () => void;
};

const About = ({ aboutMePressed, toggleAboutMe }: AboutProps) => {

  return (
    <section className="space-y-6" id="about">
      <div className="rounded-2xl border border-base-200/80 bg-base-200/60 p-1 md:p-6 shadow-md">

        <div className="mt-4 overflow-hidden rounded-2xl border border-base-300 bg-base-100/70">
          <button
            type="button"
            aria-expanded={aboutMePressed}
            className="flex w-full cursor-pointer justify-center rounded-2xl bg-transparent px-4 py-3 text-3xl font-semibold text-secondary transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary"
            onClick={toggleAboutMe}
          >
            …
          </button>

          <div
            aria-hidden={aboutMePressed}
            className={`overflow-y-scroll transition-[max-height,opacity]  duration-300 ${
              aboutMePressed ? "max-h-[520px] opacity-100 mr-5 ml-5" : "max-h-0 opacity-0"
            }`}
          >
            <div className="p-2 md:p-10 text-md md:text-lg text-base-content/80">
                <p className="text-xs uppercase tracking-[0.4em] text-secondary py-3">
                    About
                </p>
              <div className="space-y-4">
                <p>
                  I am a Generative AI Engineer passionate about how we can
                  leverage LLMs and agentic systems today, and what can be
                  achieved with them. Currently I am working full-time at
                  Flutter, developing agentic workflows to enhance the user
                  experience in ways that were not possible before.
                </p>
                <p>
                  As a recent Computer Science graduate from the University of
                  Warwick, I am also passionate about other areas of tech,
                  including Machine Learning and full-stack development, which
                  I explore through{" "}
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link text-secondary"
                    href="https://github.com/oliverbrown1"
                  >
                    personal projects
                  </a>
                  .
                </p>
                <p>
                  In my freetime I still like to practice on the piano and play different games on my PC.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
