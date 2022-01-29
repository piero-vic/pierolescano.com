import React, { useState } from "react";
import { PhCubeFill, IconoirMenu, MdiClose } from "./Icons.jsx";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="relative items-center justify-between sm:flex text-blue">
      <a href="/" className="block w-16 h-16 transition hover:scale-110">
        <PhCubeFill />
      </a>

      <button
        onClick={() => setOpen(!open)}
        className="absolute top-0 right-0 w-8 h-8 my-4 sm:hidden"
      >
        {open ? <MdiClose /> : <IconoirMenu />}
      </button>

      <nav
        className={`mt-6 text-lg font-bold sm:mt-0 text-xl sm:block ${
          open ? "block" : "hidden"
        }`}
      >
        <ul className="flex sm:flex-row gap-6 justify-center">
          <li>
            <a href="/projects" className="hover:underline">
              Projects
            </a>
          </li>
          <li>
            <a href="https://medium.com/@piero-vic" className="hover:underline">
              Blog
            </a>
          </li>
          <li>
            <a href="/contact" className="hover:underline">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
