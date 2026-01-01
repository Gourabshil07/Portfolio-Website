import React from "react";
import { motion } from "framer-motion";
import AboutImg from "../../assets/about.png";
import { IoArrowForward } from "react-icons/io5";

const About = () => {
  return (
    <div
      id="About"
      className="text-black font-semibold md:font-normal md:flex overflow-hidden items-center md:flex-wrap md:justify-center 
           bg-white mx-0 md:mx-20 bg-opacity-100 rounded-2xl
           px-12 py-4
           shadow-2xl shadow-black/60"

    >
      <div className="pl-6 sm:pl-12 md:pl-0 mb-6">
        <h2
          className="text-2xl md:text-4xl font-bold
                     text-left mt-2"
        >
          About
        </h2>

        <div className="md:flex flex-wrap flex-col md:flex-row items-center">
          {/* IMAGE with motion */}
          <motion.img
            className="md:h-80"
            src={AboutImg}
            alt="About img"
            animate={{ y: [0, -8, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          <ul>
            <div className="flex gap-3 py-4">
  
              <IoArrowForward className="text-2xl md:text-3xl mt-2 shrink-0 min-w-[28px]" />

              <span className="max-w-md">
                <h3 className="text-xl md:text-2xl font-extrabold md:font-bold tracking-tight">
                  Frontend Developer
                </h3>
                <p className="text-base md:text-sm font-medium leading-relaxed text-gray-800">
                  I enjoy building clean and responsive user interfaces using modern web technologies. 
                  I focus on writing maintainable code and creating smooth user experiences with attention 
                  to design, accessibility, and performance.
                </p>
              </span>
            </div>

            <div className="flex gap-3 py-4">
  
              <IoArrowForward className="text-2xl md:text-3xl mt-2 shrink-0 min-w-[28px]" />

              <span className="max-w-md">
                <h3 className="text-xl md:text-2xl font-extrabold md:font-bold tracking-tight">
                  Backend Developer{" "}
                  <span className="text-base md:text-sm font-semibold md:font-medium">
                    (Learning)
                  </span>
                </h3>
                <p className="text-base md:text-sm font-medium leading-relaxed text-gray-800">
                  I am currently learning backend development and enjoy working with server-side logic, APIs, and application workflows. 
                  I aim to build scalable and reliable systems that support real-world applications.
                </p>
              </span>
            </div>

            <div className="flex gap-3 py-4">
              
              <IoArrowForward className="text-2xl md:text-3xl mt-2 shrink-0 min-w-[28px]" />

              <span className="max-w-md">
                <h3 className="text-xl md:text-2xl font-extrabold md:font-bold tracking-tight">
                  Database & Data Management
                </h3>
               <p className="text-base md:text-sm font-medium leading-relaxed text-gray-800">
                  I have a solid understanding of database concepts and data management. I work with databases to store, organize, and retrieve data efficiently while maintaining data integrity.
              </p>
              </span>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
