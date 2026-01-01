import React from "react";
import { motion } from "framer-motion";
import EduImg from "../../assets/education_cartoon.jpg";

const Education = () => {
  return (
    <section id="Education" className="py-10 px-4 md:px-10">
      
      {/* OUTER CARD */}
      <div className="bg-slate-100 text-black rounded-2xl shadow-2xl shadow-black/60 px-12 py-8 md:px-12 md:py-8 max-w-7xl mx-auto text-left">
      
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-black md:font-bold mb-6 text-left">
          Education
        </h2>
        
        {/* Layout */}
        <div className="grid md:grid-cols-2 gap-10 items-start">
          
          {/* Left Image with AUTO MOTION */}
          <div className="bg-white rounded-2xl p-2 shadow-xl h-[260px] md:h-[360px] flex items-center justify-center overflow-hidden">
            
            <motion.img
              src={EduImg}
              alt="Education Illustration"
              className="h-full w-auto object-contain"

              /* Auto floating animation */
              animate={{ y: [0, -10, 0] }}
                transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </div>

          <div className="relative">

            <span className="absolute left-5 top-1 bottom-0 w-[3px] bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500"></span>

            <div className="flex flex-col gap-6 pl-12">

              {/* Item 1 */}
              <div className="relative">
                <span className="absolute -left-9 top-1 w-5 h-5 rounded-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500"></span>
                <p className="text-base font-extrabold md:font-bold text-blue-600">
                  2022 – 2026
                </p>
                <h3 className="text-2xl font-extrabold md:font-bold mt-1">
                  B.Tech in Computer Science and Engineering
                </h3>
                <p className="text-gray-700 mt-1 text-base font-semibold md:font-medium">
                  Bengal College of Engineering and Technology (MAKAUT), West Bengal
                </p>

              </div>

              {/* Item 2 */}
              <div className="relative">
                <span className="absolute -left-9 top-1 w-5 h-5 rounded-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500"></span>
                <p className="text-base font-extrabold md:font-bold text-blue-600">Completed 2021</p>
                <h3 className="text-2xl font-extrabold md:font-bold mt-1">
                  Higher Secondary Education (12th)
                </h3>
                <p className="text-gray-700 mt-1 text-base font-semibold md:font-medium">
                  West Bengal Council of Higher Secondary Education (WBCHSE)
                </p>
              </div>

              {/* Item 3 */}
              <div className="relative">
                <span className="absolute -left-9 top-1 w-5 h-5 rounded-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500"></span>
                <p className="text-base font-extrabold md:font-bold text-blue-600">Completed 2019</p>
                <h3 className="text-2xl font-extrabold md:font-bold mt-1">
                  Secondary Education (10th)
                </h3>
                <p className="text-gray-700 mt-1 text-base font-semibold md:font-medium">
                  West Bengal Board of Secondary Education (WBBSE)
                </p>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
