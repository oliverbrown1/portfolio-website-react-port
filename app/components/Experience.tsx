import React from "react";
import { motion } from "motion/react";

type experienceEntry = {
    id : string;
    role : string;
    company : string;
    date_start : string;
    date_end : string;
    desc: string;

}

const experiences : experienceEntry[] = [
    {
        id : "exp1",
        role : "Generative AI Engineer",
        company : "Flutter Entertainment",
        date_start : "Sept 2025",
        date_end : "Now",
        desc : "Currently working in the R&D Disruptive Innovation team at Flutter, exploring multi-modal, agentic use-cases of LLMs and how they can be used for more than just a chatbot.",
    },
    {
        id : "exp2",
        role : "Software Developer Intern",
        company : "AVEVA",
        date_start : "June 2024",
        date_end : "Aug 2024",
        desc : "In the Summer of my second year I interned at AVEVA in their Cambridge Science Park office, where I developed a RAG-based ai assistant for an application called E3D (Everything 3D - design software for industrial applications). The 'RAG' architecture implemented with Langchain is a tool that grounds the LLM's knowledge within the context of the applications documentation.",
    },
    {
        id: "exp3",
        role: "Tech Tutor",
        company : "Funtech",
        date_start : "July 2023",
        date_end : "Sept 2023",
        desc: "I had the opportunity to take the lead in teaching Python to kids of all ages during the Summer of my first year, providing both a first-look and a solid foundation into programming and logic.",

    }
]

const Experience = () => {
  return (
    <div className="card bg-base-100 w-full h-full shadow-sm p-1 md:p-5">
        <div className="flex w-full flex-col items-start justify-start gap-6">
            <p className="text-xs uppercase tracking-[0.4em] text-secondary">Experience</p>
            <div className="w-full space-y-5">
            {experiences.map((exp) => (
                <div key={exp.id}>
                    <motion.button
                        whileHover={{
                        scale: 1.05,
                        transition: { duration: 0.3 },
                        }}
                        className="btn btn-ghost w-full rounded-2xl border border-base-200 bg-base-100/70 p-4 text-base font-semibold text-base-content flex flex-col items-start mb-8 lg:mb-0 text-left"
                        onClick={() => {
                          const dialog = document.getElementById(
                            exp.id
                          ) as HTMLDialogElement | null;
                          dialog?.showModal();
                        }}
                    >   
                        <div className="flex flex-row justify-between w-full">
                            <span className="text-secondary text-sm lg:text-lg">
                              {exp.role}{" "}
                              <span className="text-base-content/70 text-sm lg:text-lg">
                                @ {exp.company}
                              </span>
                            </span>
                            <span className="rounded-full border border-secondary/40 px-3 py-1 text-xs lg:text-md font-semibold text-secondary">
                            {exp.date_start} - {exp.date_end}
                            </span>
                        </div>
                    </motion.button>
                    <dialog id={exp.id} className="modal">
                    <div className="modal-box">
                        <h3 className="font-bold text-xl">{exp.role}</h3>
                        <h5 className="text-lg text-gray-500">{exp.company}</h5>
                        <p className="py-4 text-lg">{exp.desc}</p>
                        <form method="dialog" className="modal-backdrop"> <button className="btn" type="submit">close</button></form>
                    </div>
                    <form method="dialog" className="modal-backdrop">
                        <motion.button type="submit">close</motion.button>
                    </form>
                    </dialog>
                </div>
            ))}
            </div>
        </div>
    </div>
  );
};

export default Experience;
