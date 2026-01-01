import React, { useState } from "react";
import { RiCloseLine, RiMenu2Line } from "@remixicon/react";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  const menuItems = ["About", "Skills", "Projects", "Education", "Contact"];

  return (
    <nav className="flex justify-between items-start md:items-center text-black px-10 md:px-20">

      {/* LOGO */}
      <span className="text-xl font-extrabold md:font-semibold tracking-wide mt-5 md:mt-0">
        Gourab Shil
      </span>

      {/* MENU */}
      <ul
        className={`${
          menu ? "block" : "hidden"
        } mt-5 md:mt-0
           font-semibold md:font-bold
           bg-black/30 md:bg-transparent
           rounded-xl md:rounded-none
           px-6 py-3 md:p-0
           text-center
           md:flex md:gap-8
           md:static`}
      >
        {menuItems.map((item) =>
          item === "Contact" ? (
            <a
              key={item}
              href="/contact/contact_index.html"
              className="block md:inline-block relative text-md p-2 md:p-0 cursor-pointer
                         font-semibold md:font-bold
                         md:after:absolute md:after:left-0 md:after:-bottom-1
                         md:after:h-[2px] md:after:w-0 md:after:bg-black
                         md:hover:after:w-full md:after:transition-all duration-300"
              onClick={() => setMenu(false)}
            >
              {item}
            </a>
          ) : (
            <a key={item} href={`#${item}`} onClick={() => setMenu(false)}>
              <li
                className="block md:inline-block relative text-md p-2 md:p-0 cursor-pointer
                           font-semibold md:font-bold
                           md:after:absolute md:after:left-0 md:after:-bottom-1
                           md:after:h-[2px] md:after:w-0 md:after:bg-black
                           md:hover:after:w-full md:after:transition-all duration-300"
              >
                {item}
              </li>
            </a>
          )
        )}
      </ul>

      {/* MOBILE ICON */}
      <div className="md:hidden absolute right-10 top-6 cursor-pointer">
        {menu ? (
          <RiCloseLine size={30} onClick={() => setMenu(false)} />
        ) : (
          <RiMenu2Line size={30} onClick={() => setMenu(true)} />
        )}
      </div>
    </nav>
  );
};

export default Navbar;
