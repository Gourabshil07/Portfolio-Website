import React, { useState } from "react";
import { RiCloseLine, RiMenu2Line } from "@remixicon/react";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  const menuItems = ["About", "Skills", "Projects", "Education", "Contact"];

  return (
    /* NAVBAR WRAPPER*/
    <div className="w-full bg-white/40 shadow-md sticky top-0 z-50">
      <nav className="relative max-w-7xl mx-auto flex justify-between items-center px-6 md:px-20 py-2 text-black">

        {/*LOGO*/}
        <span className="text-xl font-bold tracking-wide">
          Gourab Shil
        </span>

        {/*DESKTOP MENU*/}
        <ul className="hidden md:flex gap-8 font-semibold">
          {menuItems.map((item) =>
            item === "Contact" ? (
              <a
                key={item}
                href="/contact/contact_index.html"
                className="relative cursor-pointer
                           after:absolute after:left-0 after:-bottom-1
                           after:h-[2px] after:w-0 after:bg-black
                           hover:after:w-full after:transition-all duration-300"
              >
                {item}
              </a>
            ) : (
              <a
                key={item}
                href={`#${item}`}
                className="relative cursor-pointer
                           after:absolute after:left-0 after:-bottom-1
                           after:h-[2px] after:w-0 after:bg-black
                           hover:after:w-full after:transition-all duration-300"
              >
                {item}
              </a>
            )
          )}
        </ul>

        {/*MOBILE MENU ICON */}
        <div className="md:hidden absolute right-6 top-3 cursor-pointer">
          {menu ? (
            <RiCloseLine size={28} onClick={() => setMenu(false)} />
          ) : (
            <RiMenu2Line size={28} onClick={() => setMenu(true)} />
          )}
        </div>

        {menu && (
          <ul className="absolute top-full right-6 mt-3 w-44 bg-white rounded-xl shadow-lg text-center font-semibold md:hidden">
            {menuItems.map((item) =>
              item === "Contact" ? (
                <a
                  key={item}
                  href="/contact/contact_index.html"
                  onClick={() => setMenu(false)}
                  className="block px-4 py-3 hover:bg-gray-100 rounded-xl"
                >
                  {item}
                </a>
              ) : (
                <a
                  key={item}
                  href={`#${item}`}
                  onClick={() => setMenu(false)}
                  className="block px-4 py-3 hover:bg-gray-100 rounded-xl"
                >
                  {item}
                </a>
              )
            )}
          </ul>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
