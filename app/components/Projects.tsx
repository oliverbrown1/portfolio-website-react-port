"use client";
import React, { useEffect, useRef, useState } from "react";
import { StaticImageData } from "next/image";
import Image from "next/image";
import graphic_1 from "../../assets/mern.png";
import graphic_2 from "../../assets/taskmanager.png";
import graphic_3 from "../../assets/connect4.png";
import graphic_4 from "../../assets/PortfolioWebsite.png";
import graphic_5 from "../../assets/NewsAnalysis.png";
import graphic_6 from "../../assets/passmanager.png";

type CarouselCardData = {
  id: string;
  href : string;
  image: StaticImageData;
  name: string;
  description: string;
  tooltip_names: string[];
  tooltip_urls: string[];
};

const projectSlides: CarouselCardData[] = [
  {
    id: "item1",
    href : "https://github.com/oliverbrown1/mern-ecommerce-solution",
    image: graphic_1,
    name: "Full-Stack Ecommerce using MERN",
    description:
      "Prototype of a full-stack ecommerce store using MongoDB, Express, React, Node.js, JWT authentication, and daisyUI for the frontend.",
    tooltip_names: ["React", "TailwindCSS", "Node.js", "Express.js"],
    tooltip_urls: [
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg",
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/tailwindcss/tailwindcss-original.svg",
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg",
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg",
    ],
  },
  {
    id: "item2",
    href : "https://github.com/oliverbrown1/ReactTaskManager",
    image: graphic_2,
    name: "Full-Stack Task Manager Web App",
    description:
      "Productivity tool featuring AI task assistance (Llama) and a PocketBase backend to orchestrate user data securely.",
    tooltip_names: ["React", "TailwindCSS", "Next.js", "PocketBase"],
    tooltip_urls: [
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg",
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/tailwindcss/tailwindcss-original.svg",
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/nextjs/nextjs-original.svg",
      "https://cdn.simpleicons.org/pocketbase/0",
    ],
  },
  {
    id: "item3",
    href : "https://github.com/oliverbrown1/gradient-boosted-trees",
    image: graphic_3,
    name: "Gradient Boosted Trees",
    description:
      "Custom XGBoost pipeline on California housing data with Python, Pandas, and Jupyter for experimentation.",
    tooltip_names: ["Python", "Jupyter Notebook", "Pandas"],
    tooltip_urls: [
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg",
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/jupyter/jupyter-original.svg",
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/pandas/pandas-original.svg",
    ],
  },
  {
    id: "item4",
    href : "https://github.com/oliverbrown1/portfolio_website",
    image: graphic_4,
    name: "Portfolio Website",
    description:
      "Rebuilt and customized a Bootstrap template, now adding interactivity and fresh visuals for this very site.",
    tooltip_names: ["HTML", "Bootstrap", "JavaScript"],
    tooltip_urls: [
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg",
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-original.svg",
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
    ],
  },
  {
    id: "item5",
    href : "https://github.com/oliverbrown1/news_sentiment_analysis/tree/main",
    image: graphic_5,
    name: "News Sentiment Analysis",
    description:
      "Python scraper that runs NLP sentiment scoring on news articles via Hugging Face transformers and PyTorch models.",
    tooltip_names: ["Python", "Hugging Face", "PyTorch", "Pandas"],
    tooltip_urls: [
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg",
      "https://huggingface.co/front/assets/huggingface_logo-noborder.svg",
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/pytorch/pytorch-original.svg",
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/pandas/pandas-original.svg",
    ],
  },
//   {
//     id: "item6",
//     href : "https://github.com/oliverbrown1/PassManager",
//     image: graphic_6,
//     name: "PassManager",
//     description:
//       "Password management UI built in JavaFX for the Year 13 Computer Science IA.",
//     tooltip_names: ["Java"],
//     tooltip_urls: [
//       "https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg",
//     ],
//   },
];

