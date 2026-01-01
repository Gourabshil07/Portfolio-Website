import ProjectCard from "./ProjectCard";
import img11 from "../../assets/weather_forecast.jpg";
import img6 from "../../assets/Resume_Analyzer.jpg";
import img7 from "../../assets/Plant_Disease.jpg";
import img13 from "../../assets/Text_Summarization.webp";

const projects = [
  {
    title: "Weather Forecast",
    desc: "Real-time weather forecasting app using APIs",
    img: img11,
    tech: ["HTML", "CSS", "API", "JavaScript",],
  },
  {
    title: "Resume Analyzer",
    desc: "AI-powered resume analyzer that scans resumes and provides job eligibility insights",
    img: img6,
    tech: ["Python","Machine Learning", "NLP"],
  },
  {
    title: "Smart Plant Disease Detection",
    desc: "ML-based system to detect plant diseases and suggest causes & cures",
    img: img7,
    tech: ["Python", "Machine Learning",],
  },
  {
    title: "Text Summarizer",
    desc: "Text summarization tool that converts long content into short summaries",
    img: img13,
    tech: ["Python", "NLP"],
  },
];

const Projects = () => {
  return (
    <div
      id="Projects"
      className="
        bg-[#f8f9fb]
        shadow-2xl
        shadow-black/80
        mx-0
        md:mx-20
        rounded-2xl
        p-12
        mt-10
        px-12 
        py-5
      "
    >
      <h1 className="text-3xl md:text-4xl font-black md:font-bold mb-8">
        Projects
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
