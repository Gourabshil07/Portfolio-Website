import React from "react";
import { FaFileDownload } from "react-icons/fa";

const CV_Download = ({ size = "text-2xl", className = "" }) => {
  return (
    <a
      href="/CV/Gourab_Shil_Resume.pdf"
      download="Gourab_Shil_Resume.pdf"
      title="Download CV"
      className={`text-white ${size} translate-y-1 hover:scale-125 hover:text-green-300 transition-all duration-300 ${className}`}
    >
      <FaFileDownload />
    </a>
  );
};

export default CV_Download;
