// src/Components/Projects/ProjectCard.jsx

const techColors = {
  HTML: "bg-orange-500 text-white",
  CSS: "bg-blue-500 text-white",
  JavaScript: "bg-yellow-400 text-black",
  API: "bg-purple-500 text-white",

  Python: "bg-blue-600 text-white",
  NLP: "bg-pink-600 text-white",
  "Machine Learning": "bg-green-600 text-white",
  "Image Processing": "bg-indigo-600 text-white",
};

export default function ProjectCard({ title, desc, img, tech = [] }) {
  return (
    <div
      className="
        bg-[#0e0e0e]
        rounded-2xl
        overflow-hidden
        flex
        flex-col
        h-full
        transition-all
        duration-300
        hover:-translate-y-2
        hover:shadow-xl
        -mt-3
      "
    >
      {/* Image */}
      <div className="w-full aspect-[4/3] overflow-hidden">
        <img
          src={img}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-grow">
        <h3 className="text-lg font-semibold text-white mb-2">
          {title}
        </h3>

        <p className="text-gray-400 text-sm font-medium leading-relaxed mb-4">
          {desc}
        </p>

        {/* ✅ TECH TAGS */}
        <div className="flex flex-wrap gap-2 mt-auto">
          {tech.map((item, index) => (
            <span
              key={index}
              className={`px-3 py-1 text-xs rounded-full font-medium
                ${techColors[item] || "bg-gray-600 text-white"}`}
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
