import React from "react";

type HeroProps = {
  buttonOnClick: () => void;
};

const Hero = ({ buttonOnClick }: HeroProps) => {
  return (
    <section className="hero min-h-screen" id="hero">
      <div className="hero-content text-center">
        <div className="max-w-2xl">
          <h1 className="text-5xl font-bold opacity-0 animate-[hero-fade_1s_ease_forwards] md:text-7xl">
            Oliver Brown
          </h1>
          <p
            className="py-12 text-xl opacity-0 animate-[hero-fade_1s_ease_forwards] md:text-2xl"
            style={{ animationDelay: "700ms" }}
          >
            is an{" "}
            <span className="font-semibold text-secondary">AI Engineer</span>{" "}
            based in London and recent{" "}
            <span className="font-semibold text-secondary">
              Computer Science Graduate
            </span>{" "}
            from the University of Warwick
          </p>
          <a
            className="btn btn-primary md:btn-lg px-8 text-sm md:text-lg opacity-0 animate-[hero-fade_1s_ease_forwards]"
            style={{ animationDelay: "1500ms" }}
            onClick={buttonOnClick}
            type="button"
            href="#about"
          >
            Learn more about me
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero
