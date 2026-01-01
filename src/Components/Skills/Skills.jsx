import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaNodeJs,
  FaReact,
  FaJava,
  FaPython,
  FaGitAlt, FaGithub
} from "react-icons/fa";
import { SiTailwindcss, SiMysql, SiMongodb, SiAmazonaws, SiGit, SiGithub } from "react-icons/si";

const Skills = () => {
  return (
    <div id="Skills"  className="text-white flex flex-col items-start overflow-hidden
             bg-zinc-900 shadow-[0_20px_60px_rgba(0,0,0,0.4)]
     mx-0 md:mx-20 bg-opacity-100
             rounded-2xl p-12 mt-10">
      <h1 className="text-3xl md:text-4xl font-extrabold md:font-bold text-white mb-6">
        Skills
      </h1>
      <div className="w-20 h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 rounded-full -mt-5"></div>
      {/* TOP TEXT */}
      <p className="text-white text-lg md:text-xl font-semibold md:font-medium max-w-3xl mb-12 mt-4">
        I have a solid understanding of modern development technologies and hands-on experience
        applying them to real-world projects. I focus on writing scalable, maintainable code and creating responsive, user-friendly applications.
      </p>


      {/* LOGOS */}
      
    <div className="flex flex-wrap justify-center gap-6 gap-y-11 ">

      <span className="group relative p-3 bg-zinc-950 rounded-2xl hover:scale-110 transition-all duration-300">
        <FaHtml5 color="#E34F26" size={50} />
        <span className="absolute -bottom-5 left-1/2 -translate-x-1/2 text-xs text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          HTML5
        </span>
      </span>

      <span className="group relative p-3 bg-zinc-950 rounded-2xl hover:scale-110 transition-all duration-300">
        <FaCss3Alt color="#1572B6" size={50} />
        <span className="absolute -bottom-5 left-1/2 -translate-x-1/2 text-xs text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          CSS3
        </span>
      </span>

      <span className="group relative p-3 bg-zinc-950 rounded-2xl hover:scale-110 transition-all duration-300">
        <SiTailwindcss color="#38BDF8" size={50} />
        <span className="absolute -bottom-9 left-1/2 -translate-x-1/2 text-xs text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          Tailwind CSS
        </span>
      </span>

      <span className="group relative p-3 bg-zinc-950 rounded-2xl hover:scale-110 transition-all duration-300">
        <FaReact color="#61DAFB" size={50} />
        <span className="absolute -bottom-5 left-1/2 -translate-x-1/2 text-xs text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          React
        </span>
      </span>

      <span className="group relative p-3 bg-zinc-950 rounded-2xl hover:scale-110 transition-all duration-300">
        <FaJs color="#F7DF1E" size={50} />
        <span className="absolute -bottom-5 left-1/2 -translate-x-1/2 text-xs text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          JavaScript
        </span>
      </span>

      <span className="group relative p-3 bg-zinc-950 rounded-2xl hover:scale-110 transition-all duration-300">
        <FaNodeJs color="#339933" size={50} />
        <span className="absolute -bottom-5 left-1/2 -translate-x-1/2 text-xs text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          Node.js
        </span>
      </span>

      <span className="group relative p-3 bg-zinc-950 rounded-2xl hover:scale-110 transition-all duration-300">
        <FaPython color="#3776AB" size={50} />
        <span className="absolute -bottom-5 left-1/2 -translate-x-1/2 text-xs text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          Python
        </span>
      </span>

      <span className="group relative p-3 bg-zinc-950 rounded-2xl hover:scale-110 transition-all duration-300">
        <FaJava color="#ED8B00" size={50} />
        <span className="absolute -bottom-5 left-1/2 -translate-x-1/2 text-xs text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          Java
        </span>
      </span>

      <span className="group relative p-3 bg-zinc-950 rounded-2xl hover:scale-110 transition-all duration-300">
        <SiMongodb color="#47A248" size={50} />
        <span className="absolute -bottom-5 left-1/2 -translate-x-1/2 text-xs text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          MongoDB
        </span>
      </span>

      <span className="group relative p-3 bg-zinc-950 rounded-2xl hover:scale-110 transition-all duration-300">
        <SiMysql color="#4479A1" size={50} />
        <span className="absolute -bottom-5 left-1/2 -translate-x-1/2 text-xs text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          MySQL
        </span>
      </span>

      <span className="group relative p-3 bg-zinc-950 rounded-2xl hover:scale-110 transition-all duration-300">
        <SiAmazonaws color="#FF9900" size={50} />
        <span className="absolute -bottom-5 left-1/2 -translate-x-1/2 text-xs text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          AWS
        </span>
      </span>

      <span className="group relative p-3 bg-zinc-950 rounded-2xl hover:scale-110 transition-all duration-300">
        <FaGitAlt color="#F05032" size={50} />
        <span className="absolute -bottom-5 left-1/2 -translate-x-1/2 text-xs text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
         Git
        </span>
      </span>

      <span className="group relative p-3 bg-zinc-950 rounded-2xl hover:scale-110 transition-all duration-300">
        <FaGithub color="#FFFFFF" size={50} />
        <span className="absolute -bottom-5 left-1/2 -translate-x-1/2 text-xs text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          GitHub
        </span>
      </span>

    </div>

    </div>
  );
};

export default Skills;
