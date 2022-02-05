import React, { useState } from "react";
import { PhCubeFill, IconoirMenu, MdiClose } from "./Icons.jsx";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="relative items-center justify-between text-blue sm:flex">
      <a href="/" className="block h-16 w-16 transition hover:scale-110">
        <PhCubeFill aria-hidden="true" focusable="false" />
        <span class="sr-only">Home</span>
      </a>

      <button
        onClick={() => setOpen(!open)}
        className="absolute top-0 right-0 my-4 h-8 w-8 sm:hidden"
      >
        {open ? (
          <MdiClose aria-hidden="true" focusable="false" />
        ) : (
          <IconoirMenu aria-hidden="true" focusable="false" />
        )}
        <span class="sr-only">Navbar Button</span>
      </button>

      <nav
        className={`mt-6 text-lg text-xl font-bold sm:mt-0 sm:block ${
          open ? "block" : "hidden"
        }`}
      >
        <ul className="flex justify-center gap-6 sm:flex-row">
          <li>
            <a href="/projects" className="hover:underline">
              Projects
            </a>
          </li>
          <li>
            <a href="/blog" className="hover:underline">
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
