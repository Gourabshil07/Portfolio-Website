import ProjectCard from "./ProjectCard";
import { Link } from "react-router-dom";

import LeafNova from "../../assets/LeafNova-AI.png";
import minidrive from "../../assets/minidrive.png";
import weather_img from "../../assets/weather_forecast.jpg";
import resume_img from "../../assets/Resume_Analyzer.jpg";
import plant_disease_img from "../../assets/Plant_Disease.jpg";
import text_summarizer_img from "../../assets/Text_Summarization.webp";
import snake_game_img from "../../assets/snake_food.png";
import password_guessing_img from "../../assets/guessing.png";


const allProjects = [

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
    title: "Snake Game",
    desc: "Desktop-based snake game with a scoreboard and highest score tracking.",
    img: snake_game_img,
    tech: ["HTML", "CSS", "JavaScript"],
    link: "https://snake-game-gourab.netlify.app/"
  },
  {
    title: "Resume Analyzer",
    desc: "AI-powered resume analyzer that scans resumes and provides job eligibility insights.",
    img: resume_img,
    tech: ["Python", "API", "NLP","Streamlit"],
    link: "https://resume-analyzer-gourab.streamlit.app/"
  },

  {
    title: "Text Summarizer",
    desc: "Text summarization tool that converts long content into short summaries.",
    img: text_summarizer_img,
    tech: ["Python","NLP", "Streamlit"],
    link: "https://gourab-text-summarizer.streamlit.app/"
  },
   {
    title: "Password Guessing Game",
    desc: "A password guessing game where players crack the correct password using smart hints.",
    img: password_guessing_img,
    tech: ["HTML", "CSS", "JavaScript"],
    link: "https://password-guessing-gourab.netlify.app/"
  },

];

const AllProjects = () => {
  return (
    <section
      className="
        w-full
        min-h-screen
        px-6 md:px-20
        py-10
       bg-[#8b8b92]
      "
    >
      {/* HEADER */}
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-white">
          All Projects
        </h1>

        <Link
          to="/"
          className="text-xs md:text-base font-semibold md:font-bold text-black"
        >
          ← Back
        </Link>
      </div>

      {/* PROJECT GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {allProjects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </section>
  );
};

export default AllProjects;
