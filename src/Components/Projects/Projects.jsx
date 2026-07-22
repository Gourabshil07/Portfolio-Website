import ProjectCard from "./ProjectCard";
import { Link } from "react-router-dom";

import LeafNova from "../../assets/LeafNova-AI.png";
import minidrive from "../../assets/minidrive.png";

import snake_game_img from "../../assets/snake_food.png";
import password_guessing_img from "../../assets/guessing.png";

const projects = [
  {
    title: "LeafNova-AI",
    desc: "Smart plant care and disease detection system.",
    img: LeafNova,
    tech: ["Flask", "Tensorflow", "Gemini", "Groq"],
    link: "https://leafnova-ai.onrender.com/",
    
  },

  {
    title: "Minidrive Personal Cloud Storage",
    desc: "Secure cloud storage platform for uploading, managing, sharing, and organizing files.",
    img: minidrive,
    tech: ["Flask", "Supabase", "SQLite", "JavaScript"],
    link: "https://minidrive-zniy.onrender.com/login",
  },
  {
    title: "Password Guessing",
    desc: "Password guessing game with hint-based gameplay.",
    img: password_guessing_img,
    tech: ["HTML", "CSS", "JavaScript"],
    link: "https://password-guessing-gourab.netlify.app/"
  },
  {
  title: "Snake Game",
  desc: "Desktop-based snake game with a scoreboard and highest score tracking.",
  img: snake_game_img,
  tech: ["HTML", "CSS","JavaScript"],
  link: "https://snake-game-gourab.netlify.app/",
  },
];

const Projects = () => {
  return (
    <div
      id="Projects"
      className="bg-[#f8f9fb] shadow-2xl shadow-black/80 mx-0 md:mx-20 rounded-2xl px-12 pt-6 pb-2 mt-10"
    >
      <h1 className="text-3xl md:text-4xl font-black md:font-bold mb-6 text-left">
        Projects
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>

      {/* ✅ SEE MORE BUTTON */}
      <div className="flex justify-center md:justify-end mt-2">
        <Link
          to="/all-projects"
          className="px-6 py-2 rounded-full bg-[#465697] text-white font-medium hover:scale-105 transition"
        >
          See More →
        </Link>
      </div>
    </div>
  );
};

export default Projects;
