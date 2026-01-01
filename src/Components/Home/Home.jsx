import React from "react";
import avatarImg from "../../assets/test2.png";
import TextChange from "../TextChange";

const Home = () => {
  return (
    <div className="text-white flex w-full justify-between items-start p-10 md:p-20">
      <div className="md:w-2/4 md:pt-10 ">
        <h1 className="text-xl md:text-6xl font-bold flex leading-normal tracking-tighter">
          <TextChange />
        </h1>
        <p className="text-base md:text-2xl font-semibold md:font-medium tracking-tight mt-2 mb-5">
          Computer Science student & aspiring Web Developer focused on clean, responsive web applications.
        </p>

        <button>
          <a
            href="/contact/contact_index.html"
            className="
              mt-5
              text-white
              bg-[#465697]
              font-semibold
              rounded-full
              transition-all duration-300
              hover:opacity-90 hover:scale-100

              /* RESPONSIVE TEXT */
              text-sm sm:text-base md:text-lg

              /* RESPONSIVE PADDING */
              px-5 py-2
              sm:px-7 sm:py-2
              md:px-9 md:py-3

              /* WIDTH FIX */
              whitespace-nowrap
              shadow-md shadow-black/70
            "
          >
           Contact Me
          </a>
        </button>
      </div>
      <div
          className="
            h-64 sm:h-64 md:h-80        
            mt-0                    
            mx-auto                   
            max-w-[420px] 
            flex justify-center
            flex-shrink-0
          "
        >
          <img
            src={avatarImg}
            alt="avatar"
            className="h-full w-auto object-contain
            min-h-[256px]
            "
          />
      </div>




    </div>
  );
};

export default Home;