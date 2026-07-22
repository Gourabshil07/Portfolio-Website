import { Routes, Route } from "react-router-dom";

import About from "./Components/About/About.jsx";
import Skills from "./Components/Skills/Skills.jsx";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import Projects from "./Components/Projects/Projects.jsx";
import Education from "./Components/Education/Education.jsx";
import AllProjects from "./Components/Projects/All_projects.jsx";



function HomeLayout() {
  return (
    <div className="bg-[#8b8b92] h-auto w-full overflow-hidden">
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Education />
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomeLayout />} />
      <Route path="/all-projects" element={<AllProjects />} />
  </Routes>
  );
}

export default App;
