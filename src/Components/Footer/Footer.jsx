import React from "react";
import {
  FaFileDownload,
  FaLinkedin,
  FaGithub,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full">
      {/* ===== MAIN BLUE FOOTER ===== */}
      <div
        className="
          w-full
          bg-[#465697]
          text-white
          flex
          flex-col
          items-center
          text-center
          pt-5
          pb-6
        "
      >
        <h2 className="text-2xl md:text-3xl font-extrabold md:font-bold">
          Let’s Work Together
        </h2>


       <p className="text-sm md:text-base font-semibold md:font-medium opacity-90 mb-6">
        Open to internships & entry-level roles
      </p>
        <a
          href="/contact/contact_index.html"
          className="
            bg-white
            text-[#465697]
            px-8
            py-2
            rounded-full
            text-sm
            md:text-base
            font-medium
            hover:scale-105
            transition-transform
          "
        >
          Contact Me
        </a>

        {/* ===== Social Icons ===== */}
        <div className="flex gap-6 mt-4 items-center">
          {/* CV Download */}
          <a
            href="/CV/Gourab_Shil_Resume.pdf"
            download="Gourab_Shil_Resume.pdf"
            className="text-white text-2xl hover:scale-125 hover:text-green-300 transition-all duration-300"
            title="Download CV"
          >
            <FaFileDownload />
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/gourab-shil-137004255/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-2xl hover:scale-125 hover:text-blue-300 transition-all duration-300"
          >
            <FaLinkedin />
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/Gourabshil07"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-2xl hover:scale-125 hover:text-gray-300 transition-all duration-300"
          >
            <FaGithub />
          </a>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/gourabshil07/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-2xl hover:scale-125 hover:text-pink-300 transition-all duration-300"
          >
            <FaInstagram />
          </a>
        </div>
      </div>

      {/* ===== BOTTOM COPYRIGHT STRIP ===== */}
      <div className="w-full bg-white/60 text-center py-2">
        <p className="text-xs md:text-sm text-gray-800">
          © {new Date().getFullYear()} Gourab Shil | All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