const Projects = () => {
  const [isAutoScroll, setIsAutoScroll] = useState(true);
  const currentIndexRef = useRef(0);
  const intervalRef = useRef<number | null>(null);

  useEffect(() => {
    if (!isAutoScroll) {
      if (intervalRef.current !== null) {
        window.clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
      return;
    }

    intervalRef.current = window.setInterval(() => {
      currentIndexRef.current =
        (currentIndexRef.current + 1) % projectSlides.length;
      const targetId = projectSlides[currentIndexRef.current].id;
      document.getElementById(targetId)?.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "start",
      });
    }, 5000);

    return () => {
      if (intervalRef.current !== null) {
        window.clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [isAutoScroll]);

  const stopAutoScroll = () => setIsAutoScroll(false);

  return (
    <div className="space-y-4">
        <p className="text-xs uppercase tracking-[0.4em] text-secondary">Projects</p>
      <div
        className="carousel w-full min-h-[420px]"
        onMouseEnter={stopAutoScroll}
        onFocusCapture={stopAutoScroll}
        onPointerDown={stopAutoScroll}
        onTouchStart={stopAutoScroll}
      >
        {projectSlides.map((card, i) => (
          <a
            href={card.href}
            target="_blank"
            key={card.id}
            id={card.id}
            className="carousel-item w-full justify-center items-center"
          >
            <div className="card bg-base-100 image-full w-3/4 h-full shadow-sm">
              <figure>
                <Image
                  src={card.image}
                  alt={card.name}
                  fill
                  className="object-cover opacity-70 blur-xs"
                  sizes="(max-width: 640px) 100vw, 720px"
                  priority
                />
              </figure>
              <div className="card-body justify-center text-center items-center text-lg gap-3">
                <h2 className="card-title text-xl">{card.name}</h2>
                <div className="flex w-full flex-col items-center gap-3">
                  <p className="max-w-2xl text-center leading-relaxed text-lg">
                    {card.description}
                  </p>
                  <div className="flex flex-row flex-wrap items-center justify-center gap-1.5 text-sm">
                    {card.tooltip_names.map((name, index) => (
                      <div key={name} className="tooltip" data-tip={name}>
                        <button data-bs-placement="top" title={name}>
                          <img
                            height="36"
                            width="36"
                            src={card.tooltip_urls[index]}
                            alt={name}
                            style={name === "Express.js" ? { filter: "invert(1)" } : undefined}
                          />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                  <button
                    type="button"
                    className={`btn btn-circle ${i === 0 ? "invisible" : ""}`}
                    onClick={(event) => {
                      event.preventDefault();
                      event.stopPropagation();
                      if (i === 0) return;
                      const targetId = projectSlides[i - 1].id;
                      document.getElementById(targetId)?.scrollIntoView({
                        behavior: "smooth",
                        block: "nearest",
                        inline: "start",
                      });
                    }}
                    aria-label="Previous project"
                  >
                    ❮
                  </button>
                  <button
                    type="button"
                    className={`btn btn-circle ${i === projectSlides.length - 1 ? "invisible" : ""}`}
                    onClick={(event) => {
                      event.preventDefault();
                      event.stopPropagation();
                      if (i === projectSlides.length - 1) return;
                      const targetId = projectSlides[i + 1].id;
                      document.getElementById(targetId)?.scrollIntoView({
                        behavior: "smooth",
                        block: "nearest",
                        inline: "start",
                      });
                    }}
                    aria-label="Next project"
                  >
                    ❯
                  </button>
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>
      <div className="flex w-full justify-center gap-2 py-2">
        {projectSlides.map((card, index) => (
          <a
            key={card.id}
            href={`#${card.id}`}
            className="btn btn-xs"
            onClick={(event) => {
              event.preventDefault();
              const scrollX = window.scrollX;
              const scrollY = window.scrollY;
              window.location.hash = card.id;
              window.scrollTo(scrollX, scrollY);
            }}
          >
            {index + 1}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Projects;
