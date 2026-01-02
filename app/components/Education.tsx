import React from "react";
import { motion } from "motion/react"

type educationEntry = {
    id : string;
    degree : string;
    school : string;
    date_start : string;
    date_end : string;
    desc: string;

}

const educations : educationEntry[] = [
    {
        id : "ed1",
        degree : "Computer Science BSc",
        school : "University of Warwick",
        date_start : "2022",
        date_end : "2025",
        desc : " Recently graduated from the University of Warwick with a 2:1 and have completed a dissertation exploring the use of Deep Reinforcement Learning in 'speedrunning' (3D) games. In this project I learnt a lot about different Reinforcement Learning methods and how to apply them into an agents behaviour using Tensorflow and NumPy, and best practices for training neural nets in general.",
    },
    {
        id : "ed2",
        degree : "IB Diploma (A-level equivalent)",
        school : "Dartford Grammar School",
        date_start : "2020",
        date_end : "2022",
        desc: "Graduated sixth form with an IB Diploma, taking higher Mathematics, Physics and Computer Science. Achieved 43/45 points in total and a 7 in all my higher level subjects."
    }
]

const Education = () => {
  return (
    <div className="card bg-base-100 w-full h-full shadow-sm p-1 md:p-5">
        <div className="flex w-full flex-col items-start justify-start gap-6">
            <p className="text-xs uppercase tracking-[0.4em] text-secondary">Education</p>
            {/* Open the modal using document.getElementById('ID').showModal() method */}
            <div className="w-full space-y-5">
            {educations.map((ed) => (
                <div key={ed.id}>
                    <motion.button
                        whileHover={{
                        scale: 1.05,
                        transition: { duration: 0.3 },
                        }}
                        className="btn btn-ghost w-full rounded-2xl border border-base-200 bg-base-100/70 p-4 text-base font-semibold text-base-content flex flex-col items-start mb-8 lg:mb-0 text-left"
                        onClick={() => document.getElementById(ed.id).showModal()}
                    >
                        <div className="flex flex-row justify-between w-full">
                            <span className="text-secondary text-sm lg:text-lg">
                              {ed.degree},{" "}
                              <span className="text-base-content/70 text-sm lg:text-lg">
                                {ed.school}
                              </span>
                            </span>
                            <span className="rounded-full border border-secondary/40 px-3 py-1 text-xs lg:text-mdfont-semibold text-secondary">
                            {ed.date_start} - {ed.date_end}
                            </span>
                        </div>
                    </motion.button>
                    <dialog id={ed.id} className="modal">
                    <div className="modal-box">
                        <h3 className="font-bold text-xl">{ed.degree}</h3>
                        <h5 className="text-lg text-gray-500">{ed.school}</h5>
                        <p className="py-4 text-lg">{ed.desc}</p>
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

export default Education;
