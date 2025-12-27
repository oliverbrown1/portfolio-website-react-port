import Image from "next/image";
import React from "react";
import Education from "./Education";
import Experience from "./Experience";
import Projects from "./Projects";
import PortfolioWebsite from "../../assets/PortfolioWebsite.png";

const Portfolio = () => {
  return (
    <section
      id="portfolio"
      className="space-y-8 rounded-2xl border border-base-200/80 bg-base-200/60 p-6 shadow-md"
    >
      <div className="flex flex-col items-start gap-3 md:flex-row md:items-center md:justify-between">
        <div className="space-y-1">
          <p className="text-xs uppercase tracking-[0.4em] text-secondary">
            Portfolio
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-6 lg:grid-cols-[1.2fr,0.8fr]">
        <div className="flex flex-row gap-5 items-stretch rounded-3xl border border-base-100/70 bg-base-100/50 p-5 shadow-inner">
            <div className="flex-1 min-h-[320px]">
              <Education />
            </div>
            <div className="flex-1 min-h-[320px]">
              <Experience />
            </div>
        </div>

        <div className="relative rounded-3xl border border-base-200/70 bg-base-100/70 p-5 shadow-sm">
          <Projects />
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
