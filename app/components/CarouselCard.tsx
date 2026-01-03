import React from "react";
import Image from "next/image";
import SampleGraphic from "../../assets/mern.png";

type CarouselCardProps = {
  card_id: string;
};

const CarouselCard = ({ card_id }: CarouselCardProps) => {
  return (
    <div id={card_id} className="carousel-item w-full justify-center items-center">
            <div className="card bg-base-100 image-full w-3/4 h-full shadow-sm">
            {/* {image}
            {text_content} */}
            <figure>
                <Image
                src={SampleGraphic}
                    alt="MERN mockup"
                    fill
                    className="object-cover opacity-70 blur-xs"
                    sizes="(max-width: 640px) 100vw, 720px"
                    priority
                />
            </figure>
            <div className="card-body justify-center text-center items-center">
                <h2 className="card-title">Full-Stack Ecommerce using MERN</h2>
                <p>Currently developing a full-stack Ecommerce solution using a MERN stack (MongoDB, Express.js, React.js, Node.js) which currently utilises JWT tokens for authentication and DaisyUI for the frontend.</p>
                <div className='flex flex-row gap-3'> 
                <div className="tooltip" data-tip="React">
                    <button data-bs-placement="top" title="React"><img height="24" width="24" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg" /></button>
                </div>
                <div className="tooltip" data-tip="TailwindCSS">
                    <button data-bs-placement="top" title="Tailwind"><img height="24" width="24" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/tailwindcss/tailwindcss-original.svg" /></button>
                </div>
                <div className="tooltip" data-tip="Node.js">
                    <button data-bs-placement="top" title="Nodejs"><img height="24" width="24" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg" /></button>
                </div>
                <div className="tooltip" data-tip="Express.js">
                    <button data-bs-placement="top" title="Nodejs">
                      <img
                        height="24"
                        width="24"
                        src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg"
                        style={{ filter: "invert(1)" }}
                        alt="Express icon"
                      />
                    </button>
                </div>
                                <div className="tooltip" data-tip="MongoDB">
                    <button data-bs-placement="top" title="Nodejs"><img height="24" width="24" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg" /></button>
                </div>
                </div>
                <div className="card-actions justify-end">
                </div>
            </div>
            </div>
    </div>
  );
};

export default CarouselCard;
