import React, { useState } from "react";
import { PhCubeFill, IconoirMenu, MdiClose } from "./Icons.jsx";
import NavbarLink from "./NavbarLink.jsx";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="relative items-center justify-between text-blue sm:flex">
      <a href="/" className="block h-16 w-16 transition hover:scale-110">
        <PhCubeFill aria-hidden="true" focusable="false" />
        <span className="sr-only">Home</span>
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
        <span className="sr-only">Navbar Button</span>
      </button>

      <nav className={`mt-6 text-lg font-bold sm:mt-0 sm:block ${open ? "block" : "hidden"}`}>
        <ul className="flex justify-center gap-6 sm:flex-row">
          <NavbarLink text="Projects" path="/projects" />
          <NavbarLink text="Blog" path="/blog" />
          <NavbarLink text="Contact" path="/contact" />
        </ul>
      </nav>
    </header>
  );
};

export default Header;
